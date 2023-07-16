import "./DishSymbol.scss"
const Symbol = (props: {icon:string, name:string}) =>{
    return(
        <div className="symbole-div">
            <img className="symbole-icon" src={props.icon} alt={props.name} />
            <span className="symbole-name">{props.name}</span>
        </div>
    );
};

export default Symbol;