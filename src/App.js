import React from "react";
import "./App.css";
import Header from "./Header/Header";
import BasicInfo from "./BasicInfo/BasicInfo";
import Background from "./Background/Background";
import bku from "./img/bku.png";
import ampere from "./img/ampere.png";
import ampere_char from "./img/ampere-char.png";
import arrive from "./img/arrive.webp";
import {
  GithubFilled,
  LinkedinFilled,
  TwitterSquareFilled,
  MailOutlined,
  PhoneOutlined,
  DeploymentUnitOutlined,
} from "@ant-design/icons";

const App = () => {
  const headerData = {
    name: { first: "Nhuong", last: "M. Hoang" },
    career: "Software Engineer",
  };
  const basicData = {
    social: [
      { icon: <GithubFilled />, link: "https://github.com/nhuongmh" },
      {
        icon: <LinkedinFilled />,
        link: "https://www.linkedin.com/in/nhuongmh/",
      },
      {
        icon: <TwitterSquareFilled />,
        link: "https://twitter.com/nhuongmh",
      },
    ],
    contact: [
      {
        icon: <MailOutlined />,
        contact: "nhuongmh@gmail.com",
        type: "mailto:",
      },
      { icon: <PhoneOutlined />, contact: "+84981683925", type: "tel:" },
      {
        icon: <DeploymentUnitOutlined />,
        contact: "minhnhuong.com",
        type: "https://",
      },
    ],
    information: [
      { title: "Birthday", value: "06 Jun 1996" },
      { title: "Location", value: "D7, HCMC" },
      { title: "Experiences", value: "4 years" },
    ],
    objective:
      "To obtain a position that will enable me to utilize my problem solving skills and attention to detail to further develop my abilities in the field of computer science.",
    language: [{ title: "English", value: "good" }],
  };
  const background = [
    {
      title: "EDUCATION",
      list: [
        {
          title: "Ho Chi Minh University of Technology",
          subtitle: "Electrical & Electronics Engineering",
          daterange: "Sep 2014 - Jun 2018",
          description: ["GPA: 7.5/10"],
          logo: bku,
        },
      ],
    },
    {
      title: "WORK EXPERIENCE",
      list: [
        {
          title: "Ampere Computing VN",
          subtitle: "Platform Validation Engineer",
          daterange: "Nov 2018 - Present",
          description: [
            "Here, I build support tools for Shopee and some website for their partners. As the position is front-end developer, I design UI, UX to develop the features that users require.",
            "I have contributed significant projects to Shopee business in Vietnam.",
            "Use: Javascript, Html, Sass, React, NodeJS, Webpack",
          ],
          logo: ampere_char,
        },
        {
          title: "Arrive Technologies",
          subtitle: "Logic Design Engineer",
          daterange: "Jun 2018 - Nov 2018",
          description: [
            "At Arrive, I joined Design and implement logic circuit target in telecommunication application.",
          ],
          logo: arrive,
        },
      ],
    },
    {
      title: "PROJECTS",
      list: [
        {
          title: "Zalo Official Account",
          subtitle: "Zalo",
          daterange: "Aug 2017 - Oct 2018",
          description: [
            "Zalo Official Account is a solution for reaching Zalo huge amount of users. With ZOA, user can turn Zalo account into a news page, a shop or customer service.",
            "My team develops three seperate child projects of ZOA. I work mostly in front-end but sometimes I help with back-end if necessary.",
            "Use: Java, Javascript, Html, CSS, Angular JS",
          ],
          link: "https://oa.zalo.me/home",
        },
        {
          title: "Saola.me",
          subtitle: "Smartdatics",
          daterange: "Jun 2017 - Aug 2017",
          description: [
            "Saola.me is a project about studying abroad. This website connect people having the same concerns, give them a place for asking and sharing experience to others.",
            "I developed a few pages on this website.",
            "Use: Typescript, React, Redux, Html, CSS",
          ],
        },
        {
          title: "Music Genre Recognition",
          subtitle: "Thesis",
          daterange: "Oct 2017 - Jun 2018",
          description: [
            "My thesis is about how to give the correct music genre with a piece of music input.",
            "I and one friend have researched artificial neural network, convolutional neural network, spectrogram of sound, etc. to complete this project.",
            "We decided to use two models of ANN and CNN for deep learning in this field and when we combine two models, the accuracy is quite appreciable at 83 percent.",
          ],
        },
      ],
    },
    {
      title: "CERTIFICATIONS",
      list: [
        {
          title: "IELTS Certificate with overall band 6.5",
          subtitle: "issued by IDP",
          daterange: "Nov 2019",
        },
        {
          title: "TOEIC Certificate with score 690",
          subtitle: "issued by ETS",
          daterange: "Jan 2016",
        },
      ],
    },
    {
      title: "INTERESTS",
      list: [
        {
          description: [
            "Music is my first interest. I like many kinds of music but I usually listen to Pop, Slow, Latin and Boléro. Besides, I play keyboards as a hobby.",
            "I love family movies, especially some animated films made by Disney or Dreamworks.",
            "I read books an hour a day. I have many books in categories such as autobiography, novel, fiction, science, etc.",
            "Traveling is one of my favourite activities. It gives me chances to experience our fantastic world.",
            "Playing sports has never been my strength. Though, I usually go swimming when I have free time.",
          ],
        },
      ],
    },
  ];
  const skills = [
    {
      title: "Programming Language",
      value: ["Java", "C/C++", "Golang", "Python"],
    },
    {
      title: "Framework",
      value: ["Spring Boot", "VueJS"],
    },
    {
      title: "Database",
      value: ["MySQL", "PostgresQL"],
    },
    {
      title: "Other",
      value: [
        "Git",
        "Docker",
        "Linux Kernel",
        "Embeded Programming",
        "Cloud Computing",
        "High Perfomance Computing",
      ],
    },
  ];

  return (
    <>
      <Header data={headerData} />
      <div className="body-info">
        <BasicInfo data={basicData} skills={skills} />
        <Background data={background} />
      </div>
    </>
  );
};

export default App;
