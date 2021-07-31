import React from "react";
// import foot from "../../assets/footer9.png";
import "./NotFound.css";
import { Helmet } from "react-helmet";
function NotFound() {
  let baseURL = window.location.href;
  let URLArr = baseURL.split("/");
  let URL = `${URLArr[0]}//${URLArr[2]}`;
  return (
    <div className="not-found">
      <Helmet>
        <title>404 Page | Kiran Rathod</title>
      </Helmet>
      <div className="not-found-header-div">
        <h1 className="not-found-header">This Page Doesn't exist</h1>
      </div>
      <div className="not-found-description-div">
        <p className="not-found-description">
          Not to worry! Either you can head back to the <b>HomePage</b> or sit
          here and <b>stare at Mr.&nbsp;Bean</b>
        </p>
        <br />
        <a href={URL}>Take me back to HomePage</a>
      </div>
      <div className="not-found-gif">
        <img
          src="https://media.giphy.com/media/KXlcrakfMPwwU/giphy.gif"
          alt="Mr Bean"
        ></img>
      </div>
    </div>
  );
}
export default NotFound;
