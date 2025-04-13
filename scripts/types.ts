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
