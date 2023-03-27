const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const apiKey = "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";

app.post("/api/generate-text", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/engines/text-davinci-002/completions", {
        method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        prompt,
        max_tokens: 500,
        n: 1,
        stop: null,
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (data.choices && data.choices.length > 0) {
        res.json(data.choices[0].text.trim());
      } else if (data.error) {
        res.status(500).json({ message: "An error occurred", error: data.error });
      } else {
        res.status(500).json({ message: "An unknown error occurred" });
      }
      
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "An error occurred" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
