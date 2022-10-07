import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomUsersAction } from '../actions/getRandomUsersAction';
import '../css/carouselcontainer.css'
// import {Carousel} from 'react-responsive-carousel'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import UserCard from '../components/UserCard';
const CarouselContainer = (props) => {
  const dispatch = useDispatch();
  const randomUsers = useSelector((state) =>state.randomUsers.data);
  const responsive = {
    0: { items: 3 },
    568: { items: 3 },
    2048: { items: 5 },
};
  useEffect(() => {
    dispatch(getRandomUsersAction('https://randomuser.me/api/?results=10'))
    }, []);
    const items = [];
    Object.entries(randomUsers).map(deneme=>items.push(<UserCard user={deneme[1]}></UserCard>));
    console.log("here",items);

  return (
<div>
    <AliceCarousel mouseTracking items={items} responsive={responsive} controlsStrategy="alternate">
    </AliceCarousel>
    </div>
    )
}


export default CarouselContainer
