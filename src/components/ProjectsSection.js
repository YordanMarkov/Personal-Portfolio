import React, { useState } from 'react';
import MediaViewer from './MediaViewer';

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

import careerQuestion from '../images/career-question.png';
import careerSlider from '../images/career-slider.png';
import careerResult from '../images/career-result.png';
import careerReport from '../images/career-report.png';
import repositoryUpload from '../images/repository-upload.png';
import repositoryOverview from '../images/repository-overview.png';
import repositoryAssessment from '../images/repository-assessment.png';
import repositoryScores from '../images/repository-scores.png';
import requirementsSpecification from '../images/requirements-specification.png';
import requirementsContext from '../images/requirements-context.png';
import requirementsContainers from '../images/requirements-containers.png';
import requirementsInput from '../images/requirements-input.png';
import careerDemo from '../images/career-demo.mp4';
import repositoryDemo from '../images/repository-demo.mp4';
import requirementsDemo from '../images/requirements-demo.mp4';

const projects = [
  {
    title: 'Career Discovery',
    date: 'June 2026',
    description: `AI-Generated Adaptive Questionnaire helps users explore career directions through a personalized question flow. Starting with three foundation questions, it generates follow-up questions based on previous answers using formats such as multiple choice, sliders, ranking, and open text. I built the prototype with structured output validation and repetition checks, refining it through user feedback to cover a broader range of careers. The final report explains the suggested direction, offers alternatives, and provides practical next steps for further exploration.`,
    tools: ['Next.js', 'React.js', 'TypeScript', 'OpenAI', 'Zod', 'GitHub Actions', 'Vercel', 'Research', 'Prototyping', 'Usability testing'],
    media: {
      screenshots: true,
      bigImage: careerQuestion,
      smallLeft: careerSlider,
      video: careerDemo,
      smallTopRight: careerResult,
      smallBottomRight: careerReport,
    },
    demo: 'https://ai-generated-adaptive-questionnaire.vercel.app/',
    github: 'https://github.com/YordanMarkov/AI-Generated-Adaptive-Questionnaire',
  },
  {
    title: 'Repository Inspector',
    date: 'May 2026',
    description: `AI-Assisted Repository Inspection helps developers understand existing projects and identify maintainability improvements. Users can upload a repository ZIP or enter a public GitHub URL to receive a structured report covering documentation, testing, configuration, and delivery readiness. I combined deterministic repository scanning with AI-generated interpretation, keeping the collected evidence visible alongside prioritized recommendations. Evaluated with more than seven repositories, the prototype supports report history and exports, providing a starting point for onboarding and code review.`,
    tools: ['Next.js', 'React.js', 'TypeScript', 'OpenAI', 'JSZip', 'localStorage', 'Vitest', 'GitHub Actions', 'Vercel', 'Research'],
    media: {
      screenshots: true,
      bigImage: repositoryUpload,
      smallLeft: repositoryOverview,
      video: repositoryDemo,
      smallTopRight: repositoryAssessment,
      smallBottomRight: repositoryScores,
    },
    demo: 'https://ai-assisted-repository-inspection.vercel.app/',
    github: 'https://github.com/YordanMarkov/AI-Assisted-Repository-Inspection',
  },
  {
    title: 'Requirements',
    date: 'February 2026',
    description: `AI-Assisted Requirement Synthesis turns informal stakeholder descriptions into structured software documentation. I developed a multi-step pipeline that extracts requirements, generates a Software Requirements Specification, and produces C4 Context and Container diagrams rendered with Mermaid. Users can inspect each stage, revisit previous results, and export artifacts as JSON, HTML, or PDF. Testing with multiple stakeholder scenarios showed that the tool produces useful initial drafts, while human review remains necessary to refine assumptions and non-functional requirements.`,
    tools: ['React.js', 'OpenAI', 'Markdown', 'Mermaid', 'C4 Model', 'GitHub Actions', 'Vercel', 'Requirements Engineering', 'Research', 'Prototyping'],
    media: {
      screenshots: true,
      bigImage: requirementsContext,
      smallLeft: requirementsSpecification,
      video: requirementsDemo,
      smallTopRight: requirementsContainers,
      smallBottomRight: requirementsInput,
    },
    demo: 'https://experiment-2-bay.vercel.app/',
    github: 'https://github.com/YordanMarkov/Experiment-2',
  },
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

// Thumbnail-only framing: [left, top, square size, original width, original height].
// Opening a thumbnail always shows the complete, unmodified screenshot.
const screenshotFrames = new Map([
  [careerQuestion, { crop: [320, 85, 760, 1117, 890], alt: 'Adaptive career questions' }],
  [careerSlider, { crop: [35, 45, 235, 1144, 716], alt: 'Career discovery progress' }],
  [careerResult, { crop: [620, 130, 670, 1900, 1079], alt: 'Personalized career direction' }],
  [careerReport, { crop: [1105, 5, 335, 1898, 1079], alt: 'Related career matches' }],
  [repositoryUpload, { crop: [680, 110, 550, 1905, 942], alt: 'Repository upload and inspection' }],
  [repositoryOverview, { crop: [340, 215, 600, 1901, 941], alt: 'Repository evidence and detected technologies' }],
  [repositoryAssessment, { crop: [960, 75, 600, 1902, 945], alt: 'Repository improvement recommendations' }],
  [repositoryScores, { crop: [340, 225, 610, 1903, 940], alt: 'Repository quality scores' }],
  [requirementsContext, { crop: [65, 150, 700, 1611, 856], alt: 'C4 context diagram showing actors and the system' }],
  [requirementsSpecification, { crop: [630, 70, 590, 1262, 950], alt: 'Generated software requirements specification' }],
  [requirementsContainers, { crop: [1020, 340, 550, 1679, 898], alt: 'C4 container diagram database detail' }],
  [requirementsInput, { crop: [205, 130, 590, 1000, 1000], alt: 'Stakeholder input and requirements pipeline' }],
]);

const GalleryImage = ({ src, alt, className, onClick }) => {
  const frame = screenshotFrames.get(src);
  if (!frame) return <img src={src} alt={alt} className={className} onClick={onClick} />;
  const [left, top, size, width, height] = frame.crop;
  return (
    <button type="button" className={className + ' gallery-crop'} onClick={onClick} aria-label={'Enlarge ' + frame.alt.toLowerCase()}>
      <img src={src} alt={frame.alt} style={{
        width: (width / size * 100) + '%',
        height: (height / size * 100) + '%',
        left: (-left / size * 100) + '%',
        top: (-top / size * 100) + '%',
      }} />
    </button>
  );
};

const ProjectsSection = () => {
  const [expandedMedia, setExpandedMedia] = useState(null);

  const handleExpand = (src) => {
    setExpandedMedia({ src });
  };

  return (
    <section className="projects-section">
      {projects.map((proj, index) => (
        <div key={index} className={`project-container${proj.media.screenshots ? ' project-screenshots' : ''}`}>
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
              <GalleryImage
                src={proj.media.bigImage}
                alt="Big"
                className="media-big"
                onClick={() => handleExpand(proj.media.bigImage)}
              />
              <GalleryImage
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
                <GalleryImage
                  src={proj.media.smallTopRight}
                  alt="Top Right"
                  className="media-small"
                  onClick={() => handleExpand(proj.media.smallTopRight)}
                />
                <GalleryImage
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

      {expandedMedia && <MediaViewer src={expandedMedia.src} onClose={() => setExpandedMedia(null)} />}

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
          <a className="portfolio-card" href={semester3PDF} target="_blank" rel="noopener noreferrer">
            <img src={s3} alt="Semester 3" className="portfolio-thumb" />
            <p><strong>Semester 3 Portfolio</strong></p>
          </a>
          <a className="portfolio-card" href="https://i524517.hera.fontysict.net/portfolio-s2/index.html" target="_blank" rel="noopener noreferrer">
            <img src={s2} alt="Semester 2" className="portfolio-thumb" />
            <p><strong>Semester 2 Portfolio</strong></p>
          </a>
          <a className="portfolio-card" href="https://i524517.hera.fontysict.net/s1-portfolio/" target="_blank" rel="noopener noreferrer">
            <img src={s1} alt="Semester 1" className="portfolio-thumb" />
            <p><strong>Semester 1 Portfolio</strong></p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
