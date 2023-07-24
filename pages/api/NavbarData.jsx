import axios from "axios";
const NavbarData = async () => {
  const apiUrl = process.env.API_URL;
  try {
    const response = await axios.get(
      apiUrl,
      {
        headers: {
          "x-monster-client-channel": "MobileAppTr",
          "Cache-Control": "no-cache",
          "Ocp-Apim-Subscription-Key": "23e9ecb898a74612935b48353804506c",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default NavbarData;
