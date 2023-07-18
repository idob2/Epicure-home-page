import "./ResturantCard.scss"
const ResturantCard = (props: {imgUrl: string, name: string, chef:string, rating?:string}) => {
    return(
        <div className="popular-card-div">
            <div className="popular-image-div">
            <img className="resturant-image" src={props.imgUrl} alt={props.name} />
            </div>
            <div className="popular-name-div">
                <span className="card-name">{props.name}</span>
                <span className="card-input">{props.chef} </span>
                {props.rating && <img className="star-rating" src={props.rating} alt="star-rating" />}
                
            </div>
            
        </div>
    );
};

export default ResturantCard;