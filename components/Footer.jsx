"use client";
import useMenuActive from "../hooks/useMenuActive";
import LinkItem from "./LinkItem";
import { Links } from "../constants/links";
const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded dark:bg-dark dark:text-white border-t dark:border-none">
      <nav className="grid grid-flow-col gap-4">
        {Links.map((link, index) => {
          const isActive = useMenuActive(link.route);
          return (
            <LinkItem
              key={index}
              route={link.route}
              label={link.label}
              isActive={isActive}
              footer
            />
          );
        })}
      </nav>
      <aside>
        <p>
          Copyright © 2023 - All right reserved by Group 14
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
