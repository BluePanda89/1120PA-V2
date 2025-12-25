export interface NavItem {
  name: string;
  href: string;
}

export const navLinks: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Facilities", href: "/facilities" },
  { name: "Announcements", href: "/updates" },
];