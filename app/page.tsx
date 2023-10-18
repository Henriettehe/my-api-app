import React from "react";
import SurveyComponent from "../components/SurveyComponent";
import Navigation from "@/components/Navigation";

const SurveyPage: React.FC = () => {
  return (
    <div>
      <h1>Spørreundersøkelse</h1>
      <Navigation />
      <SurveyComponent />
    </div>
  );
};

export default SurveyPage;
