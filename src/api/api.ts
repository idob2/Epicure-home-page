import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/v1";

const getQueriedData = async (searchValue: string) => {
  const response = await axios.get(`${API_BASE_URL}/query/search`, {
    params: {
      value: searchValue,
    },
  });
  return response.data;
};

const getAllRestaurants = async () => {
  const response = await axios.get(`${API_BASE_URL}/restaurants`);
  return response.data;
};

const getAllChefs = async () => {
  const response = await axios.get(`${API_BASE_URL}/chefs`);
  return response.data;
};

const getAllDishes = async () => {
  const response = await axios.get(`${API_BASE_URL}/dishes`);
  return response.data;
}

const getAllChefRestaurants = async (chefId: string) => {
  const response = await axios.get(`${API_BASE_URL}/chefs/${chefId}/restaurants`);
  return response.data;
}

const getChefOfRestaurant = async (restaurantId: string) => {
  const response = await axios.get(`${API_BASE_URL}/restaurants/${restaurantId}/chef`);
  return response.data;
};


export {getQueriedData, getAllRestaurants, getChefOfRestaurant, getAllDishes, getAllChefs, getAllChefRestaurants};