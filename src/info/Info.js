import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
  firstName: "Irakli",
  lastName: "Kogua",
  initials: "Mob Kogo",
  position: "a Fron-end Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "☕",
      text: "fueled by coffee"
    },
    {
      emoji: "🌎",
      text: "based in the Georgia "
    },
    {
      emoji: "💼",
      text: "Systems Engineer at Freelacer"
    },
    {
      emoji: "📧",
      text: "Iraklikogua!@gmail.com"
    }
  ],
  socials: [
    {
      link: "https://facebook.com",
      icon: "fa fa-facebook",
      label: "facebook"
    },
    {
      link: "https://instagram.com",
      icon: "fa fa-instagram",
      label: "instagram"
    },
    {
      link: "https://github.com/MobKogoo",
      icon: "fa fa-github",
      label: "github"
    },
    {
      link: "www.linkedin.com/in/irakli-kogua",
      icon: "fa fa-linkedin",
      label: "linkedin"
    },
    {
      link: "https://twitter.com",
      icon: "fa fa-twitter",
      label: "twitter"
    }
  ],
  bio:
    "Hello! I'm Ikrakli Kogua. I'm a systems engineer for Freelancer. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "git",
      "github",
      "bootstrap",
      "html5",
      "css3",
      "figma"
    ],
    exposedTo: ["nodejs", "ReactJS", "Front-End"]
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖"
    },
    {
      label: "theater",
      emoji: "🎭"
    },
    {
      label: "movies",
      emoji: "🎥"
    },
    {
      label: "OFFroading",
      emoji: "🌶"
    }
  ],
  portfolio: [
    {
      title: "Project 1",
      live: "https://app.netlify.com/teams/mobkogoo/overview",
      source: "https://github.com/MobKogoo",
      image: mock1
    },
    {
      title: "Project 2",
      live: "https://app.netlify.com/teams/mobkogoo/overview",
      source: "https://github.com/MobKogoo",
      image: mock2
    },
    {
      title: "Project 3",
      live: "https://app.netlify.com/teams/mobkogoo/overview",
      source: "https://github.com/MobKogoo",
      image: mock3
    },
    {
      title: "Project 4",
      live: "https://app.netlify.com/teams/mobkogoo/overview",
      source: "https://github.com/MobKogoo",
      image: mock4
    },
    {
      title: "Project 5",
      live: "https://app.netlify.com/teams/mobkogoo/overview",
      source: "https://github.com/MobKogoo",
      image: mock5
    }
  ]
};
