import Box from './Box'
import Button from './Button'
import Text from './Text'

const defaultStyle = {height: 100 };

const MyAwesomeComponent = (props) => {
    //Will use same Size for Font * width for now
    return (<div>
        <Box roundedCorners={"True"} BGColor={"blue"}>
            <Text>
                This is a Text Component
            </Text>
            <br />
            <Button>
                Alert
            </Button>
            {props.children}
        </Box>
    </div>);
};
MyAwesomeComponent.propTypes = {
    style: PropTypes.object,
    children: PropTypes.node.isRequired,
    size: PropTypes.string.isRequired,
    roundedCorners: PropTypes.bool,
    onClick: PropTypes.func.isrequired,
    BGColor: PropTypes.string.isrequired,
    color: PropTypes.string
};
MyAwesomeComponent.defaultProps = {
    size: "small",
    roundedCorners: false,
    color: "black"
};