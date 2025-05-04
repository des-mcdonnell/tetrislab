export type ParticipantRow = {
  [key: string]: string;
};

export type SurveyItem = {
  question?: {
    id?: number;
    text?: string;
  },
  response?: {
    label?: string;
    value?: number
  }
}

export type NotificationItem = {
  id: number
  end: number;
  text: string;
  type: string ;
  start: number;
}
