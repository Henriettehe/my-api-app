import React from "react";
import { SurveyQuestion } from 'SurveyQuestion';

const Questions: React.FC = () => {
  // Rendrer spørsmålene fra API-en: 
  return (
    <div>
      <SurveyQuestion /> 
    </div>
  );
};

export default Questions;
