import React, { useState, useEffect, useRef } from "react";
import { throttle } from "lodash";
import {
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineSolution,
  AiOutlineTrophy,
  AiOutlineSetting,
  AiOutlineSend,
} from "react-icons/ai";
import { IoMdMore } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { BiArrowToTop } from "react-icons/bi";

import { BREAK_POINTS } from "../public/constant";

const navbarOptions = [
  { title: "Home", href: "#home", icon: <AiOutlineHome /> },
  { title: "About", href: "#about", icon: <AiOutlineInfoCircle /> },
  { title: "Skills", href: "#skill", icon: <AiOutlineSolution /> },
  { title: "Qualification", href: "#qualification", icon: <AiOutlineTrophy /> },
  { title: "Tools", href: "#tool", icon: <AiOutlineSetting /> },
  { title: "Contact", href: "#contact", icon: <AiOutlineSend /> },
];

const numRenderElement = 4;

interface sectionAttributes {
  id: string;
  top: number;
  bottom: number;
}

const Navbar = () => {
  // states
  const [currentSection, setCurrentSection] = useState<sectionAttributes>();
  const [currentBreakpoint, setBreakpoint] = useState<string | null>(null);

  // refs
  const navRef = useRef<HTMLDivElement>(null);
  const navMobileRef = useRef<HTMLDivElement>(null);
  const ArrowTopRef = useRef<HTMLAnchorElement>(null);

  const onOpenMobileNav = () => {
    if (navMobileRef.current) {
      navMobileRef.current.style.top = "0";
      navMobileRef.current.style.opacity = "1";
      navMobileRef.current.style["z-index"] = "1";
    }
  };

  const onCloseMobileNav = () => {
    if (navMobileRef.current) {
      const height = navMobileRef.current.clientHeight + 10; // shadow height 10px
      navMobileRef.current.style.top = `-${height}px`;
      navMobileRef.current.style["z-index"] = -1;
    }
  };

  const handleListSections = () => {
    var initialHeight = 0;
    var listSections = [];
    const sections = document.getElementsByClassName("section-container");
    for (let index = 0; index < sections.length; index++) {
      const section = sections[index];
      const currentId = "#" + section.id;
      const { height } = section.getBoundingClientRect();

      // get position of component start from 0px
      const newHeight = initialHeight + height;
      listSections.push({
        id: currentId,
        top: initialHeight,
        bottom: newHeight,
      });
      initialHeight = newHeight;
    }
    return listSections;
  };

  const handleActiveNavSection = (
    currentScrollPos: number,
    listSections: sectionAttributes[]
  ) => {
    for (let index = 0; index < listSections.length; index++) {
      const section = listSections[index];
      if (
        currentScrollPos >= section.top &&
        currentScrollPos < section.bottom
      ) {
        setCurrentSection(section);
        break;
      }
    }
  };

  useEffect(() => {
    var windowHeight = window.innerHeight;
    var minHeightToHide = windowHeight > 400 ? windowHeight : 400;
    var prevWidth = window.innerWidth;
    if (prevWidth < BREAK_POINTS.md) {
      setBreakpoint("sm");
    } else if (prevWidth < BREAK_POINTS.lg) {
      setBreakpoint("md");
    } else {
      setBreakpoint("lg");
    }

    // get list of sections' size and id
    var listSections = handleListSections();

    // handle initial active nav section
    handleActiveNavSection(window.pageYOffset, listSections);

    window.onresize = throttle(() => {
      const currentWidth = window.innerWidth;
      if (currentWidth < BREAK_POINTS.md) {
        setBreakpoint("sm");
      } else if (currentWidth < BREAK_POINTS.lg) {
        setBreakpoint("md");
      } else {
        setBreakpoint("lg");
      }

      if (windowHeight != window.innerHeight) {
        // update height
        windowHeight = window.innerHeight;
        minHeightToHide = windowHeight > 400 ? windowHeight : 400;
      }

      // get new list of sections' size and id
      listSections = handleListSections();
    }, 200);

    var minHeighToDisplay = 300;
    var prevScrollpos = window.pageYOffset;
    window.onscroll = throttle(() => {
      const currentScrollPos = window.pageYOffset;
      if (navRef) {
        const navHeight = navRef.current?.clientHeight || 0;

        // handle navbar shadow
        if (currentScrollPos < navHeight) {
          navRef.current?.classList.remove("nav-shadow");
        } else if (!navRef.current?.classList.contains("nav-shadow")) {
          navRef.current?.classList.add("nav-shadow");
        }

        // hide nav bar when scroll bigger than minHeightToHide
        if (currentScrollPos > minHeightToHide && navRef.current) {
          if (prevScrollpos > currentScrollPos) {
            navRef.current.style.top = "0";
          } else {
            navRef.current.style.top = `-${navHeight}px`;
            navRef.current.classList.remove("nav-shadow");
          }
          prevScrollpos = currentScrollPos;
        }

        // handle nav active class
        handleActiveNavSection(window.pageYOffset, listSections);
      }

      // handle arrow to top
      if (ArrowTopRef.current) {
        const classList = ArrowTopRef.current.classList;
        if (currentScrollPos < minHeighToDisplay) {
          if (classList?.contains("fade-in")) {
            ArrowTopRef.current.classList.remove("fade-in");
            ArrowTopRef.current.classList.add("fade-out");
          }
        } else {
          if (classList.contains("fade-out")) {
            ArrowTopRef.current.classList.remove("fade-out");
            ArrowTopRef.current.classList.add("fade-in");
          }
        }
      }
    }, 200);

    return () => {
      window.onscroll = null;
      window.onresize = null;
    };
  }, []);

  return (
    <>
      <div className="nav-parent-container">
        <nav ref={navRef}>
          <div className="container">
            <span className="logo">SengKhun</span>
            <ul className="link-container">
              {/* render for large screen */}
              {currentBreakpoint == "lg" &&
                navbarOptions.map((item, idx) => (
                  <li key={idx} className="nav-item">
                    <a
                      href={item.href}
                      className={
                        currentSection?.id == item.href ? "active" : ""
                      }
                    >
                      {item.title}
                    </a>
                  </li>
                ))}

              {/* render for medium screen */}
              {currentBreakpoint == "md" &&
                navbarOptions.slice(0, numRenderElement).map((item, idx) => (
                  <li key={idx} className="nav-item">
                    <a
                      href={item.href}
                      className={
                        currentSection?.id === item.href ? "active" : ""
                      }
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              {currentBreakpoint == "md" && (
                <div className="dropdown">
                  <IoMdMore
                    id="navDropdownMenuIcon"
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  />
                  <ul
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navDropdownMenuIcon"
                  >
                    {navbarOptions.slice(4).map((item, idx) => (
                      <li key={idx}>
                        <a
                          href={item.href}
                          className={`dropdown-item ${
                            currentSection?.id === item.href ? "active" : ""
                          }`}
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* render for small screen */}
              {currentBreakpoint == "sm" && (
                <RiMenu3Fill onClick={onOpenMobileNav} />
              )}
            </ul>
          </div>
        </nav>

        {/* mobile navbar menu */}
        {currentBreakpoint == "sm" && (
          <div ref={navMobileRef} className="navbar-menu-container container">
            <div className="close-menu">
              <AiOutlineClose onClick={onCloseMobileNav} />
            </div>
            <ul className="navbar-menu">
              {navbarOptions.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className={`nav-item ${
                    currentSection?.id === item.href ? "active" : ""
                  }`}
                  onClick={onCloseMobileNav}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </a>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* arrow that bring to the top of the page */}
      <a
        className="arrow-top-btn fade-out"
        href="#home"
        ref={ArrowTopRef}
        title="Back to Top"
      >
        <BiArrowToTop />
      </a>
    </>
  );
};

export default Navbar;
