import { StateGraph } from "@langchain/langgraph";
import { agentState } from "./state.js";
import { router } from "./router.js";
import { chat } from "../agents/chat.agent.js";
import { search } from "../agents/search.agent.js";
import { coding } from "../agents/coding.agent.js";
import { pdf } from "../agents/pdf.agent.js";
import { ppt } from "../agents/ppt.agent.js";
import { imageGen } from "../agents/imageGen.agent.js";
const workflow = new StateGraph(agentState);
workflow.addNode("router", router);
workflow.addNode("chat", chat);
workflow.addNode("search", search);
workflow.addNode("coding", coding);
workflow.addNode("pdf", pdf);
workflow.addNode("ppt", ppt);
workflow.addNode("imageGen", imageGen);

workflow.addEdge("__start__", "router");
workflow.addConditionalEdges(
  "router",
  (state) => {
    switch (state.agent) {
      case "chat":
        return "chat";
      case "search":
        return "search";
      case "coding":
        return "coding";
      case "pdf":
        return "pdf";
      case "ppt":
        return "ppt";
      case "image":
        return "imageGen";
      default:
        return "chat";
    }
  },
  {
    chat: "chat",
    search: "search",
    coding: "coding",
    pdf: "pdf",
    ppt: "ppt",
    imageGen: "imageGen",
  },
);

workflow.addEdge("search", "chat");
workflow.addEdge("chat", "__end__");
workflow.addEdge("coding", "__end__");
workflow.addEdge("pdf", "__end__");
workflow.addEdge("ppt", "__end__");
workflow.addEdge("imageGen", "__end__");

export const graph = workflow.compile();
