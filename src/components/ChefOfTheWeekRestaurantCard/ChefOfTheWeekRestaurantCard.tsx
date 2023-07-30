import "./ChefOfTheWeekRestaurantCard.scss"
const ChefOfTheWeekResturantCard = (props: {imgUrl: string, name: string, chef:string}) => {
    return(
        <div className="popular-card-div">
            <div className="popular-image-div">
            <img className="resturant-image" src={props.imgUrl} alt={props.name} />
            </div>
            <div className="chef-of-week-restaurant-name-div">
                <span className="card-name chef-restaurant">{props.name}</span>
            </div>
            
        </div>
    );
};

export default ChefOfTheWeekResturantCard;