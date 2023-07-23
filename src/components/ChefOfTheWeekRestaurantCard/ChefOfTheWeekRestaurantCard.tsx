import "./ChefOfTheWeekRestaurantCard.scss"
const ChefOfTheWeekResturantCard = (props: {imgUrl: string, name: string, chef:string, rating?:string}) => {
    return(
        <div className="popular-card-div">
            <div className="popular-image-div">
            <img className="resturant-image" src={props.imgUrl} alt={props.name} />
            </div>
            <div className="chef-of-week-restaurant-name-div">
                <span className="card-name chef-restaurant">{props.name}</span>
                <span className="card-input">{props.chef} </span>
                {props.rating && <img className="star-rating" src={props.rating} alt="star-rating" />}
                
            </div>
            
        </div>
    );
};

export default ChefOfTheWeekResturantCard;