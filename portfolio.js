import emoji from "react-easy-emoji";

export const greetings = {
  name: "Godbless Onoriode",
  title: "Hi all, I'm Godbless",
  description:
    "A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript/ PHP / Reactjs / Nodejs / Angular / Nestjs / Laravel/ Ionic and some other cool libraries and frameworks and Cross Platform Mobile Apps With Angular.",
  resumeLink: "https://1drv.ms/w/s!AqTK0czETeAdg61yUX8EI3p9FQ9D1w?e=YhfcSi",
};

export const openSource = {
  githubUserName: "onosgb",
};

export const contact = {};

export const socialLinks = {
  facebook: "https://web.facebook.com/onosgb",
  instagram: "https://www.instagram.com/onosgb/",
  twitter: "https://twitter.com/onosgb25",
  github: "https://github.com/Onosgb",
  linkedin: "https://www.linkedin.com/in/godbless-onoriode-a33587127/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "logos:sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "logos:angular-icon",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "logos:aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "logos:firebase",
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "logos:laravel",
    },
    {
      skillName: "php",
      fontAwesomeClassname: "logos:php",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
    {
      skillName: "nestjs",
      fontAwesomeClassname: "logos:nestjs",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "70",
  },
  {
    Stack: "Programming",
    progressPercentage: "70",
  },
];

export const educationInfo = [
  {
    schoolName: "Imo State Polytecnic",
    subHeader: "Higher National Diploma (HND) in Computer Science",
    duration: "November 2014 - August 2016",
    desc: "Participated in the research of Design and implementation of online social network.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    schoolName: "Imo State Polytecnic",
    subHeader: "Odinary National Diploma (OND) in Computer Science",
    duration: "November 2010 - August 2012",
    desc: "Participated in the research of Network and Information Services.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consectetfgur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "M-R International (MrSoft",
    companylogo: "/img/icons/common/google.svg",
    date: "NOV 2018 – Present ",
    desc: "Managing Existing ESP Projects",
    descBullets: [
      "Schoo portals",
      "Learning Management System",
      "Enterprise Management System",
    ],
  },
  {
    role: "Software Developer",
    company: "Molloy Travel",
    companylogo: "/img/icons/common/github.svg",
    date: "FEB 2018 – NOV 2018 ",
    descBullets: ["Church Solution Portal", "E-Voting System"],
  },
  {
    role: "Frontend Developer",
    company: "Business System Solutions Limited ",
    companylogo: "/img/icons/common/airbnbLogo.png",
    date: "OCT 2017 - FEB 2018",
    desc: "New and existing VAS Applications",
    descBullets: ["Web applicaton development", "Record management System"],
  },
];

export const projects = [
  {
    name: "Crown Clothing",
    desc: "Site where you visit to buy Men and women wears, pay using your card",
    link: "https://crown-clothing-sales.herokuapp.com",
  },
  {
    name: "Monster Rolodex",
    desc: "Application that display the image of monsters based on their name",
    github: "https://github.com/Onosgb/monster-rolodex",
    link: "https://onosgb.github.io/monster-rolodex/",
  },
  {
    name: "Weather app",
    desc: "The applicaion is used to display the weather conditions in your evniroment",
    github: "https://github.com/Onosgb/weatherfinder",
    // link: "https://example.com",
  },
];

export const feedbacks = [
  {
    name: "Joel Stanley",
    feedback:
      "We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Onos has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
  },
  {
    name: "Daniel Ndubuisi",
    feedback:
      "the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
  },
];
