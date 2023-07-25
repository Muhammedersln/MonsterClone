import axios from "axios";

const NavbarData = async () => {
  try {
    const response = await axios.get("/api/NavbarData/banner-filter");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default NavbarData;
