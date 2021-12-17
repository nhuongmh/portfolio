import React from "react";
import "./App.css";
import Header from "./Header/Header";
import BasicInfo from "./BasicInfo/BasicInfo";
import Background from "./Background/Background";
import unimelb from "./img/unimelb.png";
import bku from "./img/bku.png";
import ved from "./img/vietnam-esports-logo.jpg";
import vng from "./img/vng.png";
import smartdatics from "./img/smartdatics.png";
import {
  GithubFilled,
  LinkedinFilled,
  FacebookFilled,
  InstagramFilled,
  MailOutlined,
  PhoneOutlined
} from "@ant-design/icons";

const App = () => {
  const headerData = {
    name: { first: "Tram", last: "Tran Thi Ngoc" },
    career: "Student"
  };
  const basicData = {
    social: [
      { icon: <GithubFilled />, link: "https://github.com/TramTran2496" },
      {
        icon: <LinkedinFilled />,
        link: "https://www.linkedin.com/in/tr%C3%A2m-tr%E1%BA%A7n-27a521112/"
      },
      {
        icon: <FacebookFilled />,
        link: "https://www.facebook.com/tram.tranthingoc.2496"
      },
      {
        icon: <InstagramFilled />,
        link: "https://www.instagram.com/hilary.eve"
      }
    ],
    contact: [
      { icon: <MailOutlined />, contact: "ttntram2496@gmail.com", type: "mailto:" },
      { icon: <PhoneOutlined />, contact: "+84704113755", type: "tel:" }
    ],
    information: [
      { title: "Birthday", value: "02 Apr 1996" },
      { title: "Gender", value: "female" },
      { title: "Experiences", value: "3 years" }
    ],
    objective:
      "To obtain a position that will enable me to utilize my problem solving skills and attention to detail to further develop my abilities in the field of computer science.",
    language: [
      { title: "Vietnamese", value: "native" },
      { title: "English", value: "fluent" }
    ]
  };
  const background = [
    {
      title: "EDUCATION",
      list: [
        {
          title: "The University of Melbourne",
          subtitle: "Master of Computer Science",
          daterange: "March 2021 - present",
          description: [],
          logo: unimelb
        },
        {
          title: "Ho Chi Minh University of Technology",
          subtitle: "Computer Science",
          daterange: "Sep 2014 - Jun 2018",
          description: ["Honor Program", "GPA: 8.37/10"],
          logo: bku
        }
      ]
    },
    {
      title: "WORK EXPERIENCE",
      list: [
        {
          title: "Vietnam Esports",
          subtitle: "Front-end Developer",
          daterange: "Nov 2018 - February 2021",
          description: [
            "Here, I build support tools for Shopee and some website for their partners. As the position is front-end developer, I design UI, UX to develop the features that users require.",
            "I have contributed significant projects to Shopee business in Vietnam.",
            "Use: Javascript, Html, Sass, React, NodeJS, Webpack"
          ],
          logo: ved
        },
        {
          title: "VNG Corporation",
          subtitle: "Front-end Developer",
          daterange: "Aug 2017 - Oct 2018",
          description: [
            "At Zalo Team, I joined in project Zalo Official Account. I work mostly in front-end part and a little in back-end. I learned about server-side rendering webpage here.",
            "Use: Java, Javascript, Html, CSS, Angular JS"
          ],
          logo: vng
        },
        {
          title: "Smartdatics",
          subtitle: "Front-end Development Internship",
          daterange: "Jun 2017 - Aug 2017",
          description: [
            "At Smartdatics, I worked in many projects about studying abroad, bitcoin, ecommerce, etc. because Smardatics is an outsourcing company. My internship happened here and I have learnt about React basics also here.",
            "Use: Typescript, React, Redux, Html, CSS"
          ],
          logo: smartdatics
        }
      ]
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
            "Use: Java, Javascript, Html, CSS, Angular JS"
          ],
          link: "https://oa.zalo.me/home"
        },
        {
          title: "Saola.me",
          subtitle: "Smartdatics",
          daterange: "Jun 2017 - Aug 2017",
          description: [
            "Saola.me is a project about studying abroad. This website connect people having the same concerns, give them a place for asking and sharing experience to others.",
            "I developed a few pages on this website.",
            "Use: Typescript, React, Redux, Html, CSS"
          ]
        },
        {
          title: "Music Genre Recognition",
          subtitle: "Thesis",
          daterange: "Oct 2017 - Jun 2018",
          description: [
            "My thesis is about how to give the correct music genre with a piece of music input.",
            "I and one friend have researched artificial neural network, convolutional neural network, spectrogram of sound, etc. to complete this project.",
            "We decided to use two models of ANN and CNN for deep learning in this field and when we combine two models, the accuracy is quite appreciable at 83 percent."
          ]
        },
        {
          title: "BKOOL",
          subtitle: "Assignment",
          daterange: "Oct 2016 - Dec 2016",
          description: [
            "BKOOL is a programming language that we were assigned to write it a compiler. BKOOL is a very simple language having some basic operations.",
            "This is a personal assignment of a subject named Principles of Programming Language. I have learned about how programming language works, what exactly is below the things like C or Pascal.",
            "Use: Scala"
          ]
        }
      ]
    },
    {
      title: "ACTIVITIES",
      list: [
        {
          title: "CSE Job Fair 2017",
          subtitle: "Volunteers",
          daterange: "Nov 2017",
          description: [
            "My job here is helping the companies prepare booth and brochures as well as guiding visitors."
          ]
        },
        {
          title: "Tiếp sức mùa thi 2016",
          subtitle: "Volunteers",
          daterange: "Jun 2016",
          description: [
            "Volunteer like me instructed examinees registering profiles and designed media publications."
          ]
        },
        {
          title: "CSE Job Fair 2015",
          subtitle: "Volunteers",
          daterange: "Dec 2015",
          description: [
            "My job here is helping the companies prepare booth and brochures as well as guiding visitors."
          ]
        },
        {
          title: "Tư vấn tuyển sinh Về trường 2015",
          subtitle: "Volunteers",
          daterange: "Jan 2015",
          description: [
            "I came back to high school to introduce students there about my university."
          ]
        },
        {
          title: "International Friendship Day 2014",
          subtitle: "Volunteers",
          daterange: "Dec 2014",
          description: [
            "I supported Vietnamese abroad alumni in organizing the festival and guided visitors."
          ]
        }
      ]
    },
    {
      title: "HONORS & AWARDS",
      list: [
        {
          title: "Vingroup Science and Technology Scholarship Program for Overseas Study",
          daterange: "2021 - 2022",
          link: "https://scholarships.vinuni.edu.vn/"
        },
        {
          title: "Microsoft Youthspark Scholarship",
          daterange: "2016 - 2018",
          link: "https://en.hocbongnusinh.com/microsoft-youthspark-scholarship-for-women-in-technologies-2018-2019.html"
        }
      ]
    },
    {
      title: "CERTIFICATIONS",
      list: [
        {
          title: "IELTS Certificate with overall band 6.5",
          subtitle: "issued by IDP",
          daterange: "Nov 2019"
        },
        {
          title: "TOEIC Certificate with score 690",
          subtitle: "issued by ETS",
          daterange: "Jan 2016"
        },
        {
          title: "Agile Software Development with Scrum",
          subtitle: "issued by Axon Active Vietnam",
          daterange: "Nov 2017"
        }
      ]
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
            "Playing sports has never been my strength. Though, I usually go swimming when I have free time."
          ]
        }
      ]
    }
  ];
  const skills = [
    { title: "C/C++", percent: 3.5 },
    { title: "C#", percent: 3 },
    { title: "Html/CSS", percent: 4 },
    { title: "Javascript", percent: 4.5 },
    { title: "Python", percent: 3 },
    { title: "Java", percent: 2.5 },
    { title: "Haskell", percent: 2 },
    { title: "Prolog", percent: 2 },
    { title: "SQL", percent: 2 },
    { title: "Self-learning", percent: 4 },
    { title: "Teamwork", percent: 4 }
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
