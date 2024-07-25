import { Metadata } from "next";

export const socials = [

  {
    id: 1,
    name: "Instagram",
    url: "https://instagram.com/sha0urya?igshid=Y2M0YTlkZGNmOQ==",
    handle: "@sha0urya",
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sha0urya/",
    handle: "@sha0urya",
  },
];

const title = "Praveen Kumar";
const description =
  "Full-Stack Developer 🧑🏻‍💻 ";
const image =
  "https://ibb.co/JsrgM4X";

export const metaData: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title,
    description,
    url: "https://praveenkportfolio.netlify.app/",
    siteName: "Praveen Kumar",
    images: [{ url: image }],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
