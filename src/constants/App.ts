import TNav from "types/TNav"



export const menuItems: TNav.Link[] = [
  {
    items: [
      { link: "/discussion", label: "Discussion" },
      { link: "/sub2",       label: "Subpage #2" },
      { link: "/sub3",       label: "Subpage #3" }
    ],
    link: "/", 				   label: "Home"
  },
  { link: "/colosseum",  label: "Colosseum" },
  { link: "/journal",    label: "Journal" },
  { link: "/players",    label: "Players" },
  { link: "/draft",      label: "Draft" },
  { link: "/bazaar",     label: "Bazaar" },
  { link: "/the den",    label: "The Den" },
  { link: "/stats",      label: "Stats" },
  { link: "/compendium", label: "Compendium" },
  { link: "/archives",   label: "Archives" },
  { link: "/help",       label: "Help" },
]