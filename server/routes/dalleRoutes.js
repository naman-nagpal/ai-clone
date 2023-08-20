import express from "express";
import * as dotenv from "dotenv";
// const { Configuration, OpenAI } = require("openai");
import { OpenAI } from "openai";

dotenv.config();

const router = express.Router();

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
});

// router.route("/").get((req, res) => {
//   res.status(200).json({ message: "Hello from DALL-E!" });
// });

router.route("/").post(async (req, res) => {
  try {
    console.log("hello brother");
    const { prompt } = req.body;

    const aiResponse = await openai.images.generate({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    console.log("the image", aiResponse);
    const image = aiResponse.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send(error?.response.data.error.message || "Something went wrong");
  }
});

export default router;
