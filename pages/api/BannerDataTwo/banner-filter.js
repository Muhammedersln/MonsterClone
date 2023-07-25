// pages/api/banner-filter.js
import axios from "axios";

export default async function handler(req, res) {
  try {
    const apiUrl = process.env.API_URL_BANNER;
    const body = {
      bannerCode: 7612,
      productId: 0,
      categoryId: 0,
    };

    const response = await axios.post(apiUrl, body, {
      headers: {
        "x-monster-client-channel": "MobileAppTr",
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        "Ocp-Apim-Subscription-Key": "23e9ecb898a74612935b48353804506c",
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Bir hata oluştu" });
  }
}
