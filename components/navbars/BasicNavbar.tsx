import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../../public/logos/web-logo-only.png";

const MainNavbar = () => {
  return (
    <>
      <div className="nav-parent-container">
        <nav className="nav-shadow">
          <div className="container">
            {/* logo */}
            <Link className="logo-container pt-2 pb-2" href="/#home">
              <Image src={logo} alt="Logo" className="logo " />
              <span>Khun</span>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MainNavbar;
