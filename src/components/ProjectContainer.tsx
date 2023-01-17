import { Project } from "../type/types";
import ProjectTags from "./ProjectTags";
import defaultGif from "../assets/default.gif";
import { useSelector } from "react-redux";
import { RootStore } from "../store/redux-store";

type props = {
  project: Project;
};

const ProjectContainer = ({ project }: props) => {
  const buttons = useSelector(
    (state: RootStore) => state.lenguage.projectButtons
  );

  return (
    <div className="projeto">
      {project.imageLink && <img src={project.imageLink} alt="project" />}
      {!project.imageLink && <img src={defaultGif} alt="project" />}

      <div className="projcont">
        <h2>{project.title}</h2>

        {project.tags.length !== 0 && <ProjectTags tags={project.tags} />}

        <div className="textos-projeto">
          <p>{project.description}</p>
        </div>

        <div className="project-buttons">
          {project.viewLink && (
            <a
              href={project.viewLink}
              target="_blank"
              className="project-button"
            >
              {buttons.view}
            </a>
          )}
          {project.codeLink && (
            <a
              href={project.codeLink}
              target="_blank"
              className="project-button"
            >
              {buttons.code}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
