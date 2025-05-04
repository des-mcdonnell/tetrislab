import { FSS_ITEMS, MMTR_ITEMS, VARIANT_VALUES, } from './constants';

import { ParticipantRow, SurveyItem, NotificationItem } from './types';

export const getFilteredParticipantData = (data: ParticipantRow, csvColumnsToInclude: string[]) => {
  // Filter the data to include only the specified columns
  return csvColumnsToInclude.reduce((acc, column) => {
    if (data[column] !== undefined) {
      acc[column] = data[column];
    }
    return acc;
  }, {} as ParticipantRow);
}

export const getTransformedParticipantData = (data: ParticipantRow) => {
  const {id, gender, age, variant, mmtr, fss, gameScore, notifications} = data;

  return {
    'ID': Number(id),
    'SEX': gender,
    'AGE': Number(age),
    'GROUP': VARIANT_VALUES[variant as keyof typeof VARIANT_VALUES],
    ...transformSurveyData(JSON.parse(mmtr), MMTR_ITEMS),
    ...transformSurveyData(JSON.parse(fss), FSS_ITEMS),
    'TETRIS_SCORE': Number(gameScore),
    'NOTIFICATIONS_COUNT': getNotificationsCount(JSON.parse(notifications)),
    'NOTIFICATIONS_DURATION': getNotificationsDuration(JSON.parse(notifications))
  };
}

export const transformSurveyData = (data: SurveyItem[], spssVariableNames: string[]) => {
  return spssVariableNames
    .reduce((acc, variableName, index) => {
    acc[variableName] = data[index].response?.value!;
    return acc;
  }, {} as { [key: string]: number | null });
};

export const getNotificationsCount = (notifications: NotificationItem[]) => {
  return notifications.length;
}

export const getNotificationsDuration = (notifications: NotificationItem[]) => {
  return notifications.reduce((totalDuration, notification) => {
    const duration = notification.end - notification.start;
    return totalDuration + duration;
  }, 0)
}