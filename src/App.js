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
      { title: "Birthday", value: "Jun 1996" },
      { title: "Location", value: "D7, HCMC" },
      { title: "Experiences", value: "4.5 years" },
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
          subtitle: "BE, Electrical & Electronics Engineering",
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
          subtitle: "Senior Platform Validation Engineer",
          daterange: "Nov 2018 - Present",
          description: [
            "Develop automation test tool (GUI/Web) for server system.",
            "Develop virtual board system for tools coverage testing",
            "Develop testing scripts, framework for ARM64 server chip on Linux/Windows environment",
            "Lead small team with 4 people",
            "Tech stack: Java Spring Boot, Java Swing, Golang, Bash, PowerShell, Python, VueJS",
          ],
          logo: ampere_char,
        },
        {
          title: "Arrive Technologies",
          subtitle: "Logic Design Engineer",
          daterange: "Jun 2018 - Nov 2018",
          description: [
            "Joined Design and implement logic circuit target in telecommunication application (SONET/SDH).",
            "Implement firmware for telecommunication chip on FPGA-based embeded processor",
            "Technologies used: Verilog, C/C++"
          ],
          logo: arrive,
        },
      ],
    },
    {
      title: "PROJECTS",
      list: [
        {
          title: "Platform Validation Tool",
          subtitle: "Ampere",
          daterange: "Aug 2021 - Present",
          description: [
            "Platform Validation Tools is an application to do various type of testing on server boards that using Ampere chip, it has desktop GUI and Web interface",
            "I reponsible for developing testing framework, running flow, web backend and various other features.",
            "Tech: Java Spring Boot, Java Swing, VueJS, Linux, Hardware, JavaScript, Websocket, Bash/Powershell script, Python",
          ],
        },
        {
          title: "Virtual Board System",
          subtitle: "Ampere",
          daterange: "Feb 2023 - Present",
          description: [
            "Virtual Board System is a simple web-app that serve multiple virtual boards, it can mimic behaviour of a real system consoles based on user configuration. It used to do coverage testing for internal tool.",
            "I help build the app from framework to frontend user interface.",
            "Tech: Golang with Gin, VueJS with Vuetify",
          ],
        },
        // {
        //   title: "Candy with Bros",
        //   subtitle: "Personal",
        //   daterange: "Jun 2020 - Aug 2021",
        //   description: [
        //     "Nirvanas is GNU/Linux distro that based on OpenSUSE that build for developers. It come with many tools/applications for many type of development purpose while remove all unnessary apps",
        //     "This can be used for online dating, people can chat and play game on the same time, ... I configured and built the Nirvanas",
        //     "Tech stack: GNU/Linux",
        //   ],
        //   repository: "nirvanas.nhuongmh.github.io",
        // },
        // {
        //   title: "Dev Life Assistant",
        //   subtitle: "Personal",
        //   daterange: "Jun 2020 - Aug 2021",
        //   description: [
        //     "Dev Life Assistant is a lighweight webapp to manage work life balance of developer on daily basis. It includes some todo list, notification, periodic remider, save data note, ..",
        //     "I configured and built the Nirvanas",
        //     "Tech stack: GNU/Linux",
        //   ],
        //   repository: "nirvanas.nhuongmh.github.io",
        // },
        // {
        //   title: "goMosaic",
        //   subtitle: "Personal",
        //   daterange: "Jun 2020 - Aug 2021",
        //   description: [
        //     "goMosaic is small web app that generate art picture based on mathematic function",
        //     "I configured and built the Nirvanas",
        //     "Tech stack: GNU/Linux",
        //   ],
        //   repository: "nirvanas.nhuongmh.github.io",
        // },
        {
          title: "Facial Expression Recognition",
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
          title: "TOEIC Certificate with score 780",
          subtitle: "issued by ETS",
          daterange: "Jun 2018",
        },
      ],
    },
    {
      title: "INTERESTS",
      list: [
        {
          description: [
            "I read books an hour a day. I have many books in categories such as science, novel, fiction, philosophy, etc.",
            "Sometimes I usually do outdoor photography with my Sony A600.",
            "As electronics engineering is my major in university, I still keep fascinating about it, I'm learning and building some amateur radio stuff in free time",
            "Writing is my favorite thing to do when I have something in my mind",
            "I usually go running and swimming.",
          ],
        },
      ],
    },
  ];
  const skills = [
    {
      title: "Programming Language",
      value: ["Java", "Golang", "C/C++", "Python"],
    },
    {
      title: "Framework",
      value: ["Spring Boot", "Gin", "VueJS"],
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
        "Computer System",
        "Cloud Computing",
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
