type props = {
  link: string;
  image: any;
  alt: string;
};

const IntroductionSocialsButton = (props: props) => {
  return (
    <a href={props.link} target="_blank" className="buttonn socials-button">
      <img src={props.image} alt={props.alt} />
    </a>
  );
};
export default IntroductionSocialsButton;
