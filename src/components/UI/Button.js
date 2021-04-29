import './Button.css'

const Button = (props) => {
    let className = "button";
    if (props.className) {
        className += " " + props.className
    }
    return (
        <button
            className={className}
            type={props.type || 'button'}
            onClick={props.onClick}
        >{props.children}</button>
    )
}

export default Button;
