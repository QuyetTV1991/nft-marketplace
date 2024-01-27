import { NavLink } from "@/types";

export const NavLinks: NavLink[] = [
  { route: "/", label: "Explor NFTs" },
  { route: "/created-nfts", label: "Listed NFTs" },
  { route: "/my-nfts", label: "My NFTs" },
];

export const FooterIcons = [
  { iconUrl: '/assets/instagram.png', label: "Instagram" },
  { iconUrl: '/assets/twitter.png', label: "Twitter" },
  { iconUrl: '/assets/telegram.png', label: "Telegram" },
  { iconUrl: '/assets/discord.png', label: "Discord" },
]

export const FooterLinks = [
  {
    heading: 'CrytoKet', items: [
      { label: "Explore", route: '/explore' },
      { label: "How it Works", route: '/how-it-works' },
      { label: "Contact Us", route: '/contact-us' },
    ]
  },
  {
    heading: 'Support', items: [
      { label: "Help Center", route: '/help-center' },
      { label: "Terms of Service", route: '/terms-of-service' },
      { label: "Legal", route: '/legal' },
      { label: "Privacy Policy", route: '/privacy-policy' },
    ]
  },
]