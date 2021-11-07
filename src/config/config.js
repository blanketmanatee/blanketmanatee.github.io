// Navigation Bar SECTION
const navBar = {
  show: true
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#67074e, #5a175d, #074e67, #05878a, #dd9933, #ecf0f1",
  firstName: "Ashley",
  middleName: "",
  lastName: "Price",
  message: " Full-stack Web Developer ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/blanketmanatee"
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/ashleybordenprice/"
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/blanketmanatee"
    }
  ]
};

// ABOUT SECTION
const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../assets/img/head.jpg"),
  imageSize: 400,
  message:
    "Osiyo (Hello), my name is Ashley. I am a Full Stack Web Development student at Holberton Tulsa, graduating in Spring of 2022. I love front end development, am passionate about making technology accessible to all, and am looking for a great team to join where I can continue to learn while making a difference in people's lives.",
  resume: require("../assets/img/Ashley_Price_Resume.pdf")
};

// PROJECTS SECTION
const works = {
  heading: "Recent Works",
  works: [
    { title: "Airbnb Clone", img: require("../assets/img/works/1.jpg") },
    { title: "Holberton Smiling School", img: require("../assets/img/works/2.png") },
    { title: "Headphones", img: require("../assets/img/works/3.png") },
    { title: "Holberton Smiling School 2.0", img: require("../assets/img/works/2.png") },
    { title: "Zebra (Work in Progress)", img: require("../assets/img/works/5.jpg") },
    { title: "The Hunt for Broken Arrow", img: require("../assets/img/works/6.png") },
  ]
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:
    "I am a student member of AISES, and have served on the Title VI Indian Education Parent Committee for Tulsa Public Schools. I believe it is important to be active in your community, and strive to serve those most in need through direct mutual aid efforts and activism.",
  images: [
    {
      img: require("../assets/img/AISES-Icon.jpeg"),
      label: "",
      paragraph: ""
    },
    {
      img: require("../assets/img/cnseal.png"),
      label: "",
      paragraph: ""
    }
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 100 },
    { name: "Bootstrap", value: 100 },
    { name: "Javascript", value: 100 },
    { name: "C", value: 100 },
    { name: "HTML/CSS", value: 100 },
    { name: "React", value: 100 },
    { name: "SEO", value: 100 },
    { name: "PHP", value: 100 }
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 100 },
    { name: "Collaboration", value: 100 },
    { name: "Self Starter", value: 100 },
    { name: "Adaptability", value: 100 },
    { name: "Problem Solving", value: 100 },
    { name: "Empathy", value: 100 },
    { name: "Organization", value: 100 },
    { name: "Creativity", value: 100 }
  ]
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: "Software Engineer", // Here Add Company Name
      companylogo: require("../assets/img/head.jpg"),
      date: "June 2018 – Present"
    },
    {
      role: "Front-End Developer",
      companylogo: require("../assets/img/head.jpg"),
      date: "May 2017 – May 2018"
    }
  ]
};

export { navBar, mainBody, about, skills, leadership, works, experiences };
