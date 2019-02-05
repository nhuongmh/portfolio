import React from 'react'
import './Background.scss'
import {Card, List, Avatar} from 'antd'
import PropTypes from 'prop-types'
import ReactGithubCalendar from '@axetroy/react-github-calendar'

const Background = ({data}) => {
  return (
    <div className='background'>
      {window.innerWidth > 768 && <ReactGithubCalendar name='TramTran2496'/>}
      {data.map((item, index) =>
        <Card title={item.title} key={index} bordered={false}>
          <List itemLayout='horizontal'
                dataSource={item.list}
                className='card-list'
                renderItem={content => (
                  <List.Item style={{display: 'block'}}>
                    <List.Item.Meta avatar={<Avatar src={content.logo} shape='square' size={64}/>}
                                    title={content.title}
                                    description={content.daterange}/>
                    <i>{content.subtitle}</i>
                    <ul>{content.description.map((desc, idx) => <li key={idx}>{desc}</li>)}</ul>
                  </List.Item>
                )}/>
        </Card>)}
    </div>)
}

Background.propTypes = {
  data: PropTypes.array.isRequired
}

export default Background