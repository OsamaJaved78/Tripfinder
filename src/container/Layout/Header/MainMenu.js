import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";

import {
  HOME_PAGE,
  LISTING_POSTS_PAGE,
  AGENT_PROFILE_PAGE,
  ABOUT_PAGE,
  CONTACT_PAGE,
} from "settings/constant";

const MainMenu = ({ className }) => {
  return (
    <Menu className={className}>
      <Menu.Item key="0">
        <NavLink exact to={`${HOME_PAGE}`}>
          Home
        </NavLink>
      </Menu.Item>
      <Menu.Item key="1">
        <NavLink to={`${LISTING_POSTS_PAGE}`}>Listing</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to={`${AGENT_PROFILE_PAGE}`}>Find Agents</NavLink>
      </Menu.Item>
      <Menu.Item key="3">
        <NavLink to={`${ABOUT_PAGE}`}>About</NavLink>
      </Menu.Item>
      <Menu.Item key="4">
        <NavLink to={`${CONTACT_PAGE}`}>Contact Us</NavLink>
      </Menu.Item>
      {/* <Menu.Item key="3">
        <NavLink to={`${PRICING_PLAN_PAGE}`}>Pricing</NavLink>
      </Menu.Item> */}
    </Menu>
  );
};

export default MainMenu;
