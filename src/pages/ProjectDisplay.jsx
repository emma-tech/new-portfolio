import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import BackButton from "../components/BackButton"; 
import "../styling/ProjectDisplay.css";
import { PageWrapper, PageTitle } from "../styling/GlobalStyling";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <PageWrapper>
      
    <div className="project">
      <PageTitle> {project.name}</PageTitle>
      <img src={project.image} alt={project.imageAlt}/>
      <p>{project.text}</p>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <BackButton />
    </div>
    </PageWrapper>
  );
}

export default ProjectDisplay;