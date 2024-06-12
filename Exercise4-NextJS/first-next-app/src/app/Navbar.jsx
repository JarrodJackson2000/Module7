"use client"; // client component, not server rendered
import Link from "next/link";
import { usePathname } from "next/navigation";
// copied from previous NavBar.jsx component, modified for Next.js
// save as src/components/NavBar.jsx
function NavBar() {
  const path = usePathname(); // hook to check current path
  return (
    <nav
      className="NavBar"
      style={{ backgroundColor: "#09193b", color: "#14bbe5" }}
    >
      <ul className="menu">
        {/* Next.js Link components use href instead of to prop */}
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link
            href="/BitcoinPage"
            className={path.startsWith("/BitcoinPage") ? "active" : null}
          >
            Bitcoin Rates
          </Link>
        </li>
        <li>
          <Link
            href="/SimpleCalculator"
            className={path.startsWith("/SimpleCalculator") ? "active" : null}
          >
            Simple Calculator
          </Link>
        </li>
        <li>
          <Link
            href="/BigCats"
            className={path.startsWith("/BigCats") ? "active" : null}
          >
            Big Cats
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
