import React from "react";
import foot from "../../assets/footer9.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      {/* This footer is inspired from Akshaysaini.in(Akshay Saini's portfolio).
        All credit to akshay saini for this footer. */}
      <p>
        <a className="link-github" href="https://github.com/kirantrathod">
          <i className="fa fa-github github"></i>
        </a>
        <br />
        <small>
          Made with <i className="red-heart fa fa-heart pulse"></i> by Kiran{" "}
        </small>
        <br />
        No <i className="fa fa-copyright"></i> copyright issues.
        {/* <br /> */}
        {/* <small>Feel free to copy. If you need any help, ping me !</small> */}
      </p>
      <img className="footer-image" src={foot} alt="Footer" />
    </div>
  );
}
export default Footer;
