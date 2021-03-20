const EXPRESSIONS = require("./src/expressions");
const RESPONSES = require("./src/responses");
const OPERATIONS = require("./src/operations");
const getRandomIndexFor = require("../../helpers/getRandomIndex");

const projects = (lang) => [
  {
    id: "aiden",
    media: "github",
    url: "https://github.com/ThalesLudwig/aiden",
    name: "AIDEN",
    description: "Artificial Intelligence Designed for Extensions in Node",
  },
  {
    id: "paguei",
    media: "playstore",
    url:
      "https://play.google.com/store/apps/details?id=com.valentini.ludwig.thales",
    name: "Paguei",
    description:
      lang === "pt-BR"
        ? "Um app de controle financeiro com React Native"
        : "A financial control app with React Native",
  },
  {
    id: "paguei-rn",
    media: "github",
    url: "https://github.com/ThalesLudwig/paguei-rn",
    name: "Paguei (Code)",
    description:
      lang === "pt-BR"
        ? "O código do app Paguei"
        : "The code for the Paguei app",
  },
  {
    id: "coffeegram-web",
    media: "github",
    url: "https://github.com/ThalesLudwig/coffeegram-web",
    name: "Coffeegram",
    description:
      lang === "pt-BR"
        ? "Um projeto de portfolio simples para demonstrar o uso do React e suas bibliotecas"
        : "A simple portfolio project to show the use of React and its libraries",
  },
  {
    id: "coffeegram-server",
    media: "github",
    url: "https://github.com/ThalesLudwig/coffeegram-server",
    name: "Coffeegram (Server)",
    description:
      lang === "pt-BR"
        ? "O backend do app Coffeegram com NodeJS"
        : "The serverside app for Coffeegram with NodeJS",
  },
  {
    id: "coffeegram-mobile",
    media: "github",
    url: "https://github.com/ThalesLudwig/coffeegram-mobile",
    name: "Coffeegram (Mobile)",
    description:
      lang === "pt-BR"
        ? "O app mobile do Coffeegram com React Native"
        : "The mobile app for Coffeegram with React Native",
  },
  {
    id: "swapi-web-vue",
    media: "github",
    url: "https://github.com/ThalesLudwig/swapi-web-vue",
    name: "SWAPI UI",
    description:
      lang === "pt-BR"
        ? "Um projeto portfolio simples para mostrar o uso do VueJS e suas bibliotecas"
        : "A simple portfolio project to show the use of VueJS and its libraries",
  },
];

const social = (lang) => [
  {
    id: "social-github",
    media: "github",
    url: "https://github.com/ThalesLudwig/",
    name: "Github",
    description:
      lang === "pt-BR"
        ? "Todos os meus projetos estão aqui, você realmente deveria dar uma olhada"
        : "All my projects are here, you should totally check it out",
  },
  {
    id: "social-twitter",
    media: "twitter",
    url: "https://twitter.com/ThalesLudwig/",
    name: "Twitter",
    description:
      lang === "pt-BR"
        ? "Meu perfil do Twitter. Não espere muita coisa"
        : "My Twitter profile. Don't expect too much",
  },
  {
    id: "social-linkedin",
    media: "linkedin",
    url: "https://www.linkedin.com/in/thalesludwig/",
    name: "Linkedin",
    description:
      lang === "pt-BR"
        ? "Meu currículo online, com toda a informação que você precisa"
        : "My online resume, with all information you'll need",
  },
];

const Recruiter = ({ expression, lang }) => {
  const grammar = EXPRESSIONS[lang];

  let response = {
    data: [],
    meta: [],
  };

  switch (grammar[expression]) {
    case OPERATIONS.TRIVIA:
      const triviaRes = RESPONSES[lang][grammar[expression]];
      response.data = getRandomIndexFor(triviaRes);
      break;
    case OPERATIONS.PROJECTS:
      response.data = RESPONSES[lang][grammar[expression]];
      response.meta = projects(lang);
      break;
    case OPERATIONS.CONTACT:
      response.data = RESPONSES[lang][grammar[expression]];
      response.meta = social(lang);
      break;
    default:
      response.data = RESPONSES[lang][grammar[expression]];
      break;
  }
  return response;
};

module.exports = Recruiter;
