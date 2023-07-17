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
        <span className="signature-dish-name">{props.name}</span>
        <div className="dish-card-content-div">
        <span className="signature-dish-description">{props.description} </span>
        <span className="signature-dish-type">{props.type} </span>
        <div className="hr-cost-div">
          <hr />
          <span className="signature-dish-cost">{props.cost} </span>
          <hr />
          {/* <div className="hr-div">
            <hr className="cost-hr" />
          </div> */}
          
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default DishCard;
