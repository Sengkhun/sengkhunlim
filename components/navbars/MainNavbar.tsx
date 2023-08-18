import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
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
import ReactGA from "react-ga4";
import { useDispatch } from "react-redux";

import logo from "../../public/logos/web-logo-only.png";
import { BREAK_POINTS, GA_CATEGORIES } from "../../utils/constant";
import { setSectionVisible } from "../../store/navSlice";

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

const MainNavbar = () => {
  // hooks
  const dispatch = useDispatch();

  // states
  const [currentSection, setCurrentSection] = useState<sectionAttributes>();
  const [currentBreakpoint, setBreakpoint] = useState<string | null>(null);

  // refs
  const navRef = useRef<HTMLDivElement>(null);
  const navMobileRef = useRef<HTMLDivElement>(null);
  const ArrowTopRef = useRef<HTMLAnchorElement>(null);
  const listSectionsRef = useRef<sectionAttributes[]>([]);
  const activeNavOffsetRef = useRef<number>(0);
  const sectionAnimationOffsetRef = useRef<number>(0);

  const onOpenMobileNav = () => {
    if (navMobileRef.current) {
      navMobileRef.current.style.top = "0";
      navMobileRef.current.style.opacity = "1";
      navMobileRef.current.style.zIndex = "1";
    }
  };

  const onCloseMobileNav = (title: string) => {
    if (navMobileRef.current) {
      const height = navMobileRef.current.clientHeight + 10; // shadow height 10px
      navMobileRef.current.style.top = `-${height}px`;
      navMobileRef.current.style.zIndex = "-1";
    }

    // send GA event
    ReactGA.event({
      category: GA_CATEGORIES.navClick,
      action: title,
      label: "Top menu navigation",
    });
  };

  const handleListSections = () => {
    var listSections = [];
    var offest = 0;
    const sections = document.getElementsByClassName("section-container");
    for (let index = 0; index < sections.length; index++) {
      const section = sections[index];
      const currentId = "#" + section.id;
      const { top, bottom } = section.getBoundingClientRect();

      if (index === 0) {
        offest = -top;
        activeNavOffsetRef.current = (bottom - top) * 0.35;
        sectionAnimationOffsetRef.current = (bottom - top) * 0.75;
      }

      // get position of component start from 0px
      listSections.push({
        id: currentId,
        top: top + offest,
        bottom: bottom + offest,
      });
    }
    return listSections;
  };

  const handleActiveNavSection = useCallback(
    (currentScrollPos: number) => {
      const length = listSectionsRef.current.length;
      for (let index = 0; index < length; index++) {
        const section = listSectionsRef.current[index];
        if (
          currentScrollPos + sectionAnimationOffsetRef.current > section.top &&
          (currentScrollPos + sectionAnimationOffsetRef.current <
            section.bottom ||
            index === length - 1)
        ) {
          dispatch(setSectionVisible(section.id));
        }

        if (
          currentScrollPos + activeNavOffsetRef.current > section.top &&
          currentScrollPos + activeNavOffsetRef.current < section.bottom
        ) {
          setCurrentSection(section);
        }
      }
    },
    [dispatch]
  );

  useEffect(() => {
    var windowHeight = window.innerHeight;
    var prevWidth = window.innerWidth;
    if (prevWidth < BREAK_POINTS.md) {
      setBreakpoint("sm");
    } else if (prevWidth < BREAK_POINTS.lg) {
      setBreakpoint("md");
    } else {
      setBreakpoint("lg");
    }

    // get list of sections' size and id
    listSectionsRef.current = handleListSections();

    // handle initial active nav section
    handleActiveNavSection(window.scrollY);

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
      }

      // get new list of sections' size and id
      listSectionsRef.current = handleListSections();
    }, 500);

    var minHeighToDisplay = 300;
    window.onscroll = throttle(() => {
      const currentScrollPos = window.scrollY;
      if (navRef) {
        const navHeight = navRef.current?.clientHeight || 0;

        // handle navbar shadow
        if (currentScrollPos < navHeight) {
          navRef.current?.classList.remove("nav-shadow");
        } else if (!navRef.current?.classList.contains("nav-shadow")) {
          navRef.current?.classList.add("nav-shadow");
        }

        // handle nav active class
        handleActiveNavSection(window.scrollY);
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
    }, 500);

    return () => {
      window.onscroll = null;
      window.onresize = null;
    };
  }, [handleActiveNavSection]);

  const onNavClick = (title: string) => {
    // send GA event
    ReactGA.event({
      category: GA_CATEGORIES.navClick,
      action: title,
      label: "Top menu navigation",
    });
  };

  const onBackToTopClick = () => {
    // send GA event
    ReactGA.event({
      category: GA_CATEGORIES.buttonClick,
      action: "Back to Top",
    });
  };

  return (
    <>
      <div className="nav-parent-container">
        <nav ref={navRef}>
          <div className="container">
            {/* logo */}
            <Link className="logo-container" href="/#home">
              <Image src={logo} alt="Logo" className="logo" priority={true} />
              <span>Khun</span>
            </Link>

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
                      onClick={() => onNavClick(item.title)}
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
                      onClick={() => onNavClick(item.title)}
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
                          onClick={() => onNavClick(item.title)}
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
                <li>
                  <RiMenu3Fill onClick={onOpenMobileNav} />
                </li>
              )}
            </ul>
          </div>
        </nav>

        {/* mobile navbar menu */}
        {currentBreakpoint == "sm" ? (
          <>
            <div ref={navMobileRef} className="navbar-menu-container container">
              <div className="close-menu">
                <AiOutlineClose onClick={() => onCloseMobileNav("Close")} />
              </div>
              <ul className="navbar-menu">
                {navbarOptions.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      className={`nav-item ${
                        currentSection?.id === item.href ? "active" : ""
                      }`}
                      onClick={() => onCloseMobileNav(item.title)}
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : null}
      </div>

      {/* arrow that bring to the top of the page */}
      <a
        className="arrow-top-btn fade-out"
        href="#home"
        ref={ArrowTopRef}
        title="Back to Top"
        onClick={onBackToTopClick}
      >
        <BiArrowToTop />
      </a>
    </>
  );
};

export default MainNavbar;
