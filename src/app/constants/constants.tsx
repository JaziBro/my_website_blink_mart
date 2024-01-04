import facebook from "../../../public/facebook.svg"
import instagram from "../../../public/instagram.svg"
import twitter from "../../../public/twitter.svg"

export const nav_links = [
    {href:"/", key: "home", label: "Home" },
    {href:"/About", key: "about", label: "About" },
    {href:"/Contact", key: "contact", label: "Contact" },
];
  

export const FOOTER_LINKS = [
    {
      title: 'Learn More',
      links: [
        'About BlinkMart',
        'Privacy Policy',
      ],
    },
];

  
export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
      { label: 'Admin Officer', value: '+92 xxx yyyy zzz' },
      { label: 'Email Officer', value: 'Blinkmart@gmail.com' },
    ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    facebook,
    instagram,
    twitter,
  ],
};