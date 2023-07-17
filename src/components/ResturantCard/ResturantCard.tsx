import "./ResturantCard.scss"
const ResturantCard = (props: {imgUrl: string, name: string, chef:string}) => {
    // console.log(props.imgUrl);
    return(
        <div className="popular-card-div">
            <div className="popular-image-div">
            <img className="resturant-image" src={props.imgUrl} alt={props.name} />
            </div>
            <div className="popular-name-div">
                <span className="resturant-name">{props.name}</span>
                <span className="popular-chef-name">{props.chef} </span>
            </div>
            
        </div>
    );
};

export default ResturantCard;