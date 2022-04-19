import Box from './Box'
import Button from './Button'
import Text from './Text'

const defaultStyle = {height: 100 };

const MyAwesomeComponent = (props) => {
    //Will use same Size for Font * width for now
    return (<div>
        <Box roundedCorners={"True"} BGColor={"blue"} size={"large"} style={{height:400}}>
            <Text>
                This is a Text Component
            </Text>
            <br />
            <Button onClick = {() => alert("Hello World")} BGColor={"red"}>
                Alert
            </Button>
            {props.children}
        </Box>
    </div>);
};
/**
 * Decided not to use PropTypes, this doesn't need to be reusable, it is made for this specific situation
 * and it passes PropTypes to all the different components it uses
 */
export default MyAwesomeComponent;