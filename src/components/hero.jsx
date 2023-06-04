import * as React from "react";
import styles from "./hero.css"
console.log(styles)
export default class Hero extends React.Component {
  render() {
    let headline = this.props.headline;
    let subheading = this.props.subheading;
    let button = this.props.button;
    let action = this.props.action;
    let heroImage = this.props.heroImage;
    let type = this.props.type;
    console.log(headline);
    const posts = [];
    let heightPercent = 100;
    switch(type) {
      case "full":
        heightPercent = 100;
      case "2/3":
        heightPercent = 65;
      case "1/2":
        heightPercent = 50;
    }
    
    let btn = <button id="hero-button"><span className="hero-paragraph">{button}</span></button>
    
    if(action !== "") {
      btn = <button id="hero-button"><span className="hero-paragraph">{button}</span></button>
    }else if(action === "") {
      btn = ""
    }
      
    const heroStyle = {
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url("+heroImage+")",
      height: "calc("+heightPercent+"vh - 83px)"
    }
    return (
      <>
        <div className="hero-image" style={heroStyle}>
          <div className="hero-text">
            <h1 className="heroTitle">{headline}</h1>
            <p id="hero-paragraph">{subheading}</p>
            {btn}
          </div>
        </div>
      </>
    );
  }
}
