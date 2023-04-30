import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="nav-main-con">
      <div className="nav-logo-con">
        <Link href="/">
          {" "}
          <Image
            src="/AJIS FILE 1.png"
            alt="logo"
            height={50}
            width={50}
            //   fill
            //   sizes="100vw"
            //   className="logo-image"
          ></Image>
        </Link>
      </div>
      <nav>
        <ul>
          <Link href="/website">
            <li>Website</li>
          </Link>
          <Link href="/mobileapp">
            <li>App</li>
          </Link>
          <Link href="/uiux">
            <li>UI/UX</li>
          </Link>
          <Link href="/design">
            <li>Design</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
