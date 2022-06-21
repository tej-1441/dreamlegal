import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function ReadersCornerComponent(props) {
    const navigate=useNavigate();
  return (
    <Card 
      bg='secondary'
      text='light'
      style={{ width: '23rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="info" onClick={()=>{
            navigate(`/${props.title}`);
        }}>Learn more</Button>
      </Card.Body>
    </Card>
  );
}

export default ReadersCornerComponent;