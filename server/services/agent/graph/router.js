import { getModel } from "../config/llmModels";

export const routerNode = async (state) => {
  const llm = await getModel("router");
  const prompt = `You are an agent router.

Available agents:

- chat
- search
- coding
- pdf
- ppt
- image

Rules:

chat:
General conversation,
explanations,
learning,
questions.

search:
Current events,
latest information,
news,
recent developments,
internet lookup.

coding:
Generate code,
debug code,
build projects,
architecture,
API design.

pdf:
Questions about generate PDFs
or document context.

ppt:
Questions about generate ppts
or ppt context.

image:
Generate images,
create pictures,
visual art requests.

Return ONLY one word:

chat
search
coding
pdf
ppt
image

User Query:
${state.prompt}
`;
  const result = await llm.invoke(prompt);
  console.log(result);
  return { ...state, agent: result.content.trim().toLowerCase() };
};
