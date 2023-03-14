require('dotenv').config();
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;


const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const completion = openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [{role: "user", content: "Who is Alan Turing?"},
            {role: "assistant", content: '\n' +
            '\n' +
            'Alan Turing was an English mathematician, logician, and computer scientist who is considered to be the father of modern computer science. During World War II, he played a significant role in cracking the German Enigma code, which proved to be a decisive factor in the Allied victory over Nazi Germany. Turing also contributed to the development of the concept of artificial intelligence and the computer. His work has had a major impact on modern computing and computer science, and he is considered to be one of the most important figures in the history of computer science. Turing tragically committed suicide in 1954, at the age of 41.'},
            {role: "user", content: "Was he part of the team that cracked the Enigma?"}],
})
.then((response) => {
  const messages = response.data.choices;
  console.log(messages);
}).catch((error) => {
  console.error(error);
});
