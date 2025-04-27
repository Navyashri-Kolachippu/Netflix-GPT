
import OpenAI from 'openai';

const openAI = new OpenAI({
    apiKey: 'some key', // <-- your real API key directly here, no process.env
    dangerouslyAllowBrowser: true,
  });


export default openAI;