import React,{useEffect} from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import './AboutMe.css';

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTANTS = {
        description: 'I started my developer journey around 2014, strictly hobby at that point, I remade a couple old school classic titles like Block Ball, Galaxy Shot, Asteroids, and others, using a language called GML (GameMaker Language). After 6-7 years of self study in Unreal Engine 4 and Unity, I decided to get more serious with my developer work, and started studying Software Development, with C# as my main focus. In 2021, I applied (and was accepted) into CodeKentucky, a certification program designed to get more Kentucky residents into the ever-growing technology fields.  I have several Freelance works under my belt, and I am looking for something more stable to provide my family with', 
        highlights: {
            bullets:[
                "Mobile Game Developement with Unity",
                "Game Design and Development with Unity",
                "Web Design and Developer with ASP.NET, EntityCore",
                "Hobbyist Python and Flutter/Dart Programmer",
                "Avid IGDA Member",
            ],
            heading: "Here are a few Highlights:"
        }
    }

    const renderHighlights =()=>{
        return(
            SCREEN_CONSTANTS.highlights.bullets.map((value, i)=>(
                <div className="highlight" key={i}>
                    <div className="highlight-blob"></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }

    return(
        <div className="about-me-container screen-container" id={props.id || ""}>
            <div className="about-me-parent">
                <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'}/>
                <div className="about-me-card">
                    <div className="about-me-profile"></div>
                    <div className="about-me-details">
                        <span className="about-me-description">{SCREEN_CONSTANTS.description}</span>
                        <div className="about-me-highlights">
                            <div className="highlight-heading">
                                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                            </div>
                            {renderHighlights()}
                        </div>
                        <div className="about-me-options">
                        <button className="btn primary-btn"> Hire Me</button>
            <a href="2023Resume.docx" download="John Klaine.docx">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}