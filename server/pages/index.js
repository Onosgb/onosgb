"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(860);
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
// EXTERNAL MODULE: ./portfolio.js + 1 modules
var portfolio = __webpack_require__(644);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/SEO.jsx






function SEO({
  data
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
    children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
      children: data.title
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "title",
      content: data.title
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "author",
      content: "Godbless Onoriode"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "description",
      content: data.description
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "keywords",
      content: data.keywords.join(", ")
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "canonical",
      href: data.url
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:type",
      content: "website"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:url",
      content: data.url
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:title",
      content: data.title
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:description",
      content: data.description
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:image",
      content: data.image
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:site_name",
      content: data.title
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "twitter:card",
      content: "summary_large_image"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "twitter:url",
      content: data.url
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "twitter:title",
      content: data.title
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "twitter:description",
      content: data.description
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "twitter:image",
      content: data.image
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "robots",
      content: "Index"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "manifest",
      href: "/manifest.json"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "apple-touch-icon",
      sizes: "120x120",
      href: "./favicon.png"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "./favicon.png"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "./favicon.png"
    }), /*#__PURE__*/jsx_runtime_.jsx("script", {
      async: true,
      src: "https://code.iconify.design/1/1.0.4/iconify.min.js"
    })]
  });
}

SEO.prototype = {
  data: external_prop_types_default().shape({
    title: (external_prop_types_default()).string.isRequired,
    description: (external_prop_types_default()).string,
    image: (external_prop_types_default()).string,
    url: (external_prop_types_default()).string,
    keywords: external_prop_types_default().arrayOf((external_prop_types_default()).string)
  }).isRequired
};
/* harmony default export */ const components_SEO = (SEO);
;// CONCATENATED MODULE: ./pages/index.js


const Navigation = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 271).then(__webpack_require__.bind(__webpack_require__, 271)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(271)],
    modules: ["index.js -> " + "../components/Navigation"]
  }
});
const Greetings = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(794), __webpack_require__.e(185)]).then(__webpack_require__.bind(__webpack_require__, 185)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(185)],
    modules: ["index.js -> " + "../containers/Greetings"]
  }
});
const Skills = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 688).then(__webpack_require__.bind(__webpack_require__, 688)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(688)],
    modules: ["index.js -> " + "../containers/Skills"]
  }
});
const Proficiency = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 716).then(__webpack_require__.bind(__webpack_require__, 716)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(716)],
    modules: ["index.js -> " + "../containers/Proficiency"]
  }
});
const Education = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 758).then(__webpack_require__.bind(__webpack_require__, 758)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(758)],
    modules: ["index.js -> " + "../containers/Education"]
  }
});
const Experience = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(675), __webpack_require__.e(974)]).then(__webpack_require__.bind(__webpack_require__, 974)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(974)],
    modules: ["index.js -> " + "../containers/Experience"]
  }
});
const Projects = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 829).then(__webpack_require__.bind(__webpack_require__, 829)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(829)],
    modules: ["index.js -> " + "../containers/Projects"]
  }
});
const Feedbacks = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 519).then(__webpack_require__.bind(__webpack_require__, 519)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(519)],
    modules: ["index.js -> " + "../containers/Feedbacks"]
  }
});
const GithubProfileCard = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(794), __webpack_require__.e(551)]).then(__webpack_require__.bind(__webpack_require__, 551)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(551)],
    modules: ["index.js -> " + "../components/GithubProfileCard"]
  }
});




function Home({
  githubProfileData
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_SEO, {
      data: {
        title: "Godbless Onoriode",
        description: "A passionate Full Stack Web Developer and Mobile App Developer.",
        image: "https://avatars.githubusercontent.com/u/21205258?v=4",
        url: "https://onosgb.herokuapp.com",
        keywords: ["Onosgb", "Onoriode Godbless", "Godbless Onoriode", "@onosgb25", "Onosgb", "Portfolio", "Onosgb Portfolio ", "Godbless Onoriode  Portfolio", "Onoriode Godbless Portfolio", "web developer", "full stack", "full stack web developer", "mobile app developer", "android developer", "Nestjs  framework", "Angular  framework", "nodejs ", "expressjs", "reactjs ", "redux"]
      }
    }), /*#__PURE__*/jsx_runtime_.jsx(Navigation, {}), /*#__PURE__*/jsx_runtime_.jsx(Greetings, {}), /*#__PURE__*/jsx_runtime_.jsx(Skills, {}), /*#__PURE__*/jsx_runtime_.jsx(Proficiency, {}), /*#__PURE__*/jsx_runtime_.jsx(Education, {}), /*#__PURE__*/jsx_runtime_.jsx(Experience, {}), /*#__PURE__*/jsx_runtime_.jsx(Feedbacks, {}), /*#__PURE__*/jsx_runtime_.jsx(Projects, {}), /*#__PURE__*/jsx_runtime_.jsx(GithubProfileCard, {
      prof: githubProfileData
    })]
  });
}
Home.prototype = {
  githubProfileData: (external_prop_types_default()).object.isRequired
};
async function getStaticProps(_) {
  const githubProfileData = await fetch(`https://api.github.com/users/${portfolio/* openSource.githubUserName */.qL.githubUserName}`).then(res => res.json());
  return {
    props: {
      githubProfileData
    }
  };
}

/***/ }),

/***/ 644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Bv": () => (/* binding */ SkillBars),
  "E5": () => (/* binding */ educationInfo),
  "b8": () => (/* binding */ experience),
  "KK": () => (/* binding */ feedbacks),
  "c0": () => (/* binding */ greetings),
  "qL": () => (/* binding */ openSource),
  "q": () => (/* binding */ projects),
  "LO": () => (/* binding */ skillsSection),
  "KT": () => (/* binding */ socialLinks)
});

// UNUSED EXPORTS: contact

;// CONCATENATED MODULE: external "react-easy-emoji"
const external_react_easy_emoji_namespaceObject = require("react-easy-emoji");
var external_react_easy_emoji_default = /*#__PURE__*/__webpack_require__.n(external_react_easy_emoji_namespaceObject);
;// CONCATENATED MODULE: ./portfolio.js

const greetings = {
  name: "Godbless Onoriode",
  title: "Hi all, I'm Godbless",
  description: "A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Angular / Nestjs / Ionic and some other cool libraries and frameworks and Cross Platform Mobile Apps With Angular.",
  resumeLink: "https://1drv.ms/b/s!AqTK0czETeAdg6Uk8JmfTjRxuYI0Dg"
};
const openSource = {
  githubUserName: "onosgb"
};
const contact = {};
const socialLinks = {
  facebook: "https://web.facebook.com/onosgb",
  instagram: "https://www.instagram.com/onosgb/",
  // twitter: "https://twitter.com/1hanzla100",
  github: "https://github.com/Onosgb",
  linkedin: "https://www.linkedin.com/in/godbless-onoriode-a33587127/"
};
const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [external_react_easy_emoji_default()("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"), external_react_easy_emoji_default()("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"), external_react_easy_emoji_default()("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")],
  softwareSkills: [{
    skillName: "html-5",
    fontAwesomeClassname: "vscode-icons:file-type-html"
  }, {
    skillName: "css3",
    fontAwesomeClassname: "vscode-icons:file-type-css"
  }, {
    skillName: "sass",
    fontAwesomeClassname: "logos:sass"
  }, {
    skillName: "JavaScript",
    fontAwesomeClassname: "logos:javascript"
  }, {
    skillName: "TypeScript",
    fontAwesomeClassname: "logos:typescript-icon"
  }, {
    skillName: "reactjs",
    fontAwesomeClassname: "vscode-icons:file-type-reactjs"
  }, {
    skillName: "angular",
    fontAwesomeClassname: "logos:angular-icon"
  }, {
    skillName: "nodejs",
    fontAwesomeClassname: "logos:nodejs-icon"
  }, {
    skillName: "npm",
    fontAwesomeClassname: "vscode-icons:file-type-npm"
  }, {
    skillName: "sql-database",
    fontAwesomeClassname: "vscode-icons:file-type-sql"
  }, {
    skillName: "mongoDB",
    fontAwesomeClassname: "vscode-icons:file-type-mongo"
  }, {
    skillName: "aws",
    fontAwesomeClassname: "logos:aws"
  }, {
    skillName: "firebase",
    fontAwesomeClassname: "logos:firebase"
  }, {
    skillName: "laravel",
    fontAwesomeClassname: "logos:laravel"
  }, {
    skillName: "php",
    fontAwesomeClassname: "logos:php"
  }, {
    skillName: "git",
    fontAwesomeClassname: "logos:git-icon"
  }, {
    skillName: "nestjs",
    fontAwesomeClassname: "logos:nestjs"
  }]
};
const SkillBars = [{
  Stack: "Frontend/Design",
  //Insert stack or technology you have experience in
  progressPercentage: "90" //Insert relative proficiency in percentage

}, {
  Stack: "Backend",
  progressPercentage: "70"
}, {
  Stack: "Programming",
  progressPercentage: "70"
}];
const educationInfo = [{
  schoolName: "Imo State Polytecnic",
  subHeader: "Higher National Diploma (HND) in Computer Science",
  duration: "November 2014 - August 2016",
  desc: "Participated in the research of Design and implementation of online social network." // descBullets: [
  // 	"Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
  // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  // ],

}, {
  schoolName: "Imo State Polytecnic",
  subHeader: "Odinary National Diploma (OND) in Computer Science",
  duration: "November 2010 - August 2012",
  desc: "Participated in the research of Network and Information Services." // descBullets: [
  // 	"Lorem ipsum dolor sit amet, consectetfgur adipiscing elit",
  // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  // ],

}];
const experience = [{
  role: "Software Engineer",
  company: "M-R International (MrSoft",
  companylogo: "/img/icons/common/google.svg",
  date: "March 2019 – Present",
  desc: "Dvelopment of commercial and none commercial applications",
  descBullets: ["Development of school portals", "Development of business Applications", "Development of shell portals"]
}, // {
// 	role: "Front-End Developer",
// 	company: "M-R International (MrSoft)",
// 	companylogo: "/img/icons/common/github.svg",
// 	date: "May 2017 – May 2018",
// 	desc: "Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
// },
{
  role: "Software Engineer Intern",
  company: "M-R International Nigeria Limited (MrSoft)",
  companylogo: "/img/icons/common/airbnbLogo.png",
  date: "November 2018 – March 2019",
  desc: "Dvelopment of commercial and none commercial applications",
  descBullets: ["Development of school portals", "Development of business Applications", "Development of shell portals"]
}];
const projects = [{
  name: "Crown Clothing",
  desc: "Site where you visit to buy Men and women wears, pay using your card",
  link: "https://crown-clothing-sales.herokuapp.com"
}, {
  name: "Monster Rolodex",
  desc: "Application that display the image of monsters based on their name",
  github: "https://github.com/Onosgb/monster-rolodex",
  link: "https://onosgb.github.io/monster-rolodex/"
}, {
  name: "Weather app",
  desc: "The applicaion is used to display the weather conditions in your evniroment",
  github: "https://github.com/Onosgb/weatherfinder" // link: "https://example.com",

}];
const feedbacks = [{
  name: "Joel Stanley",
  feedback: "We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u."
}, {
  name: "Daniel Ndubuisi",
  feedback: "the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job"
}];

/***/ }),

/***/ 548:
/***/ ((module) => {

module.exports = require("color-thief-react");

/***/ }),

/***/ 614:
/***/ ((module) => {

module.exports = require("headroom.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 307:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 102:
/***/ ((module) => {

module.exports = require("react-lottie");

/***/ }),

/***/ 356:
/***/ ((module) => {

module.exports = require("react-reveal");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 99:
/***/ ((module) => {

module.exports = require("reactstrap");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152], () => (__webpack_exec__(152)));
module.exports = __webpack_exports__;

})();