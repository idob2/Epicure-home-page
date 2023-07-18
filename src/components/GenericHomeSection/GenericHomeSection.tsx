import './GenericHomeSection.scss';
type props = {
    children: string |JSX.Element | JSX.Element[],
    color: string,
    className?: string
}

const GenericHomeSection = ({children, color, className}:props) => {
    const wrapperClassName = `wrapper-div ${className || ''}`;

    return (
        <div className={wrapperClassName} style={{backgroundColor: color}}>
            {children}
        </div>
    );
}

export default GenericHomeSection;