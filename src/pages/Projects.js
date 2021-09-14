import React from "react";
import { useEffect } from "react";
import { childedu, health, medicine, projectslideimage } from "../asset/images";
import Sliderimg from "../components/Sliderimg";
import classes from '../css/FoundationStyles.module.css';
import "../css/project.css";


function Projects() {
  useEffect(()=> window.scrollTo(0,0),[]);
  return (
    <div >
<Sliderimg name="Project" img={projectslideimage} cont="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum has content of a page when looking at its
              layout."/>
      <div className={classes.div_main_container}>

      {/* <h1 className={classes.project_head}>HEALTHY FAMILIES, HEALTHY COMMUNITIES!!</h1> */}
        <div className={classes.content_container}>
          <img src={health} className={classes.cont_img} alt="" />
          <div className={classes.second_container}>
            <h2 className={classes.project_heading}>Health Nutrition and Sanitation in Rural</h2>

            <p className={classes.cont_p}>
            Supported by RSCT project in Rajasthan, Rajsamand intends to contribute to improving health status in the district by strengthening delivery of national health programmes as well as mobilize communities for better health. The project focuses on reducing maternal and infant mortality and improving menstrual hygiene and reproductive health of adolescent girls and women in Barmer district.
            The project is operational in blocks of Kelva Village, Prasli Village, Sardar Garh Village, Lamoni Village, Pipalda Village, Dhanin Village and Garching ki Bengal Village. RSCT is engaging and mobilizing women systematically at the community level and works with community leaders, existing Village Health Nutrition and Sanitation Committees.
            </p>
          </div>
        </div>
        <div className={classes.content_container2}>
        <img src={childedu} className={classes.cont_img} alt="" />
          <div className={classes.second_container}>
            <h2 className={classes.project_heading}>Child Education in India!!</h2>

            <p className={classes.cont_p}>
            Child Education is a national level programme of RSCT Foundation, which is committed to providing basic education and healthcare to underprivileged children. RSCT Foundation believes that whether you are addressing healthcare, poverty, population control, unemployment or human rights, there's no better place to start than in the corridors of education.
            </p>
            <p className={classes.cont_p}>
            Lead Foundation's educational initiatives include Pre-school [3-6 yrs], Non Formal Education [6-14 yrs non-school going], Remedial Education [6-14 yrs school going] and Bridge Course [14-18 yrs drop-outs]. It works for education for underprivileged children who are under difficult circumstances, such as child labor, children of poorest of the parents, children inflicted and affected with HIV/AIDS, street and runaway children, children with rare disabilities, disaster struck children and slum children. Special emphasis is given on girl education and women education so that they and their families get empowered.
            </p>
          </div>
    
        </div>
        <div className={classes.content_container}>
          <img src={medicine} className={classes.cont_img} alt="" />
          <div className={classes.second_container}>
            <h2 className={classes.project_heading}>Distribution of Free Medicines </h2>

            <p className={classes.cont_p}>
            The poor and needy children are distributed free medication in the relief programs offering medicine. It has been decided that in future too, people will be provided with free services. The needy and the poor in rural India are also provided with medical and surgical treatment. This free of cost treatment is provided by a small team of medical volunteers at Lead Foundation
            The poor and needy children are distributed free medication in the relief programs offering medicine. It has been decided that in future too, people will be provided with free services. The needy and the poor in rural India are also provided with medical and surgical treatment. This free of cost treatment is provided by a small team of medical volunteers at Lead Foundation
            </p>
          </div>
        </div>
        <div className={classes.content_container}>
          <img src={health} className={classes.cont_img} alt="" />
          <div className={classes.second_container}>
            <h2 className={classes.project_heading}>Health Nutrition and Sanitation in Rural</h2>

            <p className={classes.cont_p}>
            Supported by RSCT project in Rajasthan, Rajsamand intends to contribute to improving health status in the district by strengthening delivery of national health programmes as well as mobilize communities for better health. The project focuses on reducing maternal and infant mortality and improving menstrual hygiene and reproductive health of adolescent girls and women in Barmer district.
            The project is operational in blocks of Kelva Village, Prasli Village, Sardar Garh Village, Lamoni Village, Pipalda Village, Dhanin Village and Garching ki Bengal Village. RSCT is engaging and mobilizing women systematically at the community level and works with community leaders, existing Village Health Nutrition and Sanitation Committees.
            </p>
          </div>
        </div>
        <div className={classes.content_container2}>
        <img src={childedu} className={classes.cont_img} alt="" />
          <div className={classes.second_container}>
            <h2 className={classes.project_heading}>Child Education in India!!</h2>

            <p className={classes.cont_p}>
            Child Education is a national level programme of RSCT Foundation, which is committed to providing basic education and healthcare to underprivileged children. RSCT Foundation believes that whether you are addressing healthcare, poverty, population control, unemployment or human rights, there's no better place to start than in the corridors of education.
            </p>
            <p className={classes.cont_p}>
            Lead Foundation's educational initiatives include Pre-school [3-6 yrs], Non Formal Education [6-14 yrs non-school going], Remedial Education [6-14 yrs school going] and Bridge Course [14-18 yrs drop-outs]. It works for education for underprivileged children who are under difficult circumstances, such as child labor, children of poorest of the parents, children inflicted and affected with HIV/AIDS, street and runaway children, children with rare disabilities, disaster struck children and slum children. Special emphasis is given on girl education and women education so that they and their families get empowered.
            </p>
          </div>
    
        </div>
        <div className={classes.content_container}>
          <img src={medicine} className={classes.cont_img} alt="" />
          <div className={classes.second_container}>
            <h2 className={classes.project_heading}>Distribution of Free Medicines </h2>

            <p className={classes.cont_p}>
            The poor and needy children are distributed free medication in the relief programs offering medicine. It has been decided that in future too, people will be provided with free services. The needy and the poor in rural India are also provided with medical and surgical treatment. This free of cost treatment is provided by a small team of medical volunteers at Lead Foundation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
