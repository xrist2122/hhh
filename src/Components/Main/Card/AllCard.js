import Stack from 'react-bootstrap/Stack';
import Card from './Card.js';
import './AllCard.css'

function AllCards() {

let carpets = [
    {id: 1, name: "cat " , cost: "1.500 рублей" , img: "img/tig.jpg"},
    {id: 2, name: "dog " , cost: "2.500 рубля" , img: "img/rabb.jpg"},
    {id: 3, name: "bear” " , cost: "10.000 рублей" , img: "img/bee.jpg"},
    {id: 4, name: "b", cost: "2.000 рублей" , img: "img/by.jpg"},
    {id: 0, name: "b", cost: "2.000 рублей" , img: "img/pand.jpg"},
    {id: 1, name: "b", cost: "2.000 рублей" , img: "img/res.jpg"},
    {id: 2, name: "b", cost: "2.000 рублей" , img: "img/rain.jpg"},
    {id: 3, name: "b", cost: "2.000 рублей" , img: "img/cat.jpg"},
    {id: 4, name: "b", cost: "2.000 рублей" , img: "img/cow.jpg"},
    {id: 0, name: "b", cost: "2.000 рублей" , img: "img/pig.jpg"},
    {id: 1, name: "b", cost: "2.000 рублей" , img: "img/pig.jpg"},
    {id: 2, name: "b", cost: "2.000 рублей" , img: "img/pig.jpg"},
    {id: 3, name: "b", cost: "2.000 рублей" , img: "img/pig.jpg"},
    {id: 4, name: "b", cost: "2.000 рублей" , img: "img/pig.jpg"},
    {id: 0, name: "b", cost: "2.000 рублей" , img: "img/pig.jpg"},
    {id: 1, name: "b", cost: "2.000 рублей" , img: "img/pig.jpg"},
    {id: 2, name: "b", cost: "2.000 рублей" , img: "img/pig.jpg"},
    {id: 3, name: "b", cost: "2.000 рублей" , img: "img/pig.jpg"},
    {id: 4, name: "b", cost: "2.000 рублей" , img: "img/pig.jpg"},
]

let cards = carpets.map(carpet => {
    return <Card name = {carpet.name} cost={carpet.cost} img={carpet.img}/>
})

    return (
        <div className="MainContent">
        <Stack direction="horizontal" gap={3}>
            <h1>toy</h1>
            <span>toy: {carpets[3].id}</span>
            <input className="ms-auto" />
        </Stack>

        <div className="Cards">
      {cards}
      </div>
</div>
    );
}
export default AllCards;