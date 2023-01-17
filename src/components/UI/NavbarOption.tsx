type props = {
  text: string;
  onClick?(...args: any[]): any;
};

const NavbarOption = (props: props) => {
  return (
    <a onClick={props.onClick} className="option">
      <p>{props.text}</p>
    </a>
  );
};

export default NavbarOption;
