import React, { type ReactNode } from "react";
import {
  Euro,
  HandshakeOutlined,
  MailOutline,
  PhoneIphone,
  Public,
} from "@mui/icons-material";
import { SvgIcon } from "@mui/material";

export interface ContactItem {
  Icon: typeof SvgIcon;
  label: ReactNode; // string or link element
}

const linkBase =
  "hover:text-primary-400 underline decoration-primary-500/30 underline-offset-4 transition-colors";

export const CONTACT_ITEMS: ContactItem[] = [
  {
    Icon: MailOutline,
    label: "Caspar Finance B.V. Postbus 420, 1400 AK Bussum, Nederland",
  },
  {
    Icon: PhoneIphone,
    label: React.createElement(
      "a",
      { href: "tel:+31620161979", className: linkBase },
      "+31 6 201 619 79",
    ),
  },
  {
    Icon: MailOutline,
    label: React.createElement(
      "a",
      { href: "mailto:ph@caspar.finance", className: linkBase },
      "ph@caspar.finance",
    ),
  },
  {
    Icon: Public,
    label: React.createElement(
      "a",
      {
        href: "https://www.caspar.finance",
        target: "_blank",
        rel: "noopener noreferrer",
        className: linkBase,
      },
      "www.caspar.finance",
    ),
  },
  {
    Icon: HandshakeOutlined,
    label: "Handelsregister: 96497718",
  },
  {
    Icon: Euro,
    label: "BTW-nummer: NL8676.37.006.B.01",
  },
];
