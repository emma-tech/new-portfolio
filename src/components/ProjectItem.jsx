import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function ProjectItem({ image, name, skills, id }) {
  const navigate = useNavigate();
  return (
    <motion.div
      className="card"
      initial={{
        opacity: 0,
        y: 100,
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
      <div
        className="projectItem"
        onClick={() => {
          navigate("/work/project/" + name +"/"+ id);
        }}
        onKeyDown={() => {
          navigate("/work/project/" + name +"/"+ id);
        }}
      >
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <h2
          tabIndex="0"
          onClick={() => {
            navigate("/work/project/" + name +"/"+ id);
          }}
        >
          {" "}
          {name}{" "}
        </h2>
        <p>{skills}</p>
      </div>
    </motion.div>
  );
}

export default ProjectItem;
