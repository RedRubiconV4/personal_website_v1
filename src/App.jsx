import './App.css'
import EmailSvg from './assets/emailSVG.svg';
import GithubSvg from './assets/githubSVG.svg';
import LinkedInSvg from './assets/linkedinSVG.svg';
import { useState } from 'react';

function Sidebar() {
  const [activePage, setActivePage] = useState("AboutMe");

  const handlePageClick = (pageID) => {
    setActivePage(pageID);
  };

  return (
    <nav className="sidebar">
      <div className="stickyscroll">
        <div className={activePage === "AboutMe" ? "AboutMeActive" : "sidebarlist"}>
          <li><a href="#AboutMe" onClick={() => handlePageClick("AboutMe")}>About Me</a></li>
        </div>
        <div className={activePage === "Experience" ? "ExperienceActive" : "sidebarlist"}>
          <li><a href="#Experience" onClick={() => handlePageClick("Experience")}>Experience</a></li>
        </div>
        <div className={activePage === "Contact" ? "ContactActive" : "sidebarlist"}>
          <li><a href="#Contact" onClick={() => handlePageClick("Contact")}>Contact</a></li>
        </div>
      </div>
    </nav>
  )
}

function AboutMe() {
  return (
    <div className="aboutmesection" id="AboutMe">
      <h1>Hi, I'm Kevin</h1>
      <p>I'm a Computer Science graduate majoring in Data Analytics and Artificial Intelligence at the University of Technology Sydney. This would be a decision I would regret as I should have chosen Web Development or Cybersecurity. As such, I'm currently in the process of leveling up myself, learning front-end web development and building some projects.</p>
      <p>Skills that I have learned throughout several projects:</p>
      <div className="skillssection">
        <div className="skillslist">
          <ul>
            <li>Numpy</li>
            <li>Pandas</li>
            <li>Matplotlib</li>
          </ul>
        </div>
        <div className="skillslist">
          <ul>
            <li>Tensorflow</li>
            <li>Pytorch</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function Experience() {
  return (
    <div className="experiencesection" id="Experience">
      <h1>Experience</h1>
      <p id="role">McDonald's - Crew Member (Front-counter)</p>
      <p>July 2022 - October 2022</p>
      <ul>
        <li>Provided high-quality customer service through accurate handling and packaging of customer orders.</li>
        <li>Assisted in monitoring inventiry levels and restocking supplies to ensure smooth operation.</li>
        <li>Coordinated as an effective team member to meet demands durign peak operating hours.</li>
      </ul>
    </div>
  )
}

function ContactMe() {
  const [isSent, setIsSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="contactmesection" id="Contact">
      <h1>Contact Me</h1>
      <p>If you like to offer me a position, internship or just willing to hang out, message me using the contact form below.</p>
      <div className="contactmearea">
        <div className="contactform">
          <form onSubmit={(e) => {
            e.preventDefault();
            setIsSent(true);
            }}>
            <input id="formname" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
            <input id="formemail" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
            <textarea id="formmessage" placeholder="Message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
            {isSent ? <p>Your message has been sent</p> : <button type="submit">Submit</button>}
          </form>
        </div>
        <div className="contactdetails">
          <h5>Contact Email:</h5>
          <p>myEmailsupposedtobehere@gmail.com</p>
          <div className="socials">
            <h5>Socials:</h5>
            <div className="sociallink">
              <a href="#"><img src={EmailSvg}/></a>
              <a href="https://github.com/RedRubiconV4"><img src={GithubSvg}/></a>
              <a href="https://www.linkedin.com/in/kevin-l-533270388"><img src={LinkedInSvg}/></a>
            </div>     
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {

  return (
    <>
    <div className="mainpage">
      <Sidebar/>
      <div className='maincontents'>
        <AboutMe/>
        <Experience/>
        <ContactMe/>
      </div>
    </div>
    </>
  )
}

export default App
