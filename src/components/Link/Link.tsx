const Link = (props: {text:string, className: string, link: string}) => {
    return (
        <div>
            <a className={props.className} href={props.link}>{props.text}</a>
        </div>
    );
};

export default Link;