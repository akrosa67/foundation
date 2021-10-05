import React from "react";
import classes from "../css/FoundationStyles.module.css";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
  FaRegCopyright,
} from "react-icons/fa";
import "../css/footer.css";

function Footer() {
  return (
    <footer>
      <section className="ft-main">
        <div className="ft-main-item">
          <h2 className="ft-title">About</h2>
          <ul>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Portfolio</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Customers</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">Projects</h2>
          <ul>
            <li>
              <a href="/">Docs</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">eBooks</a>
            </li>
            <li>
              <a href="/">Webinars</a>
            </li>
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">Contact</h2>
          <p>
            91+ 9940291408
            <br />
            Lead integrated business Pvt.Ltd.
            <br />
            No.20,Appar st,Kamakodi nagar,
            <br />
            Valasaravakkam, Chenevi-87
            <br />
          </p>
    
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">Stay Updated</h2>
          <p>Subscribe to our newsletter to get our latest news.</p>
          <form>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
            />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </section>

      <section className="ft-social">
        <ul className="ft-social-list">
          <li>
            <a href="/">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
      </section>

      <section className="ft-legal">
        <ul className="ft-legal-list">
          <li>
            Terms &amp; Conditions
          </li>
          <li>
            Privacy Policy
          </li>
          <li>&copy; 2021 Copyright Lead Foundations</li>
        </ul>
      </section>
    </footer>

    // <footer className={classes.footer}>
    //   <div>
    //     <ul className={classes.footer_ul_list}>
    //       <li className={classes.foot_list_a}>
    //         <div className={classes.footer_item}>
    //           <h4 className={classes.footer_item_a}>
    //             Projects
    //           </h4>
    //         </div>
    //         <div>
    //           <ul className={classes.footer_list}>
    //             <li className={classes.footer_list_items}>
    //               <a className={classes.list_sub_items}href="/">projec1</a>
    //             </li>
    //             <li className={classes.footer_list_items}>
    //               <a className={classes.list_sub_items}href="/">project red</a>
    //             </li>
    //             <li className={classes.footer_list_items}>
    //               <a className={classes.list_sub_items}href="/">Project sky</a>
    //             </li>
    //             <li className={classes.footer_list_items}>
    //               <a className={classes.list_sub_items}href="/">Divine</a>
    //             </li>
    //           </ul>
    //         </div>
    //       </li>
    //       <li className={classes.foot_list_a}>
    //         <div className={classes.footer_item}>
    //           <h4 className={classes.footer_item_a}>
    //             About
    //           </h4>
    //         </div>
    //         <div>
    //           <ul className={classes.footer_list}>
    //             <li className={classes.footer_list_items}>
    //               <a className={classes.list_sub_items}href="/">History</a>
    //             </li>
    //             <li className={classes.footer_list_items}>
    //               <a className={classes.list_sub_items}href="/">Mission</a>
    //             </li>
    //             <li className={classes.footer_list_items}>
    //               <a className={classes.list_sub_items}href="/">Report</a>
    //             </li>
    //             <li className={classes.footer_list_items}>
    //               <a className={classes.list_sub_items}href="/">Other</a>
    //             </li>
    //           </ul>
    //         </div>
    //       </li>
    //       <li className={classes.foot_list_a}>
    //         <div className={classes.footer_item}>
    //           <h4 className={classes.footer_item_a}>
    //             Branch
    //           </h4>
    //         </div>
    //         <div>
    //           <ul className={classes.footer_list}>
    //             <li className={classes.footer_list_items}>
    //               <a className={classes.list_sub_items}href="/">North India</a>
    //             </li>
    //             <li className={classes.footer_list_items}>
    //               <a className={classes.list_sub_items}href="/">Chennai</a>
    //             </li>
    //             <li className={classes.footer_list_items}>
    //               <a className={classes.list_sub_items}href="/">Mumbai</a>
    //             </li>
    //             <li className={classes.footer_list_items}>
    //               <a className={classes.list_sub_items}href="/">Madurai</a>
    //             </li>
    //           </ul>
    //         </div>
    //       </li>
    //       <li className={classes.foot_list_a}>
    //         <div className={classes.footer_item}>
    //           <h4 className={classes.footer_item_a}>
    //             Media
    //           </h4>
    //         </div>
    //         <div>
    //           <ul className={classes.footer_list}>
    //             <li className={classes.footer_list_items}>
    //               <a className={classes.list_sub_items} href="/">News</a>
    //             </li>
    //             <li className={classes.footer_list_items}>
    //               <a className={classes.list_sub_items}href="/">Videos</a>
    //             </li>
    //             <li className={classes.footer_list_items}>
    //               <a className={classes.list_sub_items}href="/">Photos</a>
    //             </li>
    //             <li className={classes.footer_list_items}>
    //               <a className={classes.list_sub_items}href="/">Other</a>
    //             </li>
    //           </ul>
    //         </div>
    //       </li>
    //       <li>
    //         <h4 className={classes.follow_h2}>Follow on</h4>
    //         <a className={classes.list_sub_items}href="/">
    //           <FaFacebook id={classes.fb}  className={classes.share_icon} size="32px" />
    //         </a>
    //         <a className={classes.list_sub_items}href="/">
    //           <FaTwitter id={classes.tw} className={classes.share_icon} size="32px" />
    //         </a>
    //         <a className={classes.list_sub_items}href="/">
    //           <FaWhatsapp id={classes.wa} className={classes.share_icon} size="32px" />
    //         </a>
    //         <a className={classes.list_sub_items}href="/">
    //           <FaYoutube id={classes.yt} className={classes.share_icon} size="32px" />
    //         </a>
    //       </li>
    //       <li className={classes.foot_content}>
    //         <h4 className={classes.reachus_title}>Reach us</h4>
    //         <p className={classes.reachus_content}>
    //           91+ 9940291408
    //           <br />
    //           Lead integrated business Pvt.Ltd.
    //           <br />
    //           No.20,Appar st,Kamakodi nagar,
    //           <br />
    //           Valasaravakkam, Chenevi-87
    //           <br />
    //         </p>
    //       </li>
    //     </ul>
    //   </div>
    //   <p className={classes.foot_copyright}>
    //     <FaRegCopyright />
    //     Lead integrated business Pvt.Ltd.,All rights reserved.
    //   </p>
    // </footer>
  );
}

export default Footer;
