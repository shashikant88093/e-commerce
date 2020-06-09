import React from "react";
import { withRouter } from "react-router-dom";

//scss
import "./menu-item.styles.scss";

const MenuItem = ({  title, imageUrl, size }) => (
  <div 
    className={`${size} menu-item`}
    // onClink={()=> history.pushState(`${match.url}${linkUrl}`)}
  >
    <div 
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
