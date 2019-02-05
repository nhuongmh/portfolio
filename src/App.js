import React from 'react'
import Header from './Header/Header'
import BasicInfo from './BasicInfo/BasicInfo'

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

  return (
    <>
      <Header data={headerData}/>
      <BasicInfo data={basicData}/>
    </>
  )
}

export default App
