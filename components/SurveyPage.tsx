import React, { useEffect, useState } from "react";
import SurveyComponent from "./components/SurveyComponent";
import { SurveyQuestion } from "../app/pages/questions/SurveyQuestion";

const SurveyPage = () => {
  const [questions, setQuestions] = useState<SurveyQuestion[]>([]);

  useEffect(() => {
    fetch("/pages/questions") // Riktig relativ bane til API-ruta
      .then((response) => response.json())
      .then((data) => setQuestions(data)); //Oppdaterer staten. 
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Spørreundersøkelse</h1>
      <SurveyComponent questions={questions} /> {/* Passer spørsmålene som props */}
    </div>
  );
};

export default SurveyPage;
