import { NextApiRequest, NextApiResponse } from "next";
import { SurveyQuestion } from "./questions/SurveyQuestion";

const questions: SurveyQuestion[] = [
  {
    id: "1",
    question: "Hva er din favorittfarge?",
    isRequired: true,
    options: ["Rød", "Blå", "Grønn"],
  },
  {
    id: "2",
    question: "Hvor gammel er du?",
    isRequired: false,
    options: ["Under 18", "18-25", "Over 25"],
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(questions);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
