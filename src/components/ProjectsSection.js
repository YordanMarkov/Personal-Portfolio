import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './ProjectsSection.css';

import projectIcon from '../images/project.svg';
import builtIcon from '../images/built.svg';
import gitIcon from '../images/git.svg';
import demoIcon from '../images/demo.svg';
import newsIcon from '../images/news.svg';
import playButton from '../images/play-button.png';

import homeWater from '../images/home-water.jpg';
import drop from '../images/Drop.png';
import electricity from '../images/Electricity.jpg';
import endWater from '../images/end-water.jpg';
import Video from '../images/Za_vodata.mp4';

import homeSnap from '../images/home-snap.png';
import logoSnap from '../images/logo-snap.png';
import mealSnap from '../images/meal-snap.png';
import loadSnap from '../images/load-snap.png';
import VideoSnap from '../images/SnapBite.mp4';

import voiceTurn from '../images/say.png';
import logoTurn from '../images/logo-turnup.png';
import darkTurn from '../images/dark-mode.png';
import partyTurn from '../images/party.png';
import VideoTurn from '../images/TurnUp.mp4';

import homeReflex from '../images/home-reflex.png';
import endReflex from '../images/end-reflex.png';
import logoReflex from '../images/logo-reflex.png';
import errorReflex from '../images/error.png';
import VideoReflex from '../images/ReflexRush.mp4';

import s1 from '../images/s1.jpg';
import s2 from '../images/s2.jpg';
import s3 from '../images/s3.jpg';
import semester3PDF from '../images/Semester_3.pdf';

const projects = [
  {
    title: 'Water Calculator',
    date: 'October 2024 - March 2025',
    description: `A stakeholder from Bulgaria reached me with the request to design and develop a fully functional water calculator for the country, inspired by the American version by EcoRise. I took the opportunity and several months later the product reached its first pilot version available to the public on March 20th, 2025. It was displayed on the World Water Day event at Sofia University St. Kliment Ohridski.`,
    tools: ['JavaScript', 'React.js', 'HTML', 'CSS', 'Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Research', 'Double Diamond', 'Usability testing'],
    media: {
      bigImage: homeWater,
      smallLeft: drop,
      video: Video,
      smallTopRight: electricity,
      smallBottomRight: endWater,
    },
    demo: 'https://i524517.hera.fontysict.net/water-calculator/',
    github: 'https://github.com/YordanMarkov/Water-Calculator',
    news: 'https://www.uni-sofia.bg/index.php/bul/universitet_t/fakulteti/stopanski_fakultet/novini_ot_fakulteta/stopanskiyat_fakultet_otbelyaza_svetovniya_den_na_vodata_s_diskusiya_i_inovativni_resheniya_za_ustojchivo_vodopotreblenie',
  },
  {
    title: 'SnapBite',
    date: 'March 2025',
    description: `SnapBite is a smart recipe and meal tracking app that helps users document and analyze their food. By snapping a photo, users can extract meal names and ingredients using OpenAI, with Firebase handling secure storage. The app supports editing, deleting, organizing meals, and uploading images. Created as a Tech Case project in the ICT & Smart Mobile program at Fontys, SnapBite emphasizes intuitive UI, ingredient management, and seamless AI-cloud integration.`,
    tools: ['Swift', 'SwiftUI', 'UIKit', 'OpenAI', 'Firebase', 'Figma', 'Adobe Illustrator'],
    media: {
      bigImage: homeSnap,
      smallLeft: logoSnap,
      video: VideoSnap,
      smallTopRight: mealSnap,
      smallBottomRight: loadSnap,
    },
    github: 'https://github.com/YordanMarkov/SnapBite',
  },
  {
    title: 'TurnUp',
    date: 'March 2025',
    description: `TurnUp is a distraction-free car audio app developed during a Duo Case project at Fontys ICT & Smart Mobile. Built in collaboration with a project partner, it allows drivers to control music and playlists through simple gestures like taps and swipes, as well as voice commands. Based on user interviews and safe UX research, TurnUp emphasizes minimal visuals, hands-free use, and intuitive interaction to enhance focus and promote safer driving. As a fun bonus, the app also hides an easter egg party playlist for those who discover it.`,
    tools: ['Swift', 'SwiftUI', 'UIKit', 'Figma', 'Research', 'Double Diamond', 'Usability testing', 'Teamwork', 'Leadership'],
    media: {
      bigImage: darkTurn,
      smallLeft: logoTurn,
      video: VideoTurn,
      smallTopRight: voiceTurn,
      smallBottomRight: partyTurn,
    },
    github: 'https://github.com/YordanMarkov/TurnUp',
  },
  {
    title: 'ReflexRush',
    date: 'February 2025',
    description: `ReflexRush is a mobile app that helps users test and improve their reflexes in a fun, interactive way. It starts with a shake and challenges players to react to a sudden “TAP!” signal, recording their response time. Built with SwiftUI, it features smooth animations, sound and haptic feedback, and a high-score leaderboard. Made as a Tech Case project in the ICT & Smart Mobile program at Fontys, it focuses on minimal UI, engaging visuals, and responsive gameplay.`,
    tools: ['Swift', 'SwiftUI', 'UIKit', 'Figma', 'Adobe Illustrator'],
    media: {
      bigImage: homeReflex,
      smallLeft: logoReflex,
      video: VideoReflex,
      smallTopRight: errorReflex,
      smallBottomRight: endReflex,
    },
    github: 'https://github.com/YordanMarkov/ReflexRush',
  }
];

const ProjectsSection = () => {
  const [expandedMedia, setExpandedMedia] = useState(null);

  const handleExpand = (src) => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setExpandedMedia({ src, top: scrollTop + 100 });
  };

  return (
    <section className="projects-section">
      {projects.map((proj, index) => (
        <div key={index} className="project-container">
          <div className="left-side">
            <div className="title-row">
              <img src={projectIcon} alt="project icon" className="icon" />
              <div>
                <h2>{proj.title}</h2>
                <p className="date">{proj.date}</p>
              </div>
            </div>
            <p className="description">{proj.description}</p>

            <div className="left-media">
              <img
                src={proj.media.bigImage}
                alt="Big"
                className="media-big"
                onClick={() => handleExpand(proj.media.bigImage)}
              />
              <img
                src={proj.media.smallLeft}
                alt="Small Left"
                className="media-small"
                onClick={() => handleExpand(proj.media.smallLeft)}
              />
            </div>
          </div>

          <div className="right-side">
            <div className="video-section">
              <div className="video-wrapper" onClick={() => handleExpand(proj.media.video)}>
                <div className="video-content">
                  <video
                    src={proj.media.video}
                    muted
                    loop
                    autoPlay
                    playsInline
                  />
                  <div className="video-dark-overlay" />
                  <div className="play-overlay">
                    <img src={playButton} alt="Play" />
                  </div>
                </div>
              </div>

              <div className="small-stack">
                <img
                  src={proj.media.smallTopRight}
                  alt="Top Right"
                  className="media-small"
                  onClick={() => handleExpand(proj.media.smallTopRight)}
                />
                <img
                  src={proj.media.smallBottomRight}
                  alt="Bottom Right"
                  className="media-small"
                  onClick={() => handleExpand(proj.media.smallBottomRight)}
                />
              </div>
            </div>

            <div className="built-with">
              <img src={builtIcon} alt="built" className="icon" />
              <span className="built-with-text">Built with</span>
              <div className="tags">
                {proj.tools.map((tool, i) => (
                  <span key={i} className="tag">{tool}</span>
                ))}
              </div>
            </div>

            <div className="links">
              {proj.demo && (
                <a href={proj.demo} target="_blank" rel="noopener noreferrer">
                  <img src={demoIcon} alt="Live Demo" className="icon clickable" />
                </a>
              )}
              {proj.news && (
                <a href={proj.news} target="_blank" rel="noopener noreferrer">
                  <img src={newsIcon} alt="News" className="icon clickable" />
                </a>
              )}
              {proj.github && (
                <a href={proj.github} target="_blank" rel="noopener noreferrer">
                  <img src={gitIcon} alt="GitHub" className="icon clickable" />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}

      {expandedMedia &&
        ReactDOM.createPortal(
            <div className="popup-overlay" onClick={() => setExpandedMedia(null)}>
            <div className="popup-container" onClick={(e) => e.stopPropagation()}>
                <button className="popup-close-btn" onClick={() => setExpandedMedia(null)}>✖</button>
                {expandedMedia.src.endsWith('.mp4') ? (
                <video src={expandedMedia.src} className="popup-media" controls autoPlay />
                ) : (
                <img src={expandedMedia.src} alt="expanded" className="popup-media" />
                )}
            </div>
            </div>,
            document.body
        )
      }

      <div className="other-portfolios">
        <h2 className="portfolios-title">Other portfolios</h2>
        <p className="portfolios-subtext">
          <em>
            Throughout my studies as ICT & Media Design student at Fontys, I had to keep
            my work in a portfolio: made for the teachers. In there I served valuable
            information regarding the tasks, progress and reflections from the semester.
          </em>
        </p>
        <div className="portfolio-grid">
          <div className="portfolio-card">
            <img src={s3} alt="Semester 3" className="portfolio-thumb" onClick={() => window.open(semester3PDF, '_blank')}/>
            <p><strong>Semester 3 Portfolio</strong></p>
          </div>
          <div className="portfolio-card">
            <img src={s2} alt="Semester 2" className="portfolio-thumb" onClick={() => window.open('https://i524517.hera.fontysict.net/portfolio-s2/index.html', '_blank')}/>
            <p><strong>Semester 2 Portfolio</strong></p>
          </div>
          <div className="portfolio-card">
            <img src={s1} alt="Semester 1" className="portfolio-thumb" onClick={() => window.open('https://i524517.hera.fontysict.net/s1-portfolio/', '_blank')}/>
            <p><strong>Semester 1 Portfolio</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;