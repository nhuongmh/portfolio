import React from "react"
import "./Header.scss"
import {Icon} from "antd"

const Header = () => {
  return (
    <div className="header">
      <div className="cover">
        <div className="cover-overlay"/>
        <div className="avatar"/>
        <div className="media-social">
          <a href="https://github.com/TramTran2496"
             target="_blank"><Icon type="github" theme="filled"/></a>
          <a href="https://www.linkedin.com/in/tr%C3%A2m-tr%E1%BA%A7n-27a521112/"
             target="_blank"><Icon type="linkedin" theme="filled"/></a>
          <a href="https://www.facebook.com/TramTran2496"
             target="_blank"><Icon type="facebook" theme="filled"/></a>
          <a href="https://www.instagram.com/hilary.eve"
             target="_blank"><Icon type="instagram" theme="filled"/></a>
        </div>
        <div className="contact">
          <div><Icon type="mail"/>ttntram2496@gmail.com</div>
          <div><Icon type="phone"/>+84704113755</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
