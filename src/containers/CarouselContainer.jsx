import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomUsersAction } from '../actions/getRandomUsersAction';
import '../css/carouselcontainer.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import UserCard from '../components/UserCard';

const CarouselContainer = () => {
    const dispatch = useDispatch();

    const [color,setColor]=React.useState('#554398');
    const [items,setItems]=React.useState([]);
    const [stateRandomUsers,setStateRandomUsers]=React.useState([]);
    const [index,setIndex]=React.useState(0);
    const randomUsers = useSelector((state) =>state.randomUsers.data);
    let stateRandomUsersRef=useRef([]);

    const responsive = {
        0: { items: 3 },
        1023: {items: 4},
    };

    const changeColor=()=>{
        setColor(document.getElementById('color__picker').value);
    };

    const getUsers=()=>{
        dispatch(getRandomUsersAction('https://randomuser.me/api/?results=10'));
        stateRandomUsersRef.current=stateRandomUsers;
    };

    useEffect(() => {
        dispatch(getRandomUsersAction('https://randomuser.me/api/?results=10'));
        setStateRandomUsers(randomUsers); 
    }, []);

    useEffect(() => {
        let all=[];
        all=[...stateRandomUsersRef.current,...randomUsers,];
        setStateRandomUsers(all);
    }, [randomUsers]);

    useEffect(() => {
        const arrayRandomUsers=[];
        Object.entries(stateRandomUsers).map(randomUser=>arrayRandomUsers.push(<UserCard color={color} user={randomUser[1]}></UserCard>));
        arrayRandomUsers.push(<div className='loader__container'><div className='loader'></div></div>);
        setItems(arrayRandomUsers);
    }, [stateRandomUsers, color]);   
    
    const onSlideChange=(e)=>{
        setIndex(e.item);
        if((document.querySelectorAll('.alice-carousel__next-btn-item.__inactive').length>0)||(e?.isNextSlideDisabled)){
            getUsers();
            setIndex(e.item);
        }
    };

    return (
        <div>
            <h1 style={{display: 'flex', justifyContent: 'center'}}>My Clerks</h1>
            <div className='color__picker__container'>
                <span>Card background color:</span>
                <input style={{marginLeft: '1%', borderRadius: '12px'}} 
                    type="color" 
                    className='color__picker'
                    id='color__picker'
                    defaultValue={'#554398'}
                    onChange={changeColor}>
                </input>
            </div>
            <AliceCarousel mouseTracking items={items} disableDotsControls responsive={responsive} controlsStrategy="alternate" id={'carousel'} onSlideChanged={onSlideChange} activeIndex={index}>
            </AliceCarousel>
        </div>
    );
};


export default CarouselContainer;
