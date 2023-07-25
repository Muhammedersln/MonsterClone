import axios from "axios";
const BanerData = async () => {
  try {
    const body = {
      bannerCode: 7612,
      productId: 0,
      categoryId: 0,
    };

    const response = await axios.post(
      "https://api.monsternotebook.com/ecommerce-api/v1/banner/banner-filter",
      body,
      {
        headers: {
          "x-monster-client-channel": "MobileAppTr",
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
          "Ocp-Apim-Subscription-Key": "23e9ecb898a74612935b48353804506c",

          
        },
      }
    );
      return response.data
  } catch (error) {
    console.error(error);
  }
};

export default BanerData;
