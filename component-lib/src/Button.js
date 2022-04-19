const defaultStyle = {height: 100 };
const Button = (props) => {
    //Will use same Size for Font * width for now
    return (<div className="box" style={{ ...defaultStyle, ...props.style, width: props.size == "small" ? 200 : props.size == "medium" ? 400 : 800, borderRadius: props.roundedCorners ? 25 : 0, 
    fontSize: props.size == "small" ? 24 : props.size == "medium" ? 36 : 48, color: props.color, backgroundColor: props.BGColor}} onClick={props.onClick}>
        {props.children}
    </div>);
};
Button.propTypes = {
    style: PropTypes.object,
    children: PropTypes.node.isRequired,
    size: PropTypes.string.isRequired,
    roundedCorners: PropTypes.bool,
    onClick: PropTypes.func.isrequired,
    BGColor: PropTypes.string.isrequired,
    color: PropTypes.string
};
Button.defaultProps = {
    size: "small",
    roundedCorners: false,
    color: "black"
};