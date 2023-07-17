const Button = (props: {
  buttonClassName: string,
  imgClassName: string,
  src: string,
  alt: string,
  onClick: () => void;
}) => {
  return (
    <button className={props.buttonClassName} onClick = {props.onClick}>
      <img className={props.imgClassName} src={props.src} alt={props.alt}/>
    </button>
  );
};

export default Button;