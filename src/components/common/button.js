import propTypes from 'prop-types';
import s from "./index.module.scss"

const Button = ({
    label,
    onClick = () => { },
    style,
    className
}) => {

    return (
        <button className={className} style={style} onClick={onClick}><div >{label}</div></button>
    )
}

Button.propTypes = {
    label: propTypes.string.isRequired,
    onClick: propTypes.func,
    style: propTypes.object,
    className: propTypes.string
}


export default Button