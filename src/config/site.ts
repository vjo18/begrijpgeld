import ogImage from "../assets/og-image.png";

export const siteConfig = {
  name: "Tijdvermogen",
  description:
    "Begrijp geld. Bescherm je tijd. Financiële educatie en bewustwording rond geld als opgeslagen levenstijd.",
  url: "https://tijdvermogen.be",
  lang: "nl",
  locale: "nl_BE",
  author: "Tijdvermogen",
  twitter: "@tijdvermogen",
  ogImage: ogImage,
  socialLinks: {
    twitter: "https://twitter.com",
    github: "https://github.com",
    discord: "https://discord.com",
  },
  navLinks: [
    { text: "Home", href: "/" },
    { text: "Over", href: "/about" },
    { text: "Manifest", href: "/manifest" },
    { text: "Blog", href: "/blog" },
    { text: "Contact", href: "/contact" },
    { text: "Tools", href: "/tools" },
  ],
};
