import React from "react";
import styled from "styled-components";

import logo from "../assets/images/logo.svg";
import strings from "../assets/json/strings.json";

import home_icon from "../assets/images/home-icon.svg";
import search_icon from "../assets/images/search-icon.svg";
import watchlist_icon from "../assets/images/watchlist-icon.svg";
import original_icon from "../assets/images/original-icon.svg";
import movie_icon from "../assets/images/movie-icon.svg";
import serie_icon from "../assets/images/series-icon.svg";

const menu = [
  {
    path: "/",
    title: "Home",
    icon: home_icon,
  },
  {
    path: "/",
    title: "Search",
    icon: search_icon,
  },
  {
    path: "/watchlist",
    title: "Watchlist",
    icon: watchlist_icon,
  },
  {
    path: "/original",
    title: "Originals",
    icon: original_icon,
  },
  {
    path: "/movies",
    title: "Movies",
    icon: movie_icon,
  },
  {
    path: "/series",
    title: "Series",
    icon: serie_icon,
  },
];

export default function Navbar() {
  return (
    <Nav>
      <Flex>
        <Logo>
          <img src={logo} alt="disney-logo" width="100px" height="60px" />
        </Logo>
        <NavMenu>
          {menu?.map((item) => {
            return (
              <NavItem>
                <a href={item?.path}>
                  <img
                    src={item.icon}
                    alt={item.title}
                    width="20px"
                    height="20px"
                  />
                  {item.title}
                </a>
              </NavItem>
            );
          })}
        </NavMenu>
      </Flex>
    </Nav>
  );
}

const Flex = styled.div`
  display: flex;
  align-items: center;
`;
const Nav = styled.nav`
  height: 80px;
  padding: 10px var(--side-padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--black);
`;

const Logo = styled.a`
  max-height: 70px;
  display: inline-block;
  margin-right: 25px;

  img {
    width: 100%;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
`;

const NavItem = styled.li`
  padding: 0 15px;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  a {
    display: flex;
    align-items: center;
  }

  img {
    margin-right: 5px;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
