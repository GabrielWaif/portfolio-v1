import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../store/redux-store";
import { scrollActions } from "../store/scroll-slice";

const AboutMe = () => {
  const info = useSelector((state: RootStore) => state.lenguage.info);

  const dispatch = useDispatch();

  const container = useRef<any>();

  useEffect(() => {
    dispatch(scrollActions.setAbout(container.current.clientHeight));

    window.addEventListener("resize", () => {
      dispatch(scrollActions.setAbout(container.current.clientHeight));
    });
  }, []);

  return (
    <div id="aboutme" ref={container}>
      <div id="aboutme-flex">
        <div id="fotoP">
          <img src="https://imgur.com/FloiIhr.png" alt="" />
        </div>
        <div id="sobremim">
          <h1>{info.aboutMe.title}</h1>
          <p>{info.aboutMe.text}</p>
          <p></p>
        </div>
        <div id="tecnologias">
          <h1>{info.tech.title}</h1>
          <div id="icones-tec">
            {info.tech.icons.map((icon) => {
              return <i key={icon} className={icon} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
