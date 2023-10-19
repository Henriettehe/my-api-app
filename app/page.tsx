import React from "react";
import SurveyComponent from "../components/SurveyComponent";
import Navigation from "@/components/Navigation";
import Title from "@/components/Title";

const SurveyPage = () => {
  return (
    <div>
      <Title />
      <Navigation />
      <SurveyComponent />
    </div>
  );
};

export default SurveyPage;
