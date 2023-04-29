import React from "react";
import { Divider, List } from "antd";
import PropTypes from "prop-types";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const Skills = ({ data }) => {
  return (
    <div className="info">
      <Divider>SKILLS</Divider>
        <AnimationOnScroll animateIn="jackInTheBox" animateOnce offset={0}>
        {!Array.isArray(data) ? (
        <div className="info-text">{data}</div>
      ) : (
        <List
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item key={index} className="info-item">
              {item.title}
              <div className="info-italic">{item.value.join(", ")}</div>
            </List.Item>
          )}
        />
      )}
      </AnimationOnScroll>
    </div>
  );
};

Skills.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Skills;
