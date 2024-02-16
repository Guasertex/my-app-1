"use client";

/* Core */
import {Link, logotype, Image, usePathname, styles, OrderButton} from "./MainImports"

export const Nav = () => {
  const pathname = usePathname();

  return (
    <div className="mx-36">
      <div className="flex justify-between">
        <div className="NavContent1">
          <Link
            className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
            href="/"
          >
            <Image src={logotype} className={pathname == "/" ? styles.logo1 : "hidden"} height={64}
              width={100} alt="logo" />
          </Link>
        </div>
        <div className="flex">
          <nav className={styles.nav}>
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
