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
          <div className="type-content-div" >
          {props.type && (
            <img
              className="signature-dish-type icon"
              src={props.type}
              alt="signature-dish-type"
            />
          )}
          <div className="card-input-div">
          <span className="card-input">{props.description} </span>

          </div>
          </div>
        
          <div className="hr-cost-div">
            <hr />
            <div className="cost-container">
            <span>₪</span>
            <span className="signature-dish-cost">{props.cost}</span>
            </div>
            
            <hr />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default DishCard;
