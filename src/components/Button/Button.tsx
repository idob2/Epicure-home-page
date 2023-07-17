const Button = (props: {
  buttonClassName: string;
  imgClassName: string;
  src: string;
  alt: string;
}) => {
  return (
    <button className={props.buttonClassName}>
      <img className={props.imgClassName} src={props.src} alt={props.alt}/>
    </button>
  );
};

export default Button;