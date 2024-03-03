//import styled from "styled-components";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
//import { MortarboardFill, BriefcaseFill } from "react-bootstrap-icons";

// Styling
import { PageWrapper, PageTitle} from "../styling/GlobalStyling.js";

function Experience() {
  return (
    <PageWrapper>
      <PageTitle>Experience</PageTitle>
      <div className="experience">
        <VerticalTimeline lineColor="#252525">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="aug 2023 - jan 2024"
            //iconStyle={{ background: "#252525", color: "#fff", boxshadow: "none" }}
            //icon={<MortarboardFill />}
          >
            <h3 className="vertical-timeline-element-title">
              Technigo UX Bootcamp
            </h3>
            <p> Diploma</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="aug 2020 - feb 2021"
          >
            <h3 className="vertical-timeline-element-title">
              Technigo Frontend Bootcamp
            </h3>

            <h4 className="vertical-timeline-element-subtitle">Diploma</h4>

            <p>Frontend Development</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2020"
          >
            <h3 className="vertical-timeline-element-title">Title</h3>
            <h4 className="vertical-timeline-element-subtitle">Location</h4>
            <p>Info</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - present"
          >
            <h3 className="vertical-timeline-element-title">Title</h3>
            <h4 className="vertical-timeline-element-subtitle">Location</h4>
            <p>Info</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </PageWrapper>
  );
}

export default Experience;
