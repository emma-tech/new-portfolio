import Thingtesting from "../assets/mockup-thingtesting.jpeg";
import Yoga from "../assets/mockup-yoga.jpeg";
import RegionÖstergötland from "../assets/rog_folktandvarden.png";
import Nassjo from "../assets/nassjo.png";
import Feeder from "../assets/feeder_mockup.jpeg";
import Minimark from "../assets/Minimark.png";



export const ProjectList = [
  {
    name: "Thingtesting Case Study",
    image: Thingtesting,
    imageAlt: "Laptop on a desk showing Thingtesting mockup",
    skills: "UX, Qualitative data analysis, CRO, Hotjar, Figma",
    text: "Some text"
  },
  {
    name: "Yoga Studio",
    image: Yoga,
    imageAlt: "Woman holding iPhone with yoga studio mockup",
    skills: "UX, Visual design, Design systems, Wireframing, Prototyping, Figma",
    text: "Some text"
  },
  {
    name: "Feeder.co Case Study",
    image: Feeder,
    imageAlt: "Woman sitting in front of laptop with Feeder.co onboarding mockup",
    skills: "UX, Benchmarking, Personas, User Activation, Prototyping, Figma",
    text: "Some text"
  },
  {
    name: "Region Östergötland",
    image: RegionÖstergötland,
    imageAlt: "Startpage of Folktandvården Östergötland",
    skills: "HTML, CSS, JavaScript, Sitevision, Responsive design, Accessibility",
    text: "During my time as an IT-consultant at Consid I was a part of a development team with a mission to build three of Region Östergötland's websites from scratch: Region Östergötland's main website, Folktandvården Östergötland and Visit Östergötland. Our mission was to follow the design system and sketches we received from our UX team and recreate the design as pixel-perfect as possible, and also make sure that the design was responsive and scaled up nicely from mobile to desktop. I also built template websites and parts of the design system into a styleguide for the web editors so that they would have a simple overview of the most important elements/components and how they should be used (menus, buttons, typography, color, etc.)",
    role: "Frontend developer",
    links: [{ name: 'Visit Östergötland', url: 'https://www.visitostergotland.se/' }, { name: 'Region Östergötland', url: 'https://www.regionostergotland.se/'}, {name: 'Folktandvården Östergötland', url: 'https://www.folktandvårdenostergotland.se/' }]
  },
  {
    name: "Nässjö kommun",
    image: Nassjo,
    imageAlt: "Startpage of nassjo.se",
    skills: "HTML, CSS, JavaScript, React, Sitevision, Responsive design, Accessibility",
    text: "I had the opportunity to work with the new website for nassjo.se from the very start when I worked as community guidance and web editor at the municipality. Several years later, I had the opportunity to work with nassjo.se again, but as a frontend developer via Consid. The task I was given was to remake the experience and event pages to better match Nässjö's place brand, #ettannatsmåland. For example I created a new template and layout for experiences and events, created a web app in React for making it easier for editors to create linked cards do different experiences. I also did a retake of the styling on the Events page and the Search page for experiences.",
    role: "Web Editor & Frontend developer",
    links: [{name: 'Nassjo.se', url: 'https://nassjo.se/'}, {name: 'Nassjo.se - Events', url: 'https://nassjo.se/uppleva-och-gora/evenemang'}, {name: 'Nassjo.se - Experiences', url: 'https://nassjo.se/uppleva-och-gora'}]
  },
  {
    name: "Coming soon: New design system & website for Minimark & Trädgård AB",
    image: Minimark,
    imageAlt: "Image saying that a website is under construction",
    skills: "React, JSX, React Router, Styled Components, Framer Motion",
    text: "Some text"
  }
]