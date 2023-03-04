require('dotenv').config();
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;


const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const completion = openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [{role: "user", content: "Hello world"}],
})
.then((response) => {
  const messages = response.data.choices;
  console.log(messages);
}).catch((error) => {
  console.error(error);
});



