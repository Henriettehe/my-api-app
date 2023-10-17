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


  // Lagd noe logikk, må puttes inn og rendres ut :)
  const question1: SurveyQuestion = {
    id: "1",
    question: "Hva er din favorittfarge?",
    isRequired: true,
  };
  
  const question2: SurveyQuestionWithOptions = {
    id: "2",
    question: "Hvilken type musikk foretrekker du?",
    isRequired: false,
    options: ["Rock", "Pop", "Hip Hop", "Jazz"],
  };
  