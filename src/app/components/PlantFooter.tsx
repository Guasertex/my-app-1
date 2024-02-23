"use client";
import {
  styles,
  Image,
  logotype2,
  Link,
  instagram,
  facebook,
  twitter,
  youtube,
  usePathname,
} from "./MainImports";

export const PlantFooter = () => {
  const pathname = usePathname();
  return(
    <div className={pathname === "/plantcompany" ? styles.footerPlant : "hidden"}>
    <div className="w-full h-[370px] bg-[#f6ffeb] max-w-screen-xl grid grid-cols-2 gap-8 sm:gap-4 sm:grid-cols-4">
      <div className="flex flex-col justify-center -mt-5">
        <Link className="flex" href="/">
          <Image
            className={styles.logo2}
            src={logotype2}
            width={160}
            height={132}
            alt="Company logo"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-center text-[18px] leading-7">
        <p className="font-bold">ABOUT US</p>
        <Link className="pt-4 font-medium text-[#686a67]" href="#">
          Testimonial
        </Link>
        <Link className="pt-4 font-medium text-[#686a67]" href="#">
          CONTACT US
        </Link>
        <Link className="pt-4 font-medium text-[#686a67]" href="#">
          Feature
        </Link>
      </div>
      <div className="flex flex-col justify-center -mt-14 text-[18px] leading-7">
        <p className="font-bold pt-4">POLICY LIBRARY</p>
        <Link className="pt-4 font-medium text-[#686a67]" href="#">
          SITEMAP
        </Link>
        <button className="w-[120px] -ml-1 pt-4 font-medium text-[#686a67]">
          EN ESPANOL
        </button>
      </div>
      <div className="flex flex-col justify-center -mt-[60px] text-[18px] leading-7">
        <p className="font-bold">FOLLOW US</p>
        <div className="flex pt-4 font-medium text-[#686a67]">
          <Link className="pr-3" href="#">
            <Image
              className="bg-no-repeat bg-cover w-[37px] h-[37px]"
              src={instagram}
              width={37}
              height={37}
              alt="instagram image"
            />
          </Link>
          <Link className="pr-3" href="#">
            <Image
              className="bg-no-repeat bg-cover w-[37px] h-[37px]"
              src={facebook}
              width={37}
              height={37}
              alt="facebook image"
            />
          </Link>
          <Link className="pr-3" href="#">
            <Image
              className="bg-no-repeat bg-cover w-[37px] h-[37px]"
              src={twitter}
              width={37}
              height={37}
              alt="twitter image"
            />
          </Link>
          <Link className="" href="#">
            <Image
              className="bg-no-repeat bg-cover w-[37px] h-[37px]"
              src={youtube}
              width={37}
              height={37}
              alt="youtube image"
            />
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default PlantFooter;
