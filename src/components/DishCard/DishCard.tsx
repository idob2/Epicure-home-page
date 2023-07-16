import "./DishCard.scss";
const DishCard = (props: {
  image: string;
  name: string;
  description: string;
  type?: string;
  cost: string;
}) => {
  return (
    <div className="signature-dish-div">
      <div className="signature-image-div">
        <img
          className="signature-dish-image"
          src={props.image}
          alt={props.name}
        />
      </div>
      <div className="signature-dish-content-div">
        <p className="signature-dish-name">{props.name}</p>
        <p className="signature-dish-description">{props.description} </p>
        <p className="signature-dish-type">{props.type} </p>
        <div className="hr-cost-div">
          <p className="signature-dish-cost">{props.cost} </p>
          <div className="hr-div">
            <hr className="cost-hr" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default DishCard;
