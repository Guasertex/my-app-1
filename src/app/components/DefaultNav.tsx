"use client";
import {
  Link,
  usePathname,
  styles,
} from "./MainImports";

export const DefaultNav = () => {
  const pathname = usePathname();

  return (
    <div className={pathname === "/plantcompany" ? "hidden" : "block"}>
      <div className="flex justify-center">
        <nav className={styles.nav}>
          <Link
            className={`${styles.link} ${
              pathname === "/" ? styles.active : ""
            }`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`${styles.link} ${
              pathname === "/vercel" ? styles.active : ""
            }`}
            href="/vercel"
          >
            Vercel
          </Link>
          <Link
            className={`${styles.link} ${
              pathname === "/plantcompany" ? styles.active : ""
            }`}
            href="/plantcompany"
          >
            Plant Company
          </Link>
          <Link
            className={`${styles.link} ${
              pathname === "/verify" ? styles.active : ""
            }`}
            href="/verify"
          >
            Verify
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default DefaultNav;
