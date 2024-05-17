// Libraries
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Global styling
import {
  ProjectCard,
  ProjectImg,
  ProjectTags,
  ProjectHeading,
} from "../styling/ProjectStyling";

function Project({ image, name, tags, id }) {
  const navigate = useNavigate();
  return (
    <motion.div
      className="card"
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
    >
      <ProjectCard>
        <ProjectTags>{tags}</ProjectTags>
        <ProjectHeading to={"/portfolio/project/" + name + "/" + id}>
          <h2>{name}</h2>
        </ProjectHeading>

        <ProjectImg
          src={image}
          alt={name}
          onClick={() => {
            navigate("/portfolio/project/" + name + "/" + id);
          }}
        />
      </ProjectCard>
    </motion.div>
  );
}

export default Project;
