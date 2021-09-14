import React from "react";
import classes from "../css/FoundationStyles.module.css";
import { useEffect } from "react";
import Sliderimg from "../components/Sliderimg";
import {
  cancer,
  team,
  women,
  women1,
  work1,
  work2,
  work3,
  work4,
  workslideimg,
} from "../asset/images";

function Work() {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className={classes.about_main_div}>
      <Sliderimg
        name="Work"
        img={workslideimg}
        cont="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum has content of a page when looking at its
              layout."
      />
      <div className={classes.work_main_container}>
        <h1 className={classes.main_title}>Successful Programms</h1>
        <div className={classes.content_descp}>
          <img src={cancer} alt="" className={classes.descp_img} />
          <p className={classes.descp_para}>
            <h3 className={classes.desc_title}>Cancer Care</h3>
            The Trusts’ entry into cancer care dates back to 1941 when the Tata
            Memorial Hospital opened in Mumbai as a ‘beacon of hope for the
            hopeless’. The management of the hospital was handed over to the
            Ministry of Health in 1962. In 2012, the Trusts launched the Tata
            Medical Center in Kolkata to address the high prevalence of cancer
            and the lack of suitable facilities in the eastern and north-eastern
            region. The Trusts are setting up cancer research and treatment
            centres in Varanasi, Tirupati, Bhubaneshwar, Ranchi, Allahabad and
            Mangalore. The Trusts are also partnering state governments in
            building state-wide cancer facility networks in Assam, Odisha,
            Jharkhand, Telangana and Nagaland. As part of a comprehensive
            nationwide intervention, the Trusts have supported the formation of
            the National Cancer Grid. The Grid is a pan-India network of major
            cancer centres, research institutes, patient groups and charitable
            institutions. Its mandate is to establish uniform standards of
            patient care for the prevention, diagnosis and treatment of cancer.
          </p>
        </div>

        <div className={classes.title_content}>
          <h2 className={classes.main_title}>
            Women Empowerment through skill development
          </h2>
          <img src={women} alt="" className={classes.descp_img} />
          <p className={classes.main_content}>
            A woman to achieve the maximum potential in their homes and
            otherwise is a critical component of any developmental strategy. The
            disadvantages women of most communities face is of poor access to
            education, high unemployment rate, low societal status, poor access
            to information, and low sense of identity or accomplishment.
            However, women have statistically been proven to spend more of their
            income on their households, and therefore empowering women to earn
            better incomes would benefit the welfare of the entire family
            directly.
          </p>
        </div>
        <div className={classes.content_descp}>
          <p className={classes.descp_para}>
            {/* <h3 className={classes.desc_title}>Detail</h3> */}
            Realizing this need to empower women in the effort to impact entire
            societies, Rakshana has sought to establish small-scale,
            low-investment enterprises for the goal of providing women with a
            means of income for themselves and for their families. Through these
            programs, the women are energized to become economically
            self-sufficient and emotionally self-confident, thereby providing
            improved living conditions at home and better prospects for their
            children and other immediate family. Under this program, we have
            want to built a tailoring unit and would give training in such
            skills as tailoring and embroidery to many women especially Widows.
            This project will create awareness among greater numbers of women,
            and creating a sense of unity and a desire for more among them. We
            hope to enable hundreds more of women to become agents of change in
            their communities, living and modelling lives of dignity.
          </p>
          <img src={women1} alt="" className={classes.descp_img} />
        </div>
      </div>
      {/* Stars content */}
      <h2 className={classes.star_title}>Stars on the Field</h2>
      <div className={classes.start_container}>
        <div className={classes.img_div}>
          <img src={team} className={classes.main_str_img} alt="" />
          <div className={classes.text_main}>
            <h1>Our Team</h1>
          </div>
        </div>
        <div className={classes.sub_img}>
          <div className={classes.img_div}>
            <img src={work1} className={classes.star_img} alt="" />
            <div className={classes.text}>
              <h2>Moria Lubomirski</h2>
            </div>
          </div>
          <div className={classes.img_div}>
            <img src={work2} className={classes.star_img} alt="" />
            <div className={classes.text}>
              <h2>Marion Tyreman</h2>
            </div>
          </div>
          <div className={classes.img_div}>
            <img src={work3} className={classes.star_img} alt="" />
            <div className={classes.text}>
              <h2>Zulema Brookzie</h2>
            </div>
          </div>
          <div className={classes.img_div}>
            <img src={work4} className={classes.star_img} alt="" />
            <div className={classes.text}>
              <h2>Leonard Sirr</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
