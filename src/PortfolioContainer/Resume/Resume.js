import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "C#", ratingPercentage: 75 },
    { skill: "Unity Game Engine", ratingPercentage: 75 },
    { skill: "ASP.NET/EntityCore", ratingPercentage: 45 },
    { skill: "Python", ratingPercentage: 46 },
    { skill: "Flutter/Dart", ratingPercentage: 10 },
    { skill: "React", ratingPercentage: 10 },
    { skill: "C++", ratingPercentage: 15 },
    { skill: "Unreal Engine 4", ratingPercentage: 25 },
    { skill: "HTML/CSS/JS", ratingPercentage: 50 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "Placid Park GO",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "A mobile game to help generate hype for upcoming Indie Horror Movie, Placid Park",
      subHeading:
        "Technologies Used:  C#, Android Studio, Swift/XCode, Unity Game Engine, iTween",
    },
    {
      title: "full project list",
      duration: { fromDate: "2014", toDate: "current"},
      description: <a href="https://scythedragonstudios.github.io/projectlistsite/">Click Here for full project list!</a>,
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Simon Kenton High School"}
        subHeading={"STEM Focus"}
        fromDate={"2006"}
        toDate={"2010"}
      />

      <ResumeHeading
        heading={"Full Sail University"}
        subHeading={"Bachelor's of Science in Game Design and Development (Not obtained)"}
        fromDate={"2011"}
        toDate={"2013 (left due to medical reasons)"}
      />
      <ResumeHeading
        heading={"CodeLouisville/CodeKentucky"}
        subHeading={"Front End Web Development Certification"}
        fromDate={"2021"}
        toDate={"2022"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Hollywood Casino Lawrenceburg"}
          subHeading={"IT Support Analyst"}
          fromDate={"2021 (Surveillance), 2022(IT)"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Using front-end technologies to help maintain employee database, application install and management, CISCO server usage and general maintainance.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Active Directory usage for employee maintanence and compliance
          </span>
          <br />
          <span className="resume-description-text">
            - Network Engineer service duties, like ethernet tipping and network setup of machines and applications.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - Minimal SQL usage for auditing purposes
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Swimming"
        description="I enjoy swimming, especially in large bodies of water. I adore the ocean and hope to one day live near it."
      />
      <ResumeHeading
        heading="Music & Reading"
        description="I love putting on Lo-fi Hip hop while reading a novel before bed.  I enjoy all genres of music and stories, but do prefer a darker, horror theme to most."
      />
      <ResumeHeading
        heading="Movies (Horror)"
        description="I love watching horror films.  Sometimes I'll hold a movie night where we make fun of the film we are watching, sort've like MST3000."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
