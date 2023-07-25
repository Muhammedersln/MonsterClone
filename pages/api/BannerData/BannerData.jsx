import axios from "axios";

const BannerData = async () => {
  try {
    const response = await axios.get("/api/BannerData/banner-filter");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default BannerData;
