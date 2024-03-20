//import Thingtesting from "../assets/mockup-thingtesting.jpeg";
import Yoga from "../assets/mockup-yoga.jpeg";
import RegionÖstergötland from "../assets/rog_folktandvarden.png";
import Nassjo from "../assets/nassjo.png";
import Feeder from "../assets/feeder_mockup2.jpeg";
import Minimark from "../assets/Minimark.png";

export const CaseStudys = [
  {
    name: "Feeder.co Case Study",
    image: Feeder,
    imageAlt: "Laptop showing a mockup of Feeders user dashboard",
    skills: "UX | Company funnel metrics | Benchmarking | Personas | User activation | Prototyping | Figma",
    about: "Feeder is a news manager that tracks any online source you choose and bundles it into an easy-to-digest reading experience. It let’s you subscribe to any news site, website or blog and get all new posts in a single feed. They're a Stockholm based company with a very global product. The Feeder.co platform has over 700,000 registered users, with the main user base in the USA.",
    role: "UX designer",
    problem: "Feeder has a problem in activation and retention. In short there is an opportunity and potential to increase activation of users – which will lead to more customers through out the whole funnel. Feeder defines an active user as a person that keeps coming back to use their product regularly, within a 30 day period. One important event is the “read post”, which means they are actually getting value from Feeder. Feeder knows that it’s important for new users to quickly start adding feeds to their account, if they don’t do that, they tend to not come back to the product again. This lead us to formulate the idea that we we wanted to create an engaging and effective primary onboarding, and a more personalized and customized overall experience for Feeders users.",
    solution: "Since we know that the read post-event is one of the most important events for activating users on Feeder, we wanted to include this right away in the onboarding process. We gave the user the opportunity to add feeds directly in the onboarding, so that there would always be content to read immediately when entering the platform. We also integrated a new Add Feed-button in the sidebar for making adding of new feeds more accessible. We also wanted to give the users the opportunity to customize their experience by lifting an already existing theme preferences functionality already in the onboarding. Customization lets users make their own selections about what they want to see, or set preferences for how information is organized or displayed. It can enhance user experience because it allows users to control their interaction. All our research and findings starts in growth design through onboarding best practices and UX psychology principles.",
  },
  /*
  {
    name: "Thingtesting Case Study",
    image: Thingtesting,
    imageAlt: "Laptop on a desk showing Thingtesting mockup",
    skills: "UX | Qualitative data analysis | CRO | Hotjar | Figma",
    text: "Thingtesting is a remote startup with a team based in the USA and Scandinavia,and their goal is to be your go-to place to research and review online brands. Our task was to analyse their website in search of UX improvements.",
    objective: "Thingtesting’s biggest objective is to provide consumers with honest reviews about internet-born brands. To do so, they want to increase the number of tested product and reviews on their site thingtesting.com.",
    role: "UX designer",
    tools: "Hotjar heatmaps and user recordings",
    process: "We started vith analysing the heatmap and user recordings, ",
  }
  */
]

export const Projects = [
  {
    name: "Yoga Studio",
    image: Yoga,
    imageAlt: "Woman holding iPhone with yoga studio mockup",
    skills: "UX/UI | Visual design | Design systems | Wireframing | Prototyping | Figma | HTML | CSS",
    text: "This was a UI project in Technigo's UX bootcamp with the mission to create a design system and prototype for mobile, tablet and desktop with a landing page for a fictional gym, personal trainer or sports activity. Because I love yoga, I chose to create a design for a fictional yoga studio. I created a design system, wireframes and prototypes in Figma, and then had a classic designer-developer handover to a developer in the web bootcamp who was tasked with building my design with React. The following week we built the desktop version of our landing pages ourselves using only HTML and CSS.",
    role: "UX designer",
    links: [{ name: 'Figma prototype - Mobile version', url: 'https://www.figma.com/proto/6dgOLvpde3ZmqSjJYEvHZm/Sprint-3-%F0%9F%A7%98%E2%80%8D%E2%99%80%EF%B8%8F-Emma-Urman-%F0%9F%A7%98%E2%80%8D%E2%99%80%EF%B8%8F?page-id=819%3A1623&type=design&node-id=1748-1257&viewport=335%2C1278%2C0.15&t=44XJ1eQA2Lfe6hOW-9&scaling=scale-down&starting-point-node-id=1748%3A1257&show-proto-sidebar=1' }, { name: 'Landing page - Desktop version', url: 'https://qtktvr.csb.app/'}]
  },
  {
    name: "Region Östergötland",
    image: RegionÖstergötland,
    imageAlt: "Startpage of Folktandvården Östergötland",
    skills: "Frontend | HTML | CSS | JavaScript | Sitevision | Responsive design | Accessibility",
    text: "During my time as an IT-consultant at Consid I was part of a development team with a mission to build three of Region Östergötland's websites from scratch: Region Östergötland's main website, Folktandvården Östergötland and Visit Östergötland. Our mission was to follow the design system and sketches we received from our UX team and recreate the design as pixel-perfect as possible, and also make sure that the design was responsive and scaled up nicely from mobile to desktop. I also built template websites and parts of the design system into a styleguide for the web editors so that they would have a simple overview of the design system, different elements and components and how they should be used for the web.",
    role: "Frontend developer",
    links: [{ name: 'Visit Östergötland', url: 'https://www.visitostergotland.se/' }, { name: 'Region Östergötland', url: 'https://www.regionostergotland.se/'}, {name: 'Folktandvården Östergötland', url: 'https://www.folktandvårdenostergotland.se/' }]
  },
  {
    name: "Nässjö kommun",
    image: Nassjo,
    imageAlt: "Startpage of nassjo.se",
    skills: "Frontend | Web editing | Writing | HTML | CSS | JavaScript | React | Sitevision | Responsive design | Accessibility",
    text: "I had the opportunity to work with the new website for nassjo.se from the very start when I worked as community guidance and web editor at the municipality. Several years later, I had the opportunity to work with nassjo.se again, but as a frontend developer via Consid. The task I was given was to remake the experience and event pages to better match Nässjö's place brand, #ettannatsmåland. For example I created a new template and layout for experiences and events, created a web app in React for making it easier for editors to create linked cards do different experiences. I also did a retake of the styling on the Events page and the Search page for experiences.",
    role: "Web editor & Frontend developer",
    links: [{name: 'Nassjo.se', url: 'https://nassjo.se/'}, {name: 'Nassjo.se - Events', url: 'https://nassjo.se/uppleva-och-gora/evenemang'}, {name: 'Nassjo.se - Experiences', url: 'https://nassjo.se/uppleva-och-gora'}]
  },
  {
    name: "Minimark & Trädgård AB",
    image: Minimark,
    imageAlt: "Image saying that a website is under construction",
    skills: "UX | Frontend | Figma | Wireframing | Design systems | React | Styled Components",
    text: "I'm currently working on a new visual identity, design system and website for Minimark & Trädgård AB. Stay tuned!",
    role: "UX designer & Frontend developer",
    links: [{name: 'Minimark.se - Coming soon', url: 'www.minimark.se'}]
  }
]
