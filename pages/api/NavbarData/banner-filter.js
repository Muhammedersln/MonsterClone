// pages/api/banner-filter.js
import axios from "axios";

export default async function handler(req, res) {
  try {
    const apiUrl = process.env.API_URL;

    const response = await axios.get(apiUrl, {
      headers: {
        "x-monster-client-channel": "MobileAppTr",
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        "Ocp-Apim-Subscription-Key": "key",
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Bir hata oluştu" });
  }
}
