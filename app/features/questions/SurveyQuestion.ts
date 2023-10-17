//Kilde Fullstækk, Google og Chatgpt :) 

// a. Opprett en TypeScript-type for SurveyQuestion
type SurveyQuestion = {
    id: string;
    question: string;
    isRequired: boolean;
  };
  
  // b. Utvid SurveyQuestion med options-egenskapen
  type SurveyQuestionWithOptions = SurveyQuestion & {
    options: string[];
  };
  