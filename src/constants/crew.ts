import paulImg from "../assets/Paul zwart wit.jpg";
import marjolijnImg from "../assets/Marjolijn zwart wit.jpg";
import jelleImg from "../assets/Jelle zwart wit.jpg";
import amberImg from "../assets/Amber zwart wit.jpg";
import mischaImg from "../assets/micha zwart wit.png";

export interface TeamMember {
  name: string;
  img: string;
  body: string;
  alt: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Paul Hermans",
    img: paulImg,
    alt: "Paul",
    body: "Voor 1995 heb ik bij verschillende bedrijven gewerkt als hoofd administratie, onder andere bij Nierstichting Nederland (1993-1998). In 1995 ben ik gestart met Caspar Finance, een administratiekantoor. In deze periode van 26 jaar heb ik tot 2011 altijd extern gewerkt bij verschillende kantoren. Ik ben bijvoorbeeld hoofd financiën geweest bij AMT (voorloper van uniQure) en Marviq. Vanaf 2011 werk ik vanuit mijn eigen kantoor in Naarden voor allerlei bedrijven. Van ZZP’ers tot advocatenkantoren, winkeliers, scholen en DGA’s.",
  },
  {
    name: "Marjolein Wielaert",
    img: marjolijnImg,
    alt: "Marjolein",
    body: "Na mijn studie Algemene Sociale Wetenschappen heb ik voor verschillende organisaties gewerkt. In 2014 ben ik gestart met ondernemen en heb ik jaren een webshop en winkel in Utrecht gehad. In 2020 ben ik parttime als administrateur gaan werken. Sinds 2025 ben ik co-founder van Caspar Finance B.V.",
  },
  {
    name: "Jelle Hermans",
    img: jelleImg,
    alt: "Jelle",
    body: "Ooit ben ik begonnen bij Caspar Finance om mijn rechtenstudie te bekostigen. Met een diploma rechten op zak heb ik besloten om aan te blijven. Het boekhoudersvak heb ik in de praktijk geleerd van Paul. Bij Caspar Finance richt ik mij vooral op het debiteurenbeheer en juridische kwesties.",
  },
  {
    name: "Amber van Reeuwijk",
    img: amberImg,
    alt: "Amber",
    body: "Voor mij staat Caspar Finance voor doorgroeien en vertrouwen. In 2020 begon ik bij Caspar Finance te werken naast mijn studie Nederlandse Taal en Cultuur. Sinds 2025 ben ik co-founder van Caspar Finance B.V. en ondersteun ik als fulltime administrateur klanten op boekhoudkundig gebied met de groei van hun bedrijf. Deze groei is mogelijk door de persoonlijke sfeer en het vertrouwen, die bij ons hoog in het vaandel staan. Samen denken we mee om betere resultaten te behalen.",
  },
  {
    name: "Mischa Douma",
    img: mischaImg,
    alt: "Micha",
    body: "Na mijn opleiding als grafisch ontwerper ben ik in 2022 bij Caspar Finance aan de slag gegaan. Inmiddels houd ik me vooral bezig met de crediteurenadministratie, naast de algemene boekhoudkundige taken richt ik me ook op de archiveringsprocessen bij Caspar Finance.",
  },
];
