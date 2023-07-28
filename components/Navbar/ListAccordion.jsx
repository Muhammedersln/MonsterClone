import React, { useState, useEffect } from "react";
import NavbarData from "../../pages/api/NavbarData/NavbarData";

const ListAccordion = ({ value, visible }) => {
  const [categories, setCategories] = useState([]);
  const [allPc, setAllPc] = useState([]);
  const [accessory, setAccessory] = useState([]);
  const [gamingMonitor, setgamingMonitor] = useState([]);
  const [businessPc, setBusinessPc] = useState([]);
  const [workStation, setWorkStation] = useState([]);
  const [gamingPc, setGamingPc] = useState([]);
  const getData = async () => {
    const result = await NavbarData();
    if (result) {
      setCategories(result.data);
    } else {
      console.error("Veri alınamadı");
    }
  }; 
   // api çekme
  useEffect(() => {
    getData();
  }, []);


  useEffect(() => {
    if (categories.length > 0) {
      // Tüm Laptoplar
      const pcData = categories.flatMap((category) =>
        category.childCategories.flatMap((subCategory) =>
          subCategory.childCategories
            .filter((subCategory) => subCategory.keyword.startsWith("monster "))
            .map((subCategory) => ({
              name: subCategory.name,
              imageUrl: subCategory.imageUrl,
            }))
        )
      );
      setAllPc(pcData);

      // Oyun Bilgisayarları
      const gamingPcData = categories
        .find((category) => category.name === "Tüm Laptoplar")
        ?.childCategories.find(
          (subCategory) => subCategory.name === "Oyun Bilgisayarları"
        )
        ?.childCategories.flatMap((item) => ({
          name: item.name,
          imageUrl: item.imageUrl,
          url: item.url,
        }));
      setGamingPc(gamingPcData);

      // Aksesuarlar
      const accessoryData = categories
        .find((category) => category.name === "Aksesuarlar")
        ?.childCategories.map((subCategory) => {
          return subCategory.childCategories.map((item) => ({
            name: item.name,
            imageUrl: item.imageUrl,
          }));
        });
      setAccessory(accessoryData);

      // Gaming Monitörs
      const gamingMonitorData = categories
        .find((category) => category.name === "Aksesuarlar")
        ?.childCategories.find(
          (subCategory) => subCategory.name === "Oyuncu Ekipmanları"
        )
        ?.childCategories.filter((item) =>
          item.keyword.startsWith("oyuncu monitör")
        )
        .map((item) => ({
          name: item.name,
          imageUrl: item.imageUrl,
          url: item.url,
        }));
      setgamingMonitor(gamingMonitorData);

      // İş Bilgisayarları
      const businessPcData = categories
        .find((category) => category.name === "Tüm Laptoplar")
        ?.childCategories.find(
          (subCategory) => subCategory.name === "İş Bilgisayarları"
        )
        ?.childCategories.flatMap((item) => ({
          name: item.name,
          imageUrl: item.imageUrl,
          url: item.url,
        }));
      setBusinessPc(businessPcData);

      // İş İstasyonları
      const workStationData = categories
        .find((category) => category.name === "Tüm Laptoplar")
        ?.childCategories.find(
          (subCategory) => subCategory.name === "İş İstasyonları"
        )
        ?.childCategories.flatMap((item) => ({
          name: item.name,
          imageUrl: item.imageUrl,
          url: item.url,
        }));
      setWorkStation(workStationData);
    }
  }, [categories]);

  const renderContentList = (items) => {
    return (
      <div className="flex justify-center   ">
        {items.map((item, index) => (
          <div
            className="w-[130px] hover:text-primary hover:underline hover:underline-offset-4 hover:decoration-2 duration-300"
            key={index}
          >
            <img
              className=" duration-500 transition-all rounded-full"
              src={item.imageUrl}
              alt=""
            />
            <p className="text-center  hover:text-primary text-base">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    );
  };
  // animate-fade-down animate-once animate-ease-linear animate-normal animate-fill-forwards

  let content;
  switch (value) {
    case "Tüm Laptoplar":
      content = (
        <div className="  bg-black bg-opacity-90 h-[200px] absolute w-full  text-white z-50 cursor-pointer">
          {renderContentList(allPc)}
        </div>
      );
      break;
    case "Oyun Bilgisayarları":
      content = (
        <div className=" bg-black bg-opacity-90 h-[200px] absolute w-full  text-white z-50 cursor-pointer">
          {renderContentList(gamingPc)}
        </div>
      );
      break;
    case "Aksesuarlar":
      content = (
        <div className="flex absolute z-50 w-full overflow-hidden  ">
          <div className="bg-black w-1/2 py-10 text-white flex justify-end">
            <div className="flex flex-col">
              <p className="text-center hover:text-primary text-lg mb-3 cursor-pointer">
                Oyuncu Ekipmanları
              </p>
              <div className="flex justify-end cursor-pointer">
                {accessory &&
                  accessory.length > 0 &&
                  accessory[0].map((item, index) => (
                    <div
                      key={index}
                      className="w-[120px] hover:text-primary hover:underline duration-500"
                    >
                      <img src={item.imageUrl} alt={item.name} />
                      <p className="text-center hover:text-primary text-base">
                        {item.name}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="bg-[#363737] w-1/2 py-10  text-white flex justify-start">
            <div className="flex flex-col">
              <p className="text-center hover:text-primary text-lg mb-3 cursor-pointer">
                Bilgisayar Aksesuarları
              </p>
              <div className="flex justify-start cursor-pointer">
                {accessory &&
                  accessory.length > 0 &&
                  accessory[1].map((item, index) => (
                    <div
                      key={index}
                      className="w-[120px] hover:text-primary hover:underline duration-500"
                    >
                      <img src={item.imageUrl} alt={item.name} />
                      <p className="text-center hover:text-primary text-base">
                        {item.name}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      );
      break;
    case "Gaming Monitör":
      content = (
        <div className=" bg-black bg-opacity-90 h-[200px] absolute w-full  text-white z-50 cursor-pointer">
          {renderContentList(gamingMonitor)}
        </div>
      );
      break;
    case "İş Bilgisayarları":
      content = (
        <div className=" bg-black bg-opacity-90 h-[200px] absolute w-full  text-white z-50 cursor-pointer">
          {renderContentList(businessPc)}
        </div>
      );
      break;
    case "İş İstasyonları":
      content = (
        <div className="  bg-black bg-opacity-90 h-[200px] absolute w-full  text-white z-50 cursor-pointer">
          {renderContentList(workStation)}
        </div>
      );
      break;
    default:
      content = null;
  }

  return visible && <div className="">{content}</div>;
};

export default ListAccordion;

// transform -skew-x-6 bg-[#363737]
