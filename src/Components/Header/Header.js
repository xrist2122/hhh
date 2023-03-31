import Stack from 'react-bootstrap/Stack';
import './Header.css'

function Header(props) {

    return <div className='mainHeader'>

    <Stack direction="horizontal" gap={3}>
    <div className='leftHeader'>
      <img src="./img/zac.jpg" width={40} height={40}/>
      <div className='leftHeaderText'>
      <h1>TOY'S</h1>
      <p>Магазин мягких игрушек</p>
      </div>
      </div>

      <div className='rightHeader ms-auto'>
      <img src="/img/icons8-полная-корзина-48.png" width={20} height={20} onClick={() => props.onOpenCart()}/>
      <span>50.000 рублей</span>
      <img src="/img/U" width={20} height={20}/>
      <img src="/img/kk" width={20} height={20}/>
      </div>
      </Stack>
    </div>

  }

export default Header