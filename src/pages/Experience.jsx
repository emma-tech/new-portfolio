import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MortarboardFill, BriefcaseFill } from 'react-bootstrap-icons';

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="aug 2023 - jan 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<MortarboardFill />}
        >
          <h3 className="vertical-timeline-element-title">
            Technigo UX Bootcamp
          </h3>
          <p> Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="aug 2020 - feb 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon="Icon"
        >
          <h3 className="vertical-timeline-element-title">
            Technigo Frontend Bootcamp
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Diploma
          </h4>

          <p>Frontend Development</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<MortarboardFill />}
        >
          <h3 className="vertical-timeline-element-title">
            Title
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Location
          </h4>
          <p>Info</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon="Icon"
        >
          <h3 className="vertical-timeline-element-title">
            Title
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Location
          </h4>
          <p>
            Info
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;