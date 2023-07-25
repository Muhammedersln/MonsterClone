import axios from "axios";

const BannerDataTwo = async () => {
  try {
    const response = await axios.get("/api/banner-filter");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default BannerDataTwo;
