const OPENAI_API_KEY = "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";

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

openai.createChatCompletion({
  engine: "text-davinci-002",
}).then((response) => {
  const chatId = response.data.id;
  return openai.appendMessages({
    chatId,
    messages: [{role: "user", content: "Hello world"}],
  });
}).then((response) => {
  const chatId = response.data.id;
  return openai.getMessages({
    chatId,
  });
}).then((response) => {
  const messages = response.data.data;
  console.log(messages[messages.length - 1].text);
}).catch((error) => {
  console.error(error);
});


// process.env.OPENAI_API_KEY


