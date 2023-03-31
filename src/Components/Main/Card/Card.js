import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import './Card.css'

function Сard(props) {
  let [colr, setColr] = useState(true);
  let [btnColr, setBtnColr] = useState(false);
  return <div className="mainCard">
    <Card style={{ width: '210px', height: '25  0px' }}>
    <div className="btnserd">{btnColr ? <Button variant="outline-secondary" onClick={() => setBtnColr(!btnColr)}>♡
</Button> : <Button variant="danger" onClick={() => setBtnColr(!btnColr)}>♥</Button>}</div>
      <Card.Img variant="top" src={props.img} style={{ width: '89px', height: '89px', margin: '10px auto 0px'}} />
      <Card.Body>
        <Card.Title className='cardTitle'>{props.name}</Card.Title>
        <Card.Text style={{fontSize: 14}} className="TextCard">
          Цена:<br/><b>{props.cost}</b>
          <div className='Bittons'>{colr ? <Button variant="outline-secondary" onClick={() => setColr(!colr)}>+</Button>   :    <Button variant="success" onClick={() => setColr(!colr)}>✓</Button>}</div>
        </Card.Text>

      </Card.Body>
    </Card>
    </div>;
}

export default Сard;