import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req: NextApiRequest, res: NextApiResponse) {
try {
    const prompt = generatePrompt(req.body.article, req.body.bulletCount ?? 3);
    const completion = await openai.createCompletion({
        model: req.body.model ?? "text-davinci-002",
        prompt: prompt,
        temperature: req.body.creativity ?? 0.6,
        max_tokens: 1000,
      });
      console.log(completion.data.choices);
      if (completion.data.choices) {
        res.status(200).json({ result: completion.data.choices[0].text });
      } else {
        res.status(500).send("Internal Server Error");
      }
} catch (e) {
    console.error(e);
    res.status(500).send("Internal Server Error");
}
  
}

function generatePrompt(article: string, bulletCount: number) {
//   return `Summarize the following article into one headline and ${bulletCount} main bullet points:
//     ${article}
//   `;
    return `Summarize the following article into ${bulletCount} main bullet points:
        ${article}
    `;
}
