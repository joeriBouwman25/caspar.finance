import {
  DoorFrontOutlined,
  HandshakeOutlined,
  MailOutline,
  PersonOutline,
} from "@mui/icons-material";
import { SvgIcon } from "@mui/material";

export interface RateItem {
  title: string;
  description: string;
  Icon: typeof SvgIcon;
}

export const RATES: RateItem[] = [
  {
    title: "Intake",
    description:
      "We nodigen u uit voor een intakegesprek op ons kantoor in Naarden of indien gewenst voor een onlinegesprek. Dit gesprek is om te horen welke vragen er spelen en uit te leggen wat onze dienstverlening inhoudt. Dit gesprek is altijd kosteloos en vrijblijvend.",
    Icon: DoorFrontOutlined,
  },
  {
    title: "Abonnement",
    description:
      "Wij werken op basis van een abonnement. Door het afsluiten van een abonnement weet u wat uw kosten zijn voor uw totale administratie. In het abonnement zijn alle administratieve werkzaamheden opgenomen. U kunt onbeperkt vragen stellen. Wij geven duidelijk advies en denken met je mee.",
    Icon: HandshakeOutlined,
  },
  {
    title: "Dropbox",
    description:
      "Als u bij ons klant bent, ontvangt uw een eigen Dropbox-account. In deze Dropbox kunt u uw inkoop- en verkoopfacturen opslaan. Wij verwerken deze facturen vervolgens in het boekhoudsysteem. Vervolgens verzorgen wij uw btw-aangifte en aangifte inkomstenbelasting.",
    Icon: MailOutline,
  },
  {
    title: "Voor wie?",
    description:
      "ZZP’ers, eenmanszaken, VOF’s, detailhandel, maatschappen. Een ZZP-abonnement is vanaf 79 euro per maand. Dit is inclusief alle aangiftes; ook aangifte inkomstenbelasting en aangifte inkomstenbelasting voor een eventuele partner.",
    Icon: PersonOutline,
  },
];
