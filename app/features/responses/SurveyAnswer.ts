// a. Opprett en TypeScript-type for SurveyAnswer som kan være en enkelt verdi eller et array av disse verdiene
type SurveyAnswer = string | number | string[] | number[];


// b. Legg til en egenskap isMultipleChoice
type SurveyAnswerWithMultipleChoice = {
  answer: SurveyAnswer;
  isMultipleChoice: boolean;
};

//Samme her, gjenbruke dette :) 
const singleAnswer: SurveyAnswerWithMultipleChoice = {
    answer: "Ja",
    isMultipleChoice: false,
  };
  
  const multipleChoiceAnswer: SurveyAnswerWithMultipleChoice = {
    answer: ["Alternativ 1", "Alternativ 2"],
    isMultipleChoice: true,
  };
  