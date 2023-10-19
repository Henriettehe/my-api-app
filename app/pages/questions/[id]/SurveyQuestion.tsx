import { NextApiRequest, NextApiResponse } from "next";
import { SurveyQuestion } from "SurveyQuestion";
// Kilde: Kodeeksempel fra Fullstækk - videoforlesninger og forklaring. ++ Google og ChatGpt, og dokumentasjon. Dette gjelder alt av kode! 

// Kommentar: utrolig usikker på dette kompontetet, hadde ønsket å kunne linke det til ./ pathen "questions". 
// -- for å komme seg på ny side, og besvare spørsmålene under her:  


// Ikke optimalt, jeg skulle nok ha startet helt på nytt med nytt Next-prosjekt. Men håper det blir bedre med litt gruppearbeid! 

const questions: SurveyQuestion[] = [
  {
    id: "1",
    question: "Hva er din favorittfarge?",
    //isRequired: true,
    options: ["Rød", "Blå", "Grønn"],
  },
  {
    id: "2",
    question: "Hvor gammel er du?",
    //isRequired: false,
    options: ["Under 18", "18-25", "Over 25"],
  },
];

// Ufatterlig usikker på denne: 
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(questions);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
//return (
//
// )
