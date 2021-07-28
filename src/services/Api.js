import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const getImages = async (query, page = 1) => {
  try {
    const response = await axios.get(
      axios.defaults.baseURL +
        `?q=${query}&page=${page}&key=${process.env.REACT_APP_API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data;
  } catch (error) {
    console.log(`error`, error);
  }
};
