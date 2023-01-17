import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import githubImage from "../assets/GithubIcon.png";
import linkedinImage from "../assets/LinkedinIcon.png";
import IntroductionSocialsButton from "../components/UI/IntroductionSocialsButtons";
import { goToProjects } from "../functions/goTo";
import { lenguageActions } from "../store/lenguage-slice";
import { RootStore } from "../store/redux-store";
import { scrollActions } from "../store/scroll-slice";

const Home = () => {
  const home = useSelector((state: RootStore) => state.lenguage.home);

  const dispatch = useDispatch();

  const container = useRef<any>();

  useEffect(() => {
    dispatch(scrollActions.setHome(container.current.clientHeight));

    window.addEventListener("resize", () => {
      dispatch(scrollActions.setHome(container.current.clientHeight));
    });
  }, []);

  const changeLenguage = () => {
    dispatch(lenguageActions.change());
  };

  return (
    <div id="inicio" ref={container}>
      <div id="main">
        <h1 id="bigname">GABRIEL ROSA</h1>
        <p id="subtitle">{home.subtitle}</p>
        <div id="socials">
          <IntroductionSocialsButton
            link={"https://github.com/GabrielWaif"}
            image={githubImage}
            alt={"GIT"}
          />
          <IntroductionSocialsButton
            link={
              "https://www.linkedin.com/in/gabriel-eduardo-da-silva-rosa-a15b2024a/"
            }
            image={linkedinImage}
            alt={"LINKEDIN"}
          />
        </div>
        <button onClick={changeLenguage} className="change-lenguage">
          {home.change}
        </button>
      </div>
      <button onClick={goToProjects} className="downbutton buttonn">
        <i className="material-icons">arrow_downward</i>
      </button>
    </div>
  );
};

export default Home;
