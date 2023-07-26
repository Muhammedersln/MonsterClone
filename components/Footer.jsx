"use client";
import Image from "next/image";
import { footerLinks } from "../constants";
import Inbox from "../assets/forward_inbox.svg";
import IconMonster from "../assets/icon_monster.svg";
import IconArrowDown from "../assets/arrow_down.svg";
import Support from "../assets/support.svg";
import { AiOutlineYoutube, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const handleVisible = () => {
    setVisible(!visible);
  };
  // console.log(visible);
  return (
    <footer className="bg-secondary">
      <div className="border-b border-t px-5 py-6 w-full  border-bordercolor flex max-lg:flex-col tracking-widest ">
        {/* mesaj gönder */}
        <div className="w-1/4 max-lg:w-full max-lg:mb-3">
          <div className="flex  h-full ">
            <div className="flex justify-center items-center  w-[48px] h-[48px] bg-bgicon">
              <Image src={Inbox} alt="Inbox"></Image>
            </div>
            <div className="bg-light flex justify-center w-full me-4 max-lg:me-0 items-center ">
              <span className="text-white w-full p-[12px]">MESAJ GÖNDER</span>
            </div>
          </div>
        </div>
        {/* numara */}
        <div className="w-1/4 max-lg:w-full">
          {" "}
          <div className=" flex justify-start h-full ">
            <div className="flex justify-center items-center  w-[48px] h-[48px] bg-bgicon">
              <Image src={Support} alt="support"></Image>
            </div>
            <div className="bg-light flex justify-center w-full me-4 max-lg:me-0 items-center ">
              <span className="text-white w-full ps-3">0 850 255 11 11</span>
            </div>
          </div>
        </div>
        {/* icons */}
        <div className="w-1/2 max-lg:my-6 max-lg:w-full">
          <div className="flex justify-center max-lg:flex-col ">
            <div className="flex items-center">
              <h3 className="text-white text-md  text-center me-2 max-lg:mb-3">
                Bizi Takip Edin
              </h3>
            </div>

            <ul className="flex  gap-3 max-lg:justify-between  ">
              <li className="flex justify-center items-center w-[48px] h-[48px] bg-bgicon">
                <AiOutlineYoutube className="w-[24px] h-[24px] text-white"></AiOutlineYoutube>
              </li>
              <li className="flex justify-center items-center w-[48px] h-[48px] bg-bgicon">
                <AiOutlineTwitter className="w-[24px] h-[24px] text-white"></AiOutlineTwitter>
              </li>
              <li className="flex justify-center items-center w-[48px] h-[48px] bg-bgicon">
                <FaFacebookF className="w-[24px] h-[24px] text-white"></FaFacebookF>
              </li>
              <li className="flex justify-center items-center w-[48px] h-[48px] bg-bgicon">
                <FaInstagram className="w-[24px] h-[24px] text-white"></FaInstagram>
              </li>
              <li className="flex justify-center items-center w-[48px] h-[48px] bg-bgicon">
                <Image src={IconMonster} alt="iconMonster"></Image>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="mx-5 mt-12">
        <div className="flex flex-wrap gap-20">
          {footerLinks.map((link) => (
            <div key={link.title} className="flex flex-col gap-3 h-full">
              <h3 className="text-white font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <div className="">
                  <Link
                    className="text-[#a4a4a5] flex hover:border-b  h-full hover:border-primary transition-all hover:text-white"
                    key={item.title}
                    href={item.url}
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div> */}
      <div className="bg-secondary text-base text-[#8d8881] px-5 my-14   ">
        <div className={` ${visible ? "truncate max-lg:h-12" : ""}`}>
          <p className="mb-4">
            Oynadığınız oyunlarla bütünleşmek istiyorsanız ve kullandığınız
            yazılımlarla yaratıcılığınızın doruklarına çıkmayı hedefliyorsanız,
            Monster Notebook size beklentilerinizin de ötesinde bir dünya
            sunuyor.
          </p>
          <p className="mb-4">
            En yüksek performanslı notebook modellerini, en erişilebilir
            fiyatlarla kullanıcılarla buluşturan Monster, yılların verdiği
            sektör tecrübesiyle ürün gamını şekillendirerek tüm ihtiyaçlarınıza
            uygun notebook modelleri hazırlıyor.
          </p>
          <p className="mb-4">
            İsimlerini Türk mitolojisinden alan notebook serilerini; Gaming,
            Business ve Workstation kategorileri altında bir araya getiren
            Monster, üst seviye donanım bileşenleriyle güçlendirilen taşınabilir
            bilgisayarları sayesinde masaüstü çalışma konforunu mobil platformda
            yaşamanızı sağlıyor.
          </p>
          <p className="mb-4">
            Avantajlı fiyatlara konumlanan Abra serisi, Full HD çözünürlükte
            oyun oynayabilmenizi mümkün kılıyor.
          </p>
          <p className="mb-4">
            Oyunların yanı sıra diğer tüm uygulamalarda daha fazla performans
            elde etmenize, 2K ve üzerindeki çözünürlüklerde oyun oynamanıza
            ortam hazırlayan Tulpar serisi, sizin için ideal seçenek haline
            geliyor.
          </p>
          <p className="mb-4">
            Sahip olduğu donanım sayesinde Gaming ailesinin en güçlü notebook
            serisi Semruk ise sizi, herkesin şahit olamayacağı bir oyun
            atmosferine davet ediyor.
          </p>
          <p className="mb-4">
            Güçlü ve işlevsel bir dizüstü bilgisayara gereksiniminiz varsa Huma
            serisi, 3D tasarım ve render gibi yüksek işlem gücü gerektiren
            uygulamalarla çalışıyorsanız Markut serisi içerisinde boy gösteren
            notebook modelleri, projelerinizi kısa sürede tamamlamanıza yardım
            ediyor.
          </p>
          <p className="mb-4">
            Monster, almayı planladığınız dizüstü bilgisayarı modelleri için
            satış öncesinde konfigürasyon özelleştirme seçenekleri sunarak
            bilgisayarınızı belirli ölçülerde kişiselleştirebilmenize olanak
            veriyor. Bu noktada ekleyeceğiniz donanıma bağlı olarak notebook
            fiyatları değişiklik gösteriyor.
          </p>
          <p className="mb-4">
            Ayrıca Monster, satış sonrasında da memnuniyetinizi daimi kılmayı
            garanti ediyor. Notebooklarınız için ömür boyu ücretsiz bakım
            hizmeti, satın aldıktan sonra ilk 15 gün içinde çalıştıramadığınız
            yazılım ve oynayamadığınız oyunla karşılaşırsanız anında iade
            olanağı, ilk 30 gün içinde ekranda meydana gelebilecek tek bir ölü
            piksel neticesinde bile panel değişimi gibi birçok imkan ve güvence,
            Monster’ın kullanıcılarına verdiği değeri gösteriyor.
            Yaşayabileceğiniz sorunlara karşı daima yanınızda olan ve bu
            sorunlara kısa sürede müdahale eden Monster teknik servisi oyun
            keyfinizi ve çalışmalarınızı dilediğiniz gibi sürdürebilmenize
            yardımcı oluyor.
          </p>
          <p className="mb-4">
            Yeni ve güçlü bir dizüstü bilgisayar almayı amaçlıyorsanız,
            Monster’ın kullanıcı dostu ve güvenli web sitesi üzerinden
            dilediğiniz modeli inceleyip hemen sepetinize ekleyebilirsiniz.
          </p>
          <p className="mb-4">
            Aynı zamanda; İstanbul, Ankara, İzmir ve Lefkoşa’daki Monster
            mağazalarını da ziyaret edebilir, hem Monster’ın kendine özgü
            dünyasını keşfedebilir hem de gereksinimlerinize uygun bir notebook
            edinebilirsiniz.
          </p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleVisible}
            className="text-primary hidden max-lg:block underline"
          >
            {visible ? (
              <div className="flex items-center">
                Daha Fazla Göster
                <Image src={IconArrowDown} alt="down"></Image>
              </div>
            ) : (
              <div className="flex items-center">
                Daha Az Göster
                <Image
                  src={IconArrowDown}
                  alt="down"
                  className="transform rotate-180"
                ></Image>
              </div>
            )}
          </button>
        </div>
      </div>
      <div className="   border-t-4 bg-dark border-primary py-10  ">
        <div className="flex justify-between max-lg:flex-col mx-5">
          <div className=" flex items-center max-lg:justify-center max-lg:mb-3">
            <h4 className=" text-white text-center text-base ">
              ©2023 Monster Bilgisayar. Tüm Hakları Saklıdır
            </h4>
          </div>
          <div className="flex max-lg:flex-wrap max-lg:justify-center ">
            <img
              width={140}
              height={50}
              src="https://img-monsternotebook.mncdn.com/images/frontend/footer/garanti.png"
              alt="garanti"
            />
            <img
              width={75}
              height={50}
              src="https://img-monsternotebook.mncdn.com/images/frontend/footer/Visa.png"
              alt="visa"
            />
            <img
              width={47}
              height={50}
              src="https://img-monsternotebook.mncdn.com/images/frontend/footer/Mastercard.png"
              alt="mastercard"
            />
            <img
              width={117}
              height={50}
              src="https://img-monsternotebook.mncdn.com/images/frontend/footer/bkm.png"
              alt="bkg"
            />
            <img
              width={70}
              height={50}
              src="https://img-monsternotebook.mncdn.com/images/frontend/footer/comodo.png"
              alt="comodo"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
