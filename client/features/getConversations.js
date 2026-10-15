import api from "../utils/axios.js";
export const getConversations = async () => {
  try {
    const { data } = await api.get("/api/chat/getconversations");
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
