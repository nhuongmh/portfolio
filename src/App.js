import React from 'react'
import './App.css'
import Header from './Header/Header'
import BasicInfo from './BasicInfo/BasicInfo'
import Background from './Background/Background'
import bku from './img/bku.png'
import ved from './img/vietnam-esports-logo.jpg'
import vng from './img/vng.png'
import smartdatics from './img/smartdatics.png'

const App = () => {
  const headerData = {
    name: {first: 'Thi Ngoc Tram', last: 'Tran'},
    career: 'Software Engineer'
  }
  const basicData = {
    social: [{name: 'github', link: 'https://github.com/TramTran2496'},
      {name: 'linkedin', link: 'https://www.linkedin.com/in/tr%C3%A2m-tr%E1%BA%A7n-27a521112/'},
      {name: 'facebook', link: 'https://www.facebook.com/TramTran2496'},
      {name: 'instagram', link: 'https://www.instagram.com/hilary.eve'}],
    contact: [{name: 'mail', contact: 'ttntram2496@gmail.com'},
      {name: 'phone', contact: '+84704113755'}],
    information: [{title: 'Birthday', value: '02 Apr 1996'},
      {title: 'Gender', value: 'female'},
      {title: 'Experiences', value: '2 years'}],
    objective: 'Lorem ipsum dolor sit amet, morbi augue amet, gravida tellus neque non viverra, amet massa cras elit, faucibus et vitae voluptate, in enim nullam magna elit ut.',
    language: [{title: 'Vietnamese', value: 'native'},
      {title: 'English', value: 'fluent'}]
  }
  const background = [{
    title: 'EDUCATION',
    list: [{
      title: 'Ho Chi Minh University of Technology',
      subtitle: 'Computer Science',
      daterange: 'Sep 2014 - Jun 2018',
      description: ['Honor Program', 'GPA: 8.37/10'],
      logo: bku
    }]
  }, {
    title: 'WORK EXPERIENCE',
    list: [{
      title: 'Vietnam Esports',
      subtitle: 'Front-end Developer',
      daterange: 'Nov 2018 - present',
      description: ['Job description: Lorem ipsum dolor sit amet, morbi augue amet, gravida tellus neque non viverra, amet massa cras elit',
        'Use: Javascript, Html, Sass, React, NodeJS, Webpack'],
      logo: ved
    }, {
      title: 'VNG Corporation',
      subtitle: 'Front-end Developer',
      daterange: 'Aug 2017 - Oct 2018',
      description: ['Job description: Lorem ipsum dolor sit amet, morbi augue amet, gravida tellus neque non viverra, amet massa cras elit',
        'Use: Java, Javascript, Html, CSS, Angular JS'],
      logo: vng
    }, {
      title: 'Smartdatics',
      subtitle: 'Front-end Development Internship',
      daterange: 'Jun 2017 - Aug 2017',
      description: ['Job description: Lorem ipsum dolor sit amet, morbi augue amet, gravida tellus neque non viverra, amet massa cras elit',
        'Use: Typescript, React, Redux, Html, CSS'],
      logo: smartdatics
    }]
  }, {
    title: 'PROJECTS',
    list: [{
      title: 'Music Genre Recognition',
      subtitle: 'Thesis',
      daterange: 'Jan 2018 - Jun 2018',
      description: ['Description: Lorem ipsum dolor sit amet, morbi augue amet, gravida tellus neque non viverra, amet massa cras elit',
        'Use: Python'],
      logo: bku
    }, {
      title: 'Saola.me',
      subtitle: 'Smartdatics',
      daterange: 'Jun 2017 - Aug 2017',
      description: ['Job description: Lorem ipsum dolor sit amet, morbi augue amet, gravida tellus neque non viverra, amet massa cras elit',
        'Use: Typescript, React, Redux, Html, CSS'],
      logo: smartdatics
    }, {
      title: 'Zalo Official Account',
      subtitle: 'Zalo',
      daterange: 'Aug 2017 - Oct 2018',
      description: ['Job description: Lorem ipsum dolor sit amet, morbi augue amet, gravida tellus neque non viverra, amet massa cras elit',
        'Use: Java, Javascript, Html, CSS, Angular JS'],
      logo: vng
    }]
  }]

  return (
    <>
      <Header data={headerData}/>
      <div className='body-info'>
        <BasicInfo data={basicData}/>
        <Background data={background}/>
      </div>
    </>
  )
}

export default App
