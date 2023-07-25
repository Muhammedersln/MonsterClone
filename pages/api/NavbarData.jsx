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
          "Access-Control-Allow-Credentials":true,
          "Access-Control-Allow-Origin":"*",
          "Access-Control-Allow-Methods":"GET,OPTIONS,PATCH,DELETE,POST,PUT",
          "Access-Control-Allow-Headers":"X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default NavbarData;
