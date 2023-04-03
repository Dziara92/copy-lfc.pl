const menuLeft = [
  {
    page: "Aktualności",
    links: [
      { label: "Aktualności", url: "/" },
      { label: "Sondy", url: "/Sondy" },
    ],
  },
  { page: "O Klubie" },
  { page: "Rozgrywki", links: [] },
  { page: "JohnnyBet", links: [] },
];

const menuRight = [
  { page: "Forum", links: [] },
  { page: "Galeria", links: [] },
  { page: "Sklep", links: [] },
  { page: "Dla fanów", links: [] },
  { page: "Redakcja", links: [] },
];

const forum = [
  { title: "Byli piłkarze Liverpoolu w nowych klubach" },
  { title: "Luźne dyskusje odnośnie Liverpoolu" },
  { title: "Trent Alexander-Arnold" },
  { title: "Seria A" },
  { title: "Jürgen Klopp" },
  { title: "Luźne dyskusje odnośnie Liverpoolu" },
  { title: "Byli piłkarze Liverpoolu w nowych klubach" },
  { title: "Trent Alexander-Arnold" },
];

const news = [
  {
    title: "Liverpool interesuje się Lindstrømem ",
    img: "./images/jesperlindstrom.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat natus molestiae.",
    data: "03.04.2023 09:31",
    main: true,
    id: 1,
  },
  {
    title: "Falk: Liverpool rozmawia z ojcem Bellinghama   ",
    img: "images/jesperlindstrom.jpg",
    text: "Christian Falk potwierdził, że Liverpool prowadzi rozmowy z..",
    data: "03.04.2023 12:04, BarryAllen, Bild ",
    main: false,
    id: 2,
  },
  {
    title: " Souness: Nie jestem pewny czy on jest liderem",
    img: "images/jesperlindstrom.jpg",
    text: "Graeme Souness zakwestionował umiejętności przywódcze Virgila van Dijka...",
    data: "03.04.2023 12:04, BarryAllen, Bild ",
    main: false,
    id: 3,
  },
];

export { menuLeft, menuRight, news, forum };
