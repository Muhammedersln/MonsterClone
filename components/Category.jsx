"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import NavbarData from "../pages/api/NavbarData";
import ListAccordion from "./ListAccordion";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [visible, setVisible] = useState(false);
  const [isAccordionHovered, setIsAccordionHovered] = useState(false);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await NavbarData();
        if (result) {
          setCategories(result.data);
        } else {
          console.error("Veri alınamadı");
        }
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, []);

  const handleHover = (title) => {
    setTitle(title);
    setVisible(true);
  };
  const handleMouseLeave = () => {
    setTimeout(() => {
      if (!isAccordionHovered) {
        setVisible(false);
      }
    }, 4000);
  };

  return (
    <div className=" py-[15px]  overflow-hidden ">
      <div className="text-white flex justify-center gap-12 py-3 lg:text-[0.9rem] md:text-[0.8rem] text-[0.7rem] uppercase  ">
        <Link href={"/"} passHref>
          <div
            onMouseEnter={() => handleHover(categories?.[0]?.name)}
            onMouseLeave={handleMouseLeave}
            className="hover:text-primary duration-200 ease-in  "
          >
            {categories?.[0]?.name}
            {/* Tüm Laptoplar */}
          </div>
        </Link>
        <Link href={"/"} passHref>
          <div
            onMouseEnter={() =>
              handleHover(categories?.[0]?.childCategories?.[0]?.name)
            }
            onMouseLeave={handleMouseLeave}
            className="hover:text-primary duration-200 ease-in"
          >
            {categories?.[0]?.childCategories?.[0]?.name}
            {/* Oyun Bilgisayarları */}
          </div>
        </Link>
        <Link href={"/"} passHref>
          <div
            onMouseEnter={() => handleHover(categories?.[1]?.name)}
            onMouseLeave={handleMouseLeave}
            className="hover:text-primary duration-200 ease-in"
          >
            {categories?.[1]?.name}
            {/* AKSESUARLAR */}
          </div>
        </Link>
        <Link href={"/"} passHref>
          <div
            onMouseEnter={() =>
              handleHover(
                categories?.[1]?.childCategories?.[0]?.childCategories?.[3]
                  ?.name
              )
            }
            onMouseLeave={handleMouseLeave}
            className="hover:text-primary duration-200 ease-in"
          >
            {categories?.[1]?.childCategories?.[0]?.childCategories?.[3]?.name}
            {/* OYUNCU MONİTÖRÜ */}
          </div>
        </Link>
        <Link href={"/"} passHref>
          <div
            onMouseEnter={() =>
              handleHover(categories?.[0]?.childCategories?.[2]?.name)
            }
            onMouseLeave={handleMouseLeave}
            className="hover:text-primary duration-200 ease-in"
          >
            {categories?.[0]?.childCategories?.[2]?.name}
            {/* İŞ BİLGİSAYARLARI */}
          </div>
        </Link>
        <Link href={"/"} passHref>
          <div
            onMouseEnter={() =>
              handleHover(categories?.[0]?.childCategories?.[1]?.name)
            }
            onMouseLeave={handleMouseLeave}
            className="hover:text-primary duration-200 ease-in"
          >
            {categories?.[0]?.childCategories?.[1]?.name}
            {/* İŞ İSTASYONLARI */}
          </div>
        </Link>
        <p className="border-l-2 border-secondary"></p>
        <Link href={"/"} passHref>
          <div className="hover:text-primary duration-200 ease-in ">
            CPU & GPU
            {/* CPU & GPU */}
          </div>
        </Link>
      </div>

      {visible && (
        <div 
          onMouseEnter={() => setIsAccordionHovered(true)}
          onMouseLeave={() => setIsAccordionHovered(false)}
        >
          
          <ListAccordion className="" value={title} visible={visible}></ListAccordion>
          
        </div>
      )}
    </div>
  );
};

export default Category;

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import NavbarData from "../pages/api/NavbarData";
// import ListAccordion from "./ListAccordion";

// const Category = () => {
//   const [categories, setCategories] = useState([]);
//   const [visible, setVisible] = useState(false);
//   const [isAccordionHovered, setIsAccordionHovered] = useState(false);
//   const [title, setTitle] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await NavbarData();
//         if (result) {
//           setCategories(result.data);
//         } else {
//           console.error("Veri alınamadı");
//         }
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleHover = (title) => {
//     setTitle(title);
//     setVisible(true);
//   };

//   const handleMouseLeave = () => {
//     setTimeout(() => {
//       if (!isAccordionHovered) {
//         setVisible(false);
//       }
//     }, 3000);
//   };

//   const renderLink = (category, index) => (
//     <Link key={index} href={"/"} passHref>
//       <div
//         onMouseEnter={() => handleHover(category.name)}
//         onMouseLeave={handleMouseLeave}
//         className="hover:text-primary duration-200 ease-in"
//       >
//         {category.name}
//       </div>
//     </Link>
//   );

//   const renderNestedLink = (nestedCategory, index) => (
//     <Link key={index} href={"/"} passHref>
//       <div
//         onMouseEnter={() => handleHover(nestedCategory.name)}
//         onMouseLeave={handleMouseLeave}
//         className="hover:text-primary duration-200 ease-in"
//       >
//         {nestedCategory.name}
//       </div>
//     </Link>
//   );

//   return (
//     <div className="py-[15px] overflow-hidden">
//       <div className="text-white flex justify-center gap-12 py-3 lg:text-[0.9rem] md:text-[0.8rem] text-[0.7rem] uppercase">
//         {categories.map((category, index) => {
//           if (category.childCategories && category.childCategories.length > 0) {
//             return (
//               <div key={index}>
//                 {renderLink(category, index)}
//                 {category.childCategories.map((nestedCategory, nestedIndex) =>
//                   renderNestedLink(nestedCategory, nestedIndex)
//                 )}
//               </div>
//             );
//           } else {
//             return renderLink(category, index);
//           }
//         })}
//         <Link href={"/"} passHref>
//           <div className="hover:text-primary duration-200 ease-in">
//             CPU & GPU
//           </div>
//         </Link>
//       </div>
//       {visible && (
//         <div
//           className={`${
//             isAccordionHovered
//               ? "max-h-[200px] transition-all duration-800"
//               : "max-h-0"
//           } overflow-hidden`}
//           onMouseEnter={() => setIsAccordionHovered(true)}
//           onMouseLeave={() => setIsAccordionHovered(false)}
//         >
//           <ListAccordion value={title} visible={visible} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Category;
