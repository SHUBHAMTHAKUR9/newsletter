import { Metadata } from "next";

export const socials = [

  {
    id: 1,
    name: "Instagram",
    url: "https://instagram.com/",
    handle: "@",
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/",
    handle: "@",
  },
];

const title = "Shubham Kumar Thakur";
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
    url: "https://.netlify.app/",
    siteName: "Shubham Kumar Thakur",
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
