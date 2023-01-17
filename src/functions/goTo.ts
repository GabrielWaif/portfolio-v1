import store from "../store/redux-store";

export const goToHome = () => {
  scrollTo(0);
};

export const goToProjects = () => {
  const state = store.getState();
  const height = state.scroll.homeHeight;
  scrollTo(height);
};

export const goToAboutMe = () => {
  const state = store.getState();
  let height = state.scroll.homeHeight + state.scroll.projectsHeight;
  scrollTo(height);
};

export const goToContact = () => {
  const state = store.getState();
  let height =
    state.scroll.homeHeight +
    state.scroll.projectsHeight +
    state.scroll.aboutMeHeight;
  scrollTo(height);
};

const scrollTo = (height: number) => {
  window.scrollTo({
    top: height,
    left: 0,
    behavior: "smooth",
  });
};
