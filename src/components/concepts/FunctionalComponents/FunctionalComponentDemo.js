import {
    Card, 
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Container,
    Row,
    Col
} from 'reactstrap';

const FuntionalComponentDemo = () => {
    return(
        <Container className='main'>
        <Row>
            <Col xs='12'>
        <h1>Functional Component</h1>
        <p>Fuctional components are the primary tool in React to build a samll, modular piee of your page. </p>
        <dl>
            <dt> Can use state </dt>
            <dd>With the 'useState" hook, functional components can now both render a display to the page and update the information to be shown. </dd>
            <dt>No 'this' keyword</dt>
            <dd>Older class components in React use 'this'. Functipnal components have no 'this' object.</dd>
            <dt>Can Use effects</dt>
            <dd>With the 'useEffect" hook, functional components can perfrom side effects with any props or state changes.</dd>
            <dt>reurn()</dt>
            <dd>Must reutn a single elements, but this element may have nested elemetns inside of it</dd>
            </dl>
            </Col>
            </Row>

            <hr />
            <h1>Challenge</h1>
            <Row>
                <Col md='6'>
                    <HelloWolrdFatArrow className='logo' />
                </Col>
                <Col md='6'>
                    <HelloWolrd />
                </Col>
            </Row>
            </Container>
    );
};
export default FuntionalComponentDemo;

const HelloWolrd = function(){
    return(
        <div>
            <Card>
                <img width='100%' height='280px' src='https://i.ytimg.com/vi/BwAakF_VUV8/maxresdefault.jpg' alt='card cap' />
                <CardBody>
                    <CardTitle>Regular Ole Function</CardTitle>
                    <CardSubtitle>A JS Library</CardSubtitle>
                    <CardText><pre>const HelloWolrd = function()</pre></CardText>
                    <Button>Go somewhere, yo</Button>
                </CardBody>
            </Card>
        </div>
    );
};

//far arrow funtion componet - 3 fewer lines. Common in React
const HelloWolrdFatArrow = () =>
<div>
    <Card>
        <img width='100%' height='280px' src='https://i.ytimg.com/vi/_pfXEv9FGE/maxresdefault.jpg' alt='card cap' />
        <CardBody>
            <CardTitle>Fat Arrow</CardTitle>
            <CardSubtitle>A JS Library</CardSubtitle>
            <CardText><pre>const HelloWolrd</pre></CardText>
            <Button>Go somewhere, man</Button>
        </CardBody>
    </Card>
</div>
