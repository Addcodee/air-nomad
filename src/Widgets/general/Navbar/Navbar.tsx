import "./Navbar.scss";
import logo_big from "../../../Shared/assets/logo-color.svg";
import logo from "../../../Shared/assets/logoColor.svg";
import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { BiChevronDown, BiChevronRight, BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { pages } from "./variables";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [countries, setCountries] = useState<boolean>(false);
  const [toures, setToures] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);

  const openList = (page: string, bool?: boolean) => {
    if (page === "Lander") {
      if (bool) {
        setCountries(bool);
      } else {
        setCountries(!countries);
      }
      return;
    }
    if (page === "Arten von Touren") {
      if (bool) {
        setToures(bool);
      } else {
        setToures(!toures);
      }
      return;
    }
  };

  const whichPage = (page: string) => {
    if (page === "Lander") {
      return countries;
    }
    if (page === "Arten von Touren") {
      return toures;
    }
  };

  const setScroll = () => {
    document.body.style.overflow = menu ? "hidden" : "auto";
  };

  useEffect(() => {
    setScroll();
  }, [menu]);

  return (
    <nav className="navbar">
      <img
        onClick={() => navigate("/")}
        id="logo-nav-big"
        src={logo_big}
        alt="logo-with-text"
      />
      <img
        onClick={() => navigate("/")}
        id="logo-nav-small"
        src={logo}
        alt="logo-no-text"
      />

      <ul className="navbar__pages">
        {pages.map((page) => (
          <li
            onMouseEnter={() =>
              page?.children ? openList(page.page, true) : null
            }
            onMouseLeave={() =>
              page?.children ? openList(page.page, false) : null
            }
            key={page.id}
          >
            <button
              onClick={() => {
                navigate(page.path);
              }}
              style={page.children ? { cursor: "auto" } : {}}
              id={pathname === page.path ? "nav-active-page" : ""}
            >
              {page.page} {page.children ? <BiChevronDown /> : null}
            </button>
            {whichPage(page.page) ? (
              <ul className="navbar__pages_children">
                {page?.children?.map((child) => (
                  <li onClick={() => navigate(child.path)} key={child.page}>
                    {child.page}
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>

      <button id="nav-favs" className="red-btn">
        Favourites
      </button>
      <button onClick={() => setMenu(true)} id="nav-menu">
        <BiMenu />
      </button>
      {menu ? (
        <div onClick={() => setMenu(false)} className="navbar__pages_small">
          <ul
            onClick={(e: React.MouseEvent<HTMLUListElement>) =>
              e.stopPropagation()
            }
            className="navbar__pages_small-wrapper"
          >
            <li id="menu-close">
              <button onClick={() => setMenu(false)}>
                <AiOutlineClose />
              </button>
            </li>
            {pages.map((page) => (
              <li key={page.id}>
                <button
                  onClick={() => {
                    navigate(page.path);
                    page.children ? openList(page.page) : null;
                    page.children ? null : setMenu(false);
                  }}
                  id={pathname === page.path ? "nav-active-page-small" : ""}
                >
                  {page.page} {page.children ? <BiChevronDown /> : null}
                </button>

                {whichPage(page.page) ? (
                  <ul className="navbar__pages_chilldren-small">
                    {page?.children?.map((child) => (
                      <li
                        key={child.id}
                        onClick={() => {
                          navigate(child.path);
                          setMenu(false);
                        }}
                      >
                        {child.page}
                        <BiChevronRight />
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
            <li id="menu-logo">
              <img src={logo_big} alt="nav-menu-logo" />
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
