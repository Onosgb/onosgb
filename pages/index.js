import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
// const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
  import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
  return (
    <div>
      <SEO
        data={{
          title: "Godbless Onoriode",
          description:
            "A passionate Full Stack Web Developer and Mobile App Developer.",
          image: "https://avatars.githubusercontent.com/u/21205258?v=4",
          url: "https://onosgb.onrender.com",
          keywords: [
            "Onosgb",
            "Onoriode Godbless",
            "Godbless Onoriode",
            "@onosgb25",
            "Onosgb",
            "Portfolio",
            "Onosgb Portfolio ",
            "Godbless Onoriode  Portfolio",
            "Onoriode Godbless Portfolio",

            "web developer",
            "web development",
            "full stack",
            "full stack web developer",
            "mobile app developer",
            "android developer",
            "Nestjs  framework",
            "Angular  framework",
            "nodejs ",
            "expressjs",
            "reactjs ",
            "react ",
            "redux",
          ],
        }}
      />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      {/* <Feedbacks /> */}
      <Projects />
      <GithubProfileCard prof={githubProfileData} />
    </div>
  );
}

Home.prototype = {
  githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
  const githubProfileData = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}
