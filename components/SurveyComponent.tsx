import React from "react";
import { SurveyQuestion } from "../SurveyQuestion";
import {
  SurveyParticipant,
  SurveyResponse,
  SurveyResponses,
} from "../types/SurveyTypes"; // Importer de tidligere definerte typene

const SurveyComponent: React.FC = ({ questions }) => {
  const participant: SurveyParticipant = {
    id: "12345",
    name: "Henriette Studentensen",
    email: "Henriette@example.com",
  };

  const response: SurveyResponse = {
    participant: participant,
    questionId: "1",
    answer: "Ja",
  };

  const responses: SurveyResponses = {
    question1: "Ja",
    question2: ["Alternativ 1", "Alternativ 2"],
    question3: 42,
  };

  return (
    <div className="p-4 border border-gray-300 rounded shadow-md">
      <h2 className="text-lg font-semibold">Deltakerinformasjon</h2>
      <p className="text-lg font-semibold">ID: {participant.id}</p>
      <p className="text-lg font-semibold">Navn: {participant.name}</p>
      {participant.email && <p className="text-lg font-semibold">E-post: {participant.email}</p>}

      <h2 className="text-lg font-semibold mt-4">Respons på spørsmål</h2>
      <p>Spørsmål 1: {response.answer}</p>
      <p>Spørsmål 2: {responses["question2"].join(", ")}</p>
      <p>Spørsmål 3: {responses["question3"]}</p>
    </div>
  );
};

export default SurveyComponent;
