import ProjectContainer from "../components/ProjectContainer";
import ProjectThreeDots from "../components/UI/ProjectThreeDots";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Project } from "../type/types";
import { RootStore } from "../store/redux-store";
import { useEffect, useRef } from "react";
import { scrollActions } from "../store/scroll-slice";

const Projects = () => {
  const projects: Project[] = useSelector(
    (state: RootStore) => state.lenguage.projects
  );
  const title: string = useSelector(
    (state: RootStore) => state.lenguage.projectsTitle
  );

  const dispatch = useDispatch();

  const container = useRef<any>();

  useEffect(() => {
    dispatch(scrollActions.setProjects(container.current.clientHeight));

    window.addEventListener("resize", () => {
      dispatch(scrollActions.setProjects(container.current.clientHeight));
    });
  }, []);

  return (
    <div id="projetos" ref={container}>
      <h1 id="project-title">{"</ " + title + " >"}</h1>
      <ProjectThreeDots />
      <div id="containerP">
        {projects.map((project) => {
          return <ProjectContainer key={project.title} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
