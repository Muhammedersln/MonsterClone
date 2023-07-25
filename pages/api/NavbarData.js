import axios from "axios";
const NavbarData = async () => {
  try {
    const response = await axios.get(
      "https://api.monsternotebook.com/ecommerce-api/v1/category/categories",
      {
        headers: {
          "x-monster-client-channel": "MobileAppTr",
          "Cache-Control": "no-cache",
          "Ocp-Apim-Subscription-Key": "23e9ecb898a74612935b48353804506c",
          "Access-Control-Allow-Origin": "https://monster-web-clonee-git-main-muhammedersln.vercel.app"
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default NavbarData;
