const LANG_CONSTANTS = require("../../../constants/lang");

const PT_BR = {
  SCHOOLING: [
    "Sou formado no ensino superior em Análise e Desenvolvimento de Sistemas, pela Faculdade QI",
    "Atualmente estou cursando duas especializações na UniRitter:",
    "Desenvolvimento Mobile e User Experience",
  ],
  CAREER: [
    "Comecei minha carreira trabalhando com Java na Dell, em 2015, como estagiário",
    "Em 2016 comecei a trabalhar como dev Full-stack júnior na Getnet, com Java e PHP",
    "Em 2017 fui contratado pela Datum como desenvolvedor Full-stack Pleno, dessa vez abandonando o Java e trabalhando com PHP e Angular",
    "Ainda na Datum, em 2018, tive minha primeira experiência como líder técnico!",
    "Ao final de 2018 deixei a Datum e o Brasil ao ser contratado como Engenheiro Sênior pela Aptvision, em Dublin, Irlanda",
    "Em 2019, de volta ao Brasil, continuo atuando como Engenheiro Full-Stack Sênior na Sensedia, no Projeto Albatroz",
    "Ao final de 2019 abandonei os escritórios e comecei minha carreira como Engenheiro na X-Team, de forma totalmente remota!",
  ],
  PROJECTS: [
    "Todos os meus projetos estão abertos no Github, inclusive esta página e o bot com quem você está conversando!",
    "Também tenho um app publicado na Play Store",
    "Aqui estão alguns deles:",
  ],
  TRIVIA: [
    "Minha comida favorita costumava ser sushi, mas desde que viajei para Roma eu me apaixonei por Pizza!",
    "Tenho uma gata que só chamo de 'Filha'!",
    "Sou casado com uma programadora também!",
    "Eu costumava programar em PHP no passado, mas me apaixonei por Javascript. <3",
    "Eu não gosto de café! Mas adoro energéticos",
    "Apesar de trabalhar mais focado na web, sou apaixonado por todo tipo de dispositivo móvel!",
    "Amo jogar videogames, em especial Playstation e Nintendo",
    "Esta página foi toda construída em React! E você pode ver o código no meu Github, está tudo lá",
    "Quem está provendo essas respostas é um serviço chamado AIDEN, também criado por mim! O código é open source e está no meu Github. Vai lá ver!",
  ],
  PERSONAL: [
    "Meu nome é Thales Ludwig Valentini, mas essa parte você já sabe!",
    "Nasci e cresci na cidade de Porto Alegre, RS - Brasil, em 1991, onde morava com meu irmão mais velho e meus pais",
    "Me interessei por programação desde cedo, alterando pequenos scripts de jogos MUGEN no PC antigo do meu pai",
    "Adoro viajar e explorar, e por isso costumo optar pelo estilo de trabalho remoto",
    "Hoje vivo com a minha esposa e uma linda gatinha",
  ],
  SKILLS: [
    "Javascript, Typescript, React, React Native, Redux, Angular, Vue, Node, HTML, CSS3, Sass, Styled-Components",
    "E um pouco de PHP. :)",
  ],
  CONTACT: [
    "Pode entrar em contato comigo através das minhas redes sociais",
    "O e-mail é thales.ludwig@gmail.com",
  ],
  TECHNOLOGIES: [
    "Eu trabalho com qualquer coisa em Javascript!",
    "Meu foco atual é em React, React Native, e Node, mas também trabalho com Angular e Vue.",
  ],
  LANGUAGES: ["Falo inglês e português", "Inglês oral e escrito."],
};

const EN_US = {
  SCHOOLING: [
    "I am graduated in 'Systems Analysis and Development', at QI University in Brazil",
    "I am currently have two specializations ongoing at UniRitter University:",
    "Mobile Apps Development and User Experience",
  ],
  CAREER: [
    "I started my career working with Java at Dell in 2015, as an intern",
    "In 2016 I started working as a junior Full-stack developer at Getnet, with Java and PHP",
    "In 2017 I was hired by Datum as a Full-stack Developer, this time abandoning Java and working with PHP and Angular",
    "Still at Datum, in 2018, I had my first experience as a tech leader!",
    "At the end of 2018 I left Datum and Brazil when I was hired as a Senior Engineer by Aptvision, in Dublin, Ireland",
    "In 2019, back in Brazil, I continued to work as a Senior Full-Stack Engineer at Sensedia, working on the Albatroz Project",
    "At the end of 2019 I leave the offices and start my career as an Engineer at X-Team remotely!",
  ],
  PROJECTS: [
    "All of my projects are open on Github, including this page and the bot you're talking to!",
    "I also have an app published on the Play Store",
    "Here are some of them:",
  ],
  TRIVIA: [
    "My favorite food used to be sushi, but since I traveled to Rome I fell in love with Pizza!",
    "I have a cat that I only call 'Daughter'!",
    "I'm married to a programmer too!",
    "I used to program in PHP in the past, but I fell in love with Javascript. <3",
    "I don't like coffee! But I love energy drinks",
    "Despite working more focused on the web, I am passionate about all kinds of mobile devices!",
    "I love playing video games, especially Playstation and Nintendo",
    "This page is all built with React! And you can see the code on my Github, it's all there",
    "The answers you see here are provided by a service called AIDEN, also created by me! The code is open source and is available on my Github. Go check it out!",
  ],
  PERSONAL: [
    "My name is Thales Ludwig Valentini, but you already know that part!",
    "I was born and raised in the city of Porto Alegre, RS - Brazil, in 1991, where I lived with my older brother and my parents",
    "I was interested in programming from an early age, changing small MUGEN game scripts on my father's old PC",
    "I love to travel and explore, so I usually opt for the remote work style",
    "Today I live with my wife and a beautiful kitten",
  ],
  SKILLS: [
    "Javascript, Typescript, React, React Native, Redux, Angular, Vue, Node, HTML, CSS3, Sass, Styled-Components",
    "And a little PHP. :)",
  ],
  CONTACT: [
    "You can contact me through my social networks",
    "The e-mail is thales.ludwig@gmail.com",
  ],
  TECHNOLOGIES: [
    "I work with anything in JavaScript!",
    "My current focus is on React, React Native, and Node, but I also work with Angular and Vue.",
  ],
  LANGUAGES: ["I speak English and Portuguese", "Oral and written English."],
};

const LANG = {
  [LANG_CONSTANTS.PT_BR]: PT_BR,
  [LANG_CONSTANTS.EN_US]: EN_US,
};

module.exports = LANG;
