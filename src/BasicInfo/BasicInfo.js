import React from "react";
import "./BasicInfo.scss";
import { Divider, List } from "antd";
import PropTypes from "prop-types";
// import cv from "./data/beergameCV.pdf";
import Skills from "./Skills/Skills";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import { FilePdfOutlined } from "@ant-design/icons";

const BasicInfo = ({ data, skills }) => {
  const { social, contact, information, objective, language } = data;

  return (
    <div className="basic-info">
      <div className="media-social">
        {social.map((item, index) => (
          <AnimationOnScroll
            animateIn="rotateInDownLeft"
            key={index}
            animateOnce
            duration={0.5}
            offset={0}
            delay={index * 250}
            style={{ width: "fit-content" }}
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          </AnimationOnScroll>
        ))}
      </div>
      <div className="contact">
        {contact.map((item, index) => (
          <AnimationOnScroll
            animateIn="fadeIn"
            key={index}
            delay={index * 250}
            animateOnce
            offset={0}
          >
            <a href={`${item.type}${item.contact}`}>
              {item.icon}
              {item.contact}
            </a>
          </AnimationOnScroll>
        ))}
        <AnimationOnScroll animateIn="animate__bounceIn" delay={500} animateOnce offset={0}>
          <a href='#'>
            <FilePdfOutlined />
            Résumé
          </a>
        </AnimationOnScroll>
      </div>
      <WhiteSection title="BASIC INFORMATION" data={information} />
      <WhiteSection title="LANGUAGE" data={language} />
      <Skills data={skills} />
    </div>
  );
};

BasicInfo.propTypes = {
  data: PropTypes.object.isRequired,
  skills: PropTypes.array.isRequired
};

export default BasicInfo;

const WhiteSection = ({ title, data }) => (
  <div className="info">
    <Divider>{title}</Divider>
    <AnimationOnScroll animateIn="zoomInUp" animateOnce>
      {!Array.isArray(data) ? (
        <div className="info-text">{data}</div>
      ) : (
        <List
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item key={index} className="info-item">
              {item.title}
              <div className="info-italic">{item.value}</div>
            </List.Item>
          )}
        />
      )}
    </AnimationOnScroll>
  </div>
);
