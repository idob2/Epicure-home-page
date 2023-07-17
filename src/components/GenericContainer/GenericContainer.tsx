import "./GenericContainer.scss";


type props = {
    children: string |JSX.Element | JSX.Element[]
}

const GenericContainer = ({children}:props) => {
    return (
        <div className="generic-container">
            {children}
        </div>
    );
}


export default   GenericContainer;