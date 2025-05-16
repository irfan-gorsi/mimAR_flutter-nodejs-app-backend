const axios = require("axios");
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
exports.getWeather = async (req, res) => {
  const { lat, lon } = req.query;

   const city = req.query.city || "Islamabad";

  try {
    let url;
    if (lat && lon) {
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
    } else {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`;
    }

    const response = await axios.get(url);
    res.json(response.data);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching weather data", error: err.message });
  }
};

exports.getQuote = async (req, res) => {
  try {
    const response = await axios.get("https://zenquotes.io/api/random");
    const { q: content, a: author } = response.data[0];

    res.json({ content, author });
  } catch (err) {
    res.status(500).json({ message: "Error fetching quote", error: err.message });
  }
};

// gemini controller
exports.generateText = async (req, res) => {
  try {
    const prompt = req.body.prompt || "Give me a motivational message";

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const text =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
    res.json({ result: text });
  } catch (error) {
    res.status(500).json({
      message: "Error generating text",
      error: error.message,
    });
  }
};
