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
        <span className="card-name">{props.name}</span>
        <div className="dish-card-content-div">
          {props.type && (
            <img
              className="signature-dish-type icon"
              src={props.type}
              alt="signature-dish-type"
            />
          )}
          <span className="card-input">{props.description} </span>

          <div className="hr-cost-div">
            <hr />
            <span className="signature-dish-cost">{props.cost} </span>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
