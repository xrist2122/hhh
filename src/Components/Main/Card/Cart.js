import './Cart.css'
import { useState } from 'react';
import { Stack } from 'react-bootstrap';
import BasketCard from './BasketCard.js';
function Cart(props) {

    const [basket, setBasket] = useState(false);
 
    let carpets = [
        {id: 1, name: "cat” " , cost: "1.500 рублей" , img: "img/tig.jpg"},
        {id: 2, name: "dog", cost: "2.500 рублей" , img: "img/rabb.jpg"},
        {id: 3, name: "bear " , cost: "10.000 рублей" , img: "img/bee.jpg"},
        
    ]
    
    let cards = carpets.map(carpet => {
        return <BasketCard name = {carpet.name} cost={carpet.cost} img={carpet.img}/>
    })

    let styleOverflow = {}
    let styleSideBlock = {}

    if (props.openCart === true) {
        styleOverflow = { width: '100%' };
        styleSideBlock = { width: '385px' };
    }
    else {
        styleOverflow = { width: '0' };
        styleSideBlock = { width: '0' };
    }
    let content = basket ?<>< img src='./img/kr.jpg' style={{ width: '320px', height: '320px'}} /></> :  
<div className="BasketCards">
{cards}
</div>
    return <>
        <div className='Overflow' style={styleOverflow} onClick={() => props.onOpenCart(false)}></div>
        <div className='SideBlock' style={styleSideBlock}>
        <Stack direction="horizontal" gap={3} id='topCard'>
            <div className="element"><h3>Корзина</h3></div>
            <div className="element ms-auto" ><img src='img/kr.jpg' alt="CloseButton" onClick={() => props.onOpenCart(false)} /></div>
        </Stack> 
        {content}
<div className='MainEnd'>
<p>Итого:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ14.000 р</p>
<p>Налог:10%ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ12.700 р</p>
<img src='./img/buuuton' onClick={()=>setBasket(!basket)} id="Imagef" style={{ width: '320px', height: '55px'}} />

</div>

        </div> 
        
        </>
}
export default Cart;