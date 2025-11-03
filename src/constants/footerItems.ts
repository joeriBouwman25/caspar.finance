import { SvgIcon } from "@mui/material";
import { EmailOutlined, LocationOn, PhoneIphone } from "@mui/icons-material";

export interface FooterLink {
  Icon?: typeof SvgIcon;
  label: string;
  href?: string;
}

export interface FooterSection {
  title?: string;
  items: FooterLink[];
}

export const FOOTER_ITEMS: FooterSection[] = [
  {
    title: "Caspar Finance",
    items: [
      { label: "Caspar Finance B.V." },
      { label: "Administratie en belastingen" },
      { label: "Handelsregister: 96497718" },
      { label: "BTW-nummer: NL8676.37.006.B.01" },
    ],
  },
  {
    title: "Contact informatie",
    items: [
      {
        Icon: EmailOutlined,
        label: "Caspar Finance, Postbus 420, 1400 AK Bussum, Nederland",
      },
      {
        Icon: LocationOn,
        label: "Binnenhof 62b, Naarden",
      },
      {
        Icon: PhoneIphone,
        label: "+31 6 201 619 79",
        href: "tel:+31620161979",
      },
      {
        Icon: EmailOutlined,
        label: "ph@caspar.finance",
        href: "mailto:ph@caspar.finance",
      },
    ],
  },
  {
    items: [{ label: "Algemene Voorwaarden", href: "/terms" }],
  },
];
