import { FSS_ITEMS, MMTR_ITEMS, MMTR_LEVEL_DIVIDER, VARIANT_VALUES, } from './constants';

import { ParticipantRow, SurveyItem } from './types';

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
  const {id, gender, age, variant, mmtr, fss, gameLevel, gameRows, gameScore, gameStart, gameEnd, overallStart, overallEnd} = data;
  const mmtrTotal = getSurveyTotal(JSON.parse(mmtr));
  const ffsTotal = getSurveyTotal(JSON.parse(fss));

  return {
    'ID': Number(id),
    'SEX': gender,
    'AGE': Number(age),
    'GROUP': VARIANT_VALUES[variant as keyof typeof VARIANT_VALUES],
    ...transformSurveyData(JSON.parse(mmtr), MMTR_ITEMS),
    'MMTR_TOTAL': mmtrTotal,
    'MMTR_LEVEL': mmtrTotal! > MMTR_LEVEL_DIVIDER ? 2 : 1,
    ...transformSurveyData(JSON.parse(fss), FSS_ITEMS),
    'FFS_TOTAL': ffsTotal,
    'TETRIS_LEVEL': Number(gameLevel),
    'TETRIS_ROWS': Number(gameRows),
    'TETRIS_SCORE': Number(gameScore),
    'TETRIS_TOT': Number(gameEnd) - Number(gameStart),
    'TOTAL_DURATION': Number(overallEnd) - Number(overallStart),
  };
}

export const transformSurveyData = (data: SurveyItem[], spssVariableNames: string[]) => {
  return spssVariableNames
    .reduce((acc, variableName, index) => {
    acc[variableName] = data[index].response?.value!;
    return acc;
  }, {} as { [key: string]: number | null });
};

export const getSurveyTotal = (data: SurveyItem[]) => {
  return data
    .map(item => item.response?.value)
    .reduce((acc, value) => {
      if (value !== undefined) {
        return acc! + value;
      } else {
        return acc;
      }
    }, 0);
};