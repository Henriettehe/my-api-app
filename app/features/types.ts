// De ulike typene, lagt i ett types.ts fil. Kan gjenbrukes videre ut i komponenter og koden. 
type SurveyAnswer = string | number | string[] | number[];

type SurveyParticipant = {
  id: string;
  name: string;
  email?: string;
};

type SurveyResponse = {
  participant: SurveyParticipant;
  questionId: string;
  answer: SurveyAnswer;
};

type SurveyResponses = Record<string, SurveyAnswer>;
