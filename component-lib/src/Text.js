import PropTypes from 'prop-types'

const Text = (props) => {
    return (<p style={{...props.style, fontSize: props.size == "small" ? 24 : props.size == "medium" ? 36 : 48, color: props.color}}>
        {props.children}
    </p>);
};
Text.propTypes = {
    style: PropTypes.object,
    children: PropTypes.node.isRequired,
    size: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};
Text.defaultProps = {
    size: "medium",
    color: "black"
};

export default Text;