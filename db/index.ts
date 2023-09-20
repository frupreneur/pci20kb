type MenuType = {
  name: string;
  path: string;
}[];

export const menu: MenuType = [
  { name: "Home", path: "/" },
  {
    name: "Articles",
    path: "/articles",
  },
  {
    name: "About Us",
    path: "/about",
  },

  {
    name: "Privacy Policy",
    path: "/privacy",
  },

  { name: "Contact us", path: "/contact" },
];

export const footerMenu: MenuType = [
  { name: "Site Map", path: "/sitemap.xml" },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Terms and Conditions",
    path: "/terms-and-conditions",
  },

  {
    name: "Privacy Policy",
    path: "/privacy",
  },

  { name: "Contact us", path: "/contact" },
];
