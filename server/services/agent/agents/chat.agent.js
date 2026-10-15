import { getModel } from "../config/llmModels";

export const chat = async (state) => {
  const llm = await getModel("chat");
  const systemPrompt = "You are VersaAI, an intelligent AI assistant.";
  const result = await llm.invoke([
    {
      role: "system",
      content: systemPrompt,
    },
    {
      role: "human",
      content: state.prompt,
    },
  ]);
  return {
    ...state,
     aiResponse: result.content,
  };
};
