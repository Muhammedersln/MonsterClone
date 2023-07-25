import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.post(
      "https://api.monsternotebook.com/ecommerce-api/v1/banner/banner-filter",
      req.body,
      {
        headers: {
          "x-monster-client-channel": "MobileAppTr",
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
          "Ocp-Apim-Subscription-Key": "23e9ecb898a74612935b48353804506c",
        },
      }
    );

    res.status(response.status).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(error.response?.status || 500).json({ error: "Internal Server Error" });
  }
}
