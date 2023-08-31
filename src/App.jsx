import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Nav() {
  return (
    <Container>
      <Row className="sectionheader">
        <Col className="nav-item">about</Col>
        <Col className="nav-item">experience</Col>
        <Col className="nav-item">projects</Col>
        <Col className="nav-item">contact</Col>
      </Row>
    </Container>
  );
}

function Header() {
  return (
    <div className="section">
       <h1>Hey, I'm Lauryne!</h1>
       <p class="intro">I'm a double-degree student studying<mark>computer science</mark>@ the University of Waterloo 
          and<mark>business administration</mark>@ Wilfrid Laurier University</p>
    </div>
   
  );
}

function About() {
  return (
    <div className="section">
      <h2>About Me</h2>
      <Container>
        <Row>
          <Col classname="col-headshot">
            <img className="headshot" src="/lauryne_headshot.png"></img>
          </Col>
          <Col className="col-facts">
            <p className="fact">I'm interested in the intersection of business and technology, specifically in the areas 
              of<mark>software engineering</mark>and<mark>data science</mark></p>

            <p className="fact">A goal of mine is to contribute to the intitatives that have encouraged me to pursue a career 
              in technology, that is why I<mark>mentor</mark> at many Girl Learning Code events from Canada Learning Code</p>

            <p className="fact">I'm<mark>bilingual</mark>! My first language is French and I'm fluent in English 
            (I also know a bit of Spanish)</p> 
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}

function RowExperience({job}) {
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    setShowMore(!showMore);
  }

  const bulletpoints = job.bullets.map(bullet => <li>{bullet}</li>);
  
  return(
    <>
    <Row className="experience">
      <Col md="3" className="col-experience">
        <p className="maininfo"><b>{job.company}</b></p>
        {showMore && <p className="date">{job.date}</p>}
      </Col>
      <Col md="7" className="col-experience">
        <p className="maininfo">{job.title} <br></br></p><p className="tools">{job.tools}</p>
        {showMore && <p className="moreinfo">
                      <ul>{bulletpoints}</ul>
                      <p className="tools"></p></p>}
      </Col>
      <Col md="1">
        <button className="arrow-down" onClick={handleClick}>
          {showMore ? <img src="minus.svg"></img> : <img src="arrowdown.svg"></img>}
        </button>
      </Col>
    </Row>
    <hr className="linebreak"></hr>
    </>
  );
}

function Experience() {
  
  return (
    <div className="section">
      <h2>My Experience</h2>

      <RowExperience job={{ company: "STEMchats",
                            title: "Technology Coordinator",
                            date: "2021-2022",
                            bullets: ["Developed responsive websites using HTML & SCSS along with Bootstrap",
                                      "Implemented a web scraping feature using Python to fetch and store the website’s content",
                                      "Designed wireframes for new websites which improved efficiency when developing collaboratively"],
                            tools: "Tools: HTML, SCSS, Bootstrap, Javascript, Firebase, Python" }} />

      <RowExperience job={{ company: "Correlation One",
                            title: "Data Science 4 All Fellow",
                            date: "Apr - Aug 2021",
                            bullets: ["Analyzed the issue of food insecurity through data cleaning and exploratory data analysis with Python and Jupyter",
                                      "Enhanced the project with data visualization on an interactive Tableau dashboard and a detailed report of the research",
                                      "Graduated with honours from the program and the final project was nominated a “Crowd Favorite”"],
                            tools: "Tools: Python, Pandas, Seaborn, Matplotlib, Jupyter Notebook, Tableau" }} />

      <RowExperience job={{ company: "Altimex Consulting",
                            title: "Social Media Manager",
                            date: "2020-2021",
                            bullets: ["Implemented a digital marketing plan to grow a small business’ online presence",
                                      "Managed multiple social media pages and used in-app analytics to track important key performance indicators",
                                      "Created content catered to their target audience through articles on the website using WordPress"],
                            tools: "Tools: WordPress, Meta Business Suite, Adobe InDesign, Adobe Premiere Pro" }} />
      
      <RowExperience job={{ company: "Canada Learning Code",
                            title: "Teen Ambassador",
                            date: "2019-2022",
                            bullets: ["Led a team of 5 to develop a website with exercises to combat teens’ stress levels and won 1st place in the hackathon",
                                      "Created a medium-fidelity prototype for a productivity application",
                                      "Mentored at Girls Learning Code workshops, providing assistance and feedback to young coders"],
                            tools: "Tools: HTML, CSS, Javascript" }} />

    </div>
    

  );
}

function Card({project, children}) {
  let apps = project.apps;
  return (
    <div className="card">

        <div classname="card-img">
          <img className="desc" src={project.img}></img>
        </div>
        
        <div className="card-content">
          <h3>{project.title}</h3>
          <p className="tech">{project.technologies.join(" - ")}</p>
          <p className="body">{project.body}</p>
        </div>

        {children}
    </div>
  );
}

function CardFooter({apps}) {
  return (
    <div className="cardfooter">
      <Row className="row-cardfooter">
        {apps.github && (<Col md="auto"> <img src="github.svg"></img> </Col>)}
        {apps.chrome && (<Col md="auto"> <img src="chrome.svg"></img> </Col>)}
        {apps.tableau && (<Col md="auto"> <img src="graph.svg"></img> </Col>)}
        {apps.link && (<Col md="auto"> <img src="link.svg"></img> </Col>)}
      </Row>
    </div>  
  );
}

function Projects() {
  return (
    <div className="section">
      <h2>Projects</h2>
      <Row>
        <Col className="col-card">
          <Card project = {{ img : "/portfolio.png",
                             title: "Portfolio Website", 
                             technologies: ["React", "Javascript", "HTML", "SCSS"],
                             body : "The website you're currently on! This is a project I worked on to practice using React which I recently" 
                                  + "started learning and plan to update as I learn more",
                          }}>

            <CardFooter apps={{github: true, link: true}}/>

          </Card>
        </Col>

        <Col className="col-card">
          <Card project = {{ img : "/studyspace.png",
                             title: "StudySpace", 
                             technologies: ["Javascript", "HTML", "SCSS"],
                             body : "StudySpace is a productivity chrome extension that won 2nd place at the Queen's Programming Challenge in 2021",
                          }}>
            
            <CardFooter apps={{github: true, chrome: true, link:true}}/>
          
          </Card>
        </Col>

        <Col className="col-card">
          <Card project = {{ img : "/datascience.png",
                             title: "Data Analysis Project", 
                             technologies: ["Python", "Pandas", "Seaborn", "Matplotlib"],
                             body : "As part of DS4A, I contributed to a data analysis of the impact COVID-19 had on food insecurity." +
                                    "The project includes a report, datafolio, tableau dashboard and presentation all available on Github.",
                          }}>

            <CardFooter apps={{github: true, tableau: true}}/>

          </Card>
        </Col>

      </Row>
    </div>
  );
}

function Contact() {
  return(
    <div className="sectioncontact">
      <h2>Contact Me</h2>
      <Row className="row-contact">
        <Col>
          <img className="contact-logo" src="/linkedin.png"></img>
        </Col>
        <Col>
          <img className="contact-logo" src="/github-logo.png"></img>
        </Col>
        <Col>
          <img className="contact-logo" src="/gmail.png"></img>
        </Col>
      </Row>
    </div>
  );
}

function Footer() {
  return(
    <div className="sectionfooter">
      <p className="endtext-top">Built & designed by Lauryne 👩🏾‍💻</p>
      <p className="endtext">© 2023 Lauryne Assa</p>
    </div>
  )
}

export default function Main() {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
