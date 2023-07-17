import "./ResturantCard.scss"
const ResturantCard = (props: {imgUrl: string, name: string, chef:string}) => {
    return(//need to fix popular-name-div does not centering
        <div className="popular-card-div">
            <div className="popular-image-div">
            <img className="resturant-image" src={props.imgUrl} alt={props.name} />
            </div>
            <div className="popular-name-div">
                <span className="card-name">{props.name}</span>
                <span className="card-input">{props.chef} </span>
            </div>
            
        </div>
    );
};

export default ResturantCard;