const Link = (props: {text:string, link: string}) => {
    return (
        <div>
            <a href={props.link}>{props.text}</a>
        </div>
    );
};

export default Link;