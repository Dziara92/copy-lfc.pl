import mainFoto from "./images/jesperlindstrom.jpg";

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
  { title: "Byli piłkarze Liverpoolu w nowych klubach", id: 1 },
  { title: "Luźne dyskusje odnośnie Liverpoolu", id: 2 },
  { title: "Trent Alexander-Arnold", id: 3 },
  { title: "Seria A", id: 4 },
  { title: "Jürgen Klopp", id: 8 },
  { title: "Luźne dyskusje odnośnie Liverpoolu", id: 5 },
  { title: "Byli piłkarze Liverpoolu w nowych klubach", id: 6 },
  { title: "Trent Alexander-Arnold", id: 7 },
];

const news = [
  {
    title: "Liverpool interesuje się Lindstrømem",
    img: mainFoto,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat natus molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maiores harum velit numquam non quia ex recusandae nam enim pariatur odio ratione ipsa nemo, facere sequi doloribus quos libero dolore! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis cum repudiandae recusandae magnam, enim earum rem deleniti quo, maiores adipisci necessitatibus. Repellat nostrum ipsam illo dicta sunt minus quia voluptates.",
    data: "03.04.2023 09:31",
    main: true,
    id: 1,
  },
  {
    title: "Richards - Jürgen Klopp jest zbyt lojalny",
    img: mainFoto,
    text: "Graeme Souness zakwestionował umiejętności przywódcze Virgila van Dijka.Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maiores harum velit numquam non quia ex recusandae nam enim pariatur odio ratione ipsa nemo, facere sequi doloribus quos libero dolore! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis cum repudiandae recusandae magnam, enim earum rem deleniti quo, maiores adipisci necessitatibus. Repellat nostrum ipsam illo dicta sunt minus quia voluptates.",
    data: "03.04.2023 12:04, BarryAllen, Bild ",
    main: false,
    id: 2,
  },
  {
    title: "Robertson - Mecze z Chelsea zawsze są trudne",
    img: mainFoto,
    text: "Graeme Souness zakwestionował umiejętności przywódcze Virgila van Dijka.Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maiores harum velit numquam non quia ex recusandae nam enim pariatur odio ratione ipsa nemo, facere sequi doloribus quos libero dolore! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis cum repudiandae recusandae magnam, enim earum rem deleniti quo, maiores adipisci necessitatibus. Repellat nostrum ipsam illo dicta sunt minus quia voluptates.",
    data: "03.04.2023 12:04, BarryAllen, Bild ",
    main: false,
    id: 3,
  },
  {
    title: "Pamiętne bramki na Stamford Bridge - video",
    img: mainFoto,
    text: "Graeme Souness zakwestionował umiejętności przywódcze Virgila van Dijka.Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maiores harum velit numquam non quia ex recusandae nam enim pariatur odio ratione ipsa nemo, facere sequi doloribus quos libero dolore! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis cum repudiandae recusandae magnam, enim earum rem deleniti quo, maiores adipisci necessitatibus. Repellat nostrum ipsam illo dicta sunt minus quia voluptates.",
    data: "03.04.2023 12:04, BarryAllen, Bild ",
    main: false,
    id: 4,
  },
  {
    title: "Souness - Nie jestem pewny czy on jest liderem",
    img: mainFoto,
    text: "Graeme Souness zakwestionował umiejętności przywódcze Virgila van Dijka. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maiores harum velit numquam non quia ex recusandae nam enim pariatur odio ratione ipsa nemo, facere sequi doloribus quos libero dolore! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis cum repudiandae recusandae magnam, enim earum rem deleniti quo, maiores adipisci necessitatibus. Repellat nostrum ipsam illo dicta sunt minus quia voluptates.",
    data: "03.04.2023 12:04, BarryAllen, Bild ",
    main: false,
    id: 5,
  },
  {
    title: "Souness - Nie jestem pewny czy on jest liderem",
    img: mainFoto,
    text: "Graeme Souness zakwestionował umiejętności przywódcze Virgila van Dijka. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maiores harum velit numquam non quia ex recusandae nam enim pariatur odio ratione ipsa nemo, facere sequi doloribus quos libero dolore! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis cum repudiandae recusandae magnam, enim earum rem deleniti quo, maiores adipisci necessitatibus. Repellat nostrum ipsam illo dicta sunt minus quia voluptates.",
    data: "03.04.2023 12:04, BarryAllen, Bild ",
    main: false,
    id: 6,
  },
  {
    title: "Souness - Nie jestem pewny czy on jest liderem",
    img: mainFoto,
    text: "Graeme Souness zakwestionował umiejętności przywódcze Virgila van Dijka. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maiores harum velit numquam non quia ex recusandae nam enim pariatur odio ratione ipsa nemo, facere sequi doloribus quos libero dolore! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis cum repudiandae recusandae magnam, enim earum rem deleniti quo, maiores adipisci necessitatibus. Repellat nostrum ipsam illo dicta sunt minus quia voluptates.",
    data: "03.04.2023 12:04, BarryAllen, Bild ",
    main: false,
    id: 7,
  },
  {
    title: "Souness - Nie jestem pewny czy on jest liderem",
    img: mainFoto,
    text: "Graeme Souness zakwestionował umiejętności przywódcze Virgila van Dijka. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maiores harum velit numquam non quia ex recusandae nam enim pariatur odio ratione ipsa nemo, facere sequi doloribus quos libero dolore! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis cum repudiandae recusandae magnam, enim earum rem deleniti quo, maiores adipisci necessitatibus. Repellat nostrum ipsam illo dicta sunt minus quia voluptates.",
    data: "03.04.2023 12:04, BarryAllen, Bild ",
    main: false,
    id: 8,
  },

  {
    title: "Souness - Nie jestem pewny czy on jest liderem",
    img: mainFoto,
    text: "Graeme Souness zakwestionował umiejętności przywódcze Virgila van Dijka. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maiores harum velit numquam non quia ex recusandae nam enim pariatur odio ratione ipsa nemo, facere sequi doloribus quos libero dolore! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis cum repudiandae recusandae magnam, enim earum rem deleniti quo, maiores adipisci necessitatibus. Repellat nostrum ipsam illo dicta sunt minus quia voluptates.",
    data: "03.04.2023 12:04, BarryAllen, Bild ",
    main: false,
    id: 9,
  },
  {
    title: "Souness - Nie jestem pewny czy on jest liderem",
    img: mainFoto,
    text: "Graeme Souness zakwestionował umiejętności przywódcze Virgila van Dijka. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maiores harum velit numquam non quia ex recusandae nam enim pariatur odio ratione ipsa nemo, facere sequi doloribus quos libero dolore! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis cum repudiandae recusandae magnam, enim earum rem deleniti quo, maiores adipisci necessitatibus. Repellat nostrum ipsam illo dicta sunt minus quia voluptates.",
    data: "03.04.2023 12:04, BarryAllen, Bild ",
    main: false,
    id: 10,
  },

  {
    title: "Souness - Nie jestem pewny czy on jest liderem",
    img: mainFoto,
    text: "Graeme Souness zakwestionował umiejętności przywódcze Virgila van Dijka. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maiores harum velit numquam non quia ex recusandae nam enim pariatur odio ratione ipsa nemo, facere sequi doloribus quos libero dolore! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis cum repudiandae recusandae magnam, enim earum rem deleniti quo, maiores adipisci necessitatibus. Repellat nostrum ipsam illo dicta sunt minus quia voluptates.",
    data: "03.04.2023 12:04, BarryAllen, Bild ",
    main: false,
    id: 11,
  },
];

const table = [
  {
    place: "1",
    team: "ars",
    games: "24",
    score: "64",
    id: 1,
  },
  {
    place: "2",
    team: "LIV",
    games: "24",
    score: "34",
    id: 2,
  },
  {
    place: "3",
    team: "MCI",
    games: "32",
    score: "34",
    id: 3,
  },
  {
    place: "4",
    team: "NEW",
    games: "24",
    score: "34",
    id: 4,
  },
  {
    place: "5",
    team: "TOT",
    games: "24",
    score: "34",
    id: 5,
  },
  {
    place: "6",
    team: "MUN",
    games: "24",
    score: "34",
    id: 6,
  },
  {
    place: "7",
    team: "MUN",
    games: "24",
    score: "34",
    id: 7,
  },
  {
    place: "8",
    team: "MUN",
    games: "24",
    score: "34",
    id: 8,
  },
];
const goalScorers = [
  {
    place: "1",
    player: "Mohamed Salah",
    score: "28",
    id: 1,
  },
  {
    place: "2",
    player: "Darwin Núñez",
    score: "20",
    id: 2,
  },
  {
    place: "3",
    player: "Roberto Firmino",
    score: "17",
    id: 3,
  },
  {
    place: "4",
    player: "Harvey Elliott",
    score: "8",
    id: 4,
  },
  {
    place: "5",
    player: "Luis Díaz",
    score: "3",
    id: 5,
  },
];

export { menuLeft, menuRight, news, forum, table, goalScorers };
