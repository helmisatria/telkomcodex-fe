// import { router } from "../../../main";
import api from "../../../utils/axios-api";

export const fetchProjectDetail = async ({ commit }, { key }) => {
  try {
    const result = await api.get(`project/${key}`);
    const members = await api.get(`member/${key}`)

    commit("setProject", result.data);
    commit("setMembers", members.data);
  } catch (error) {
    console.error(error);
  }
};