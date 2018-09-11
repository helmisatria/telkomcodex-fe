import { router } from "../../../main";
import api from "../../../utils/axios-api";

export const setProductCount = ({ commit }, product) => {
  commit("setProductCount", product);
  commit("resetCountAllProduct");
};

export const setWeightProduct = ({ commit }, weight) => {
  commit("setWeightProduct", weight);
}

export const toggleProductChecked = ({ commit }, product) => {
  commit("toggleProductChecked", product);
  commit("setSelectProduct", "default");
};

// change all number of selected products
export const setAllProductsCount = ({ commit }, count) => {
  commit("setAllCount", count);
  commit("setCountAllProduct", count);
};

export const toggleCheckAllProducts = ({ commit }, checked) => {
  commit("toggleCheckAllProducts", checked);
};

export const fetchProduct = async ({ commit }, { username, page }) => {
  try {
    const result = await api.get("products", {
      params: {
        _page: page,
        _limit: 22,
        username
      }
    });

    commit("setProducts", result.data);

    if (page === 1) {
      router.push({ name: "choose" });
      return;
    }

    router.push({
      name: "choose",
      query: { page }
    });
  } catch (error) {
    console.error(error);

    commit("setError", {
      status: 400,
      message: "something went wrong when fetch product"
    });
  }
};

export const setSelectProduct = ({ commit }, selected) => {
  if (selected === "default") {
    commit("resetCountAllProduct");
  }
  commit("setSelectProduct", selected);
};

export const setUsernameBukalapak = ({ commit }, params) => {
  commit("setUsernameBukalapak", params);
};