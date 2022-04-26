import PropTypes from 'prop-types'
/**
 * Copied from homework, if it ain't broke don't fix it
 */
const defaultStyle = { fontSize: 24, width: 200, height: 100 };
const Box = (props) => {
    return (<div className="box" style={{ ...defaultStyle, ...props.style, width: props.size == "small" ? 200 : props.size == "medium" ? 400 : 800, 
    borderRadius: props.roundedCorners ? 25 : 0, backgroundColor: props.BGColor }}>
        {props.children}
    </div>);
};
Box.propTypes = {
    style: PropTypes.object,
    children: PropTypes.node.isRequired,
    size: PropTypes.string.isRequired,
    roundedCorners: PropTypes.bool,
    BGColor: PropTypes.string.isRequired
};
Box.defaultProps = {
    size: "small",
    roundedCorners: false
};

export default Box;