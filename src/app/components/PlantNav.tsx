"use client";

/* Core */
import {Link, logotype, Image, usePathname, styles, OrderButton} from "./MainImports"

export const PlantNav = () => {
  const pathname = usePathname();

  return (
    <div className={pathname === "/plantcompany" ? "block" : "hidden"}>
      <div className="flex justify-between">
        <div className="NavContent1">
          <Link
            className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
            href="/"
          >
            <Image src={logotype} className={pathname === "/plantcompany" ? styles.logo1 : "hidden"} height={64}
              width={100} alt="logo" />
          </Link>
        </div>
        <div className="flex">
          <nav className={styles.plantNav}>
            <Link
              className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
              href="/"
            >
              Home
            </Link>
            <Link
              className={`${styles.link} ${pathname === "/vercel" ? styles.active : ""
                }`}
              href="/vercel"
            >
              Vercel
            </Link>
            <Link
              className={`${styles.link} ${pathname === "/plantcompany" ? styles.active : ""
                }`}
              href="/plantcompany"
            >
              Plant Company
            </Link>
            <Link
              className={`${styles.link} ${pathname === "/verify" ? styles.active : ""
                }`}
              href="/verify"
            >
              Verify
            </Link>
          </nav>
          <OrderButton />
        </div>
      </div>
    </div>
  );
};

export default PlantNav;