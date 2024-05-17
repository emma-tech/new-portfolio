// Libraries
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

// Icons
import { ArrowRight } from "react-bootstrap-icons";

// Styling
import "react-vertical-timeline-component/style.min.css";
import { PageTitle } from "../styling/GlobalStyling.js";

function Experience() {
  return (
    <>
      <PageTitle>Experience</PageTitle>
      <p>What I&apos;ve been doing for the past 7+ years: </p>
      <div className="experience">
        <VerticalTimeline lineColor="var(--purple)">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="jan 2024 - now"
          >
            <h2 className="vertical-timeline-element-title">
              UX designer & Frontend developer
            </h2>
            <p>
              I&apos;m currently looking for work, projects or consulting
              opportunities within UX design, web design and/or communication.
              Do you have a project in mind?
              <a href="mailto:emma.urman@gmail.com">
                Get in touch
                <ArrowRight color="#252525" size={20} title="Arrow" />
              </a>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="aug 2023 - jan 2024"
          >
            <h2 className="vertical-timeline-element-title">UX Bootcamp</h2>
            <h3 className="vertical-timeline-element-subtitle">Technigo</h3>
            <p>Diploma in UX design</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="maj 2021 - aug 2023"
          >
            <h2 className="vertical-timeline-element-title">
              Frontend developer
            </h2>
            <h3 className="vertical-timeline-element-subtitle">Consid</h3>
            <p>
              Worked as an IT consultant with frontend development in
              Sitevision.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="jan 2020 - apr 2021"
          >
            <h2 className="vertical-timeline-element-title">
              Marketing Coordinatior & Web master
            </h2>
            <h3 className="vertical-timeline-element-subtitle">Medster AB</h3>
            <p>
              Worked with marketing, development and administration for
              Medster.se
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="aug 2020 - feb 2021"
          >
            <h2 className="vertical-timeline-element-title">
              Frontend Bootcamp
            </h2>
            <h3 className="vertical-timeline-element-subtitle">Technigo</h3>
            <p>Diploma in Frontend development</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2019 - 2020"
          >
            <h2 className="vertical-timeline-element-title">
              Web development 30hp
            </h2>
            <h3 className="vertical-timeline-element-subtitle">
              Mittuniversitetet
            </h3>
            <p>Courses in HTML, CSS, JavaScript and Web design.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="jan 2017 - jan 2020"
          >
            <h2 className="vertical-timeline-element-title">
              Community counselor, communication & web editor
            </h2>
            <h3 className="vertical-timeline-element-subtitle">
              Nässjö kommun
            </h3>
            <p>
              Worked with community counseling, web editing, communication,
              social media and administration.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}

export default Experience;
