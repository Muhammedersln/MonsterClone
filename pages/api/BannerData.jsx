import axios from "axios";

const BanerData = async () => {
  try {
    const body = {
      bannerCode: 7612,
      productId: 0,
      categoryId: 0,
    };

    const response = await axios.post("/api/banner-filter", body);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default BanerData;
