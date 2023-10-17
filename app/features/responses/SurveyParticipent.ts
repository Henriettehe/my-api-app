// a. Opprett en TypeScript-type for SurveyParticipant
type SurveyParticipant = {
    id: string;
    name: string;
    email?: string; // email er en valgfri egenskap
  };
  
  // b. Opprett en TypeScript-type for SurveyResponse
  type SurveyResponse = {
    participant: SurveyParticipant;
    questionId: string;
    answer: SurveyAnswer;
  };
  