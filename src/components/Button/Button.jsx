import PropTypes from 'prop-types'

function Button({
    children,
    style = 'primary',
    className,
    elementType = 'button',
    onClick,
    ...props
}) {
    let classes =
        style === 'primary' ? 'primaryBtn' : style === 'outline' ? 'outlineBtn' : 'fullBtn'
    let Com = elementType
    return (
        <Com {...props} className={`${className} ${classes}`} onClick={onClick}>
            {children}
        </Com>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.string,
    className: PropTypes.string,
    elementType: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
