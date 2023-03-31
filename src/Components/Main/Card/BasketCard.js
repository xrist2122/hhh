import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import './BasketCard.css'

function BasketCard(props) {
    
    let [colr, setColr] = useState(1);

    return<>
    <div className='CartItems'>
    <Card style={{ width: '325px', height: '140px' }}>  
    <Card.Text className='CartSail' style={{fontSize: 14}}>
        <img src={props.img} style={{ width: '89px', height: '89px'}}/>
        <div className='CartText'>
        <h5>{props.name}</h5>
        <div><p><b>{props.cost}</b></p>  </div>
        <div className='CartButon'>
        <img src="./img/Button" onClick={() => setColr(colr-1)} style={{ width: '32px', height: '32px'}} alt="-"/> <input  id="CartInput"maxLength={2} style={{ width: '32px', height: '32px' }} value={colr} onChange={event => setColr(event.target.colr)}/><img src="./img/ButtonPlus.png" onClick={() => setColr(colr+1)} style={{ width: '32px', height: '32px'}} alt="+"/>
        </div>
        </div>
    </Card.Text>
    
</Card> 
</div>
</>
}
export default BasketCard;