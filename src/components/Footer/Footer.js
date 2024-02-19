import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>International Our School</h4>
            <h1 className="list-unstyled">
              <li>342-420-6969</li>
              <li>chenna-rai Colony,tirupati</li>
              <li>Email:School@Our132@gmail.com</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Quick Links</h4>
            <ui className="list-unstyled">
              <li>why our school</li>
              <li>vision and mission</li>
              <li>From Director's </li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Contact</h4>
            <ui className="list-unstyled">
              <li>Telephone:+120211-55</li>
              <li>location:
R.C. Road, Chiguruwada
North, Tirupati</li>
              <li>
Office 1 : +91 9581978737

</li>
<li> 2: +91 9908729577</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} International our school| All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;