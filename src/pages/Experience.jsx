//import styled from "styled-components";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
//import { MortarboardFill, BriefcaseFill } from "react-bootstrap-icons";

// Styling
import { PageWrapper, PageTitle } from "../styling/GlobalStyling.js";

//Components
import DefaultFooter from "../components/DefaultFooter.jsx";

function Experience() {
  return (
    <>
      <PageWrapper>
        <PageTitle>Experience</PageTitle>
        <div className="experience">
          <VerticalTimeline lineColor="var(--black)">

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2019 - 2020"
            >
              <h2 className="vertical-timeline-element-title">
                Web development 30hp
              </h2>
              <h3 className="vertical-timeline-element-subtitle">Mittuniversitetet</h3>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="jan 2020 - apr 2021"
            >
              <h2 className="vertical-timeline-element-title">
                Webmaster & Marketing Coordinator
              </h2>
              <h3 className="vertical-timeline-element-subtitle">Medster AB</h3>
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
              className="vertical-timeline-element--work"
              date="may 2020 - aug 2023"
            >
              <h2 className="vertical-timeline-element-title">
                Frontend developer
              </h2>
              <h3 className="vertical-timeline-element-subtitle">Consid</h3>
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
              date="jan 2024 - present"
            >
              <h2 className="vertical-timeline-element-title">UX designer</h2>
              <p>
                I&apos;m currently looking for a new role in UX/UI design while
                working on some pro-bono projects
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </PageWrapper>
      <DefaultFooter />
    </>
  );
}

export default Experience;
