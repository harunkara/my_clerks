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
    let loadingRef=useRef(null);
    const [loaderVisiblity,setLoaderVisibility]=React.useState(false);

    const responsive = {
        0: { items: 3 },
        1023: {items: 4},
    };

    const changeColor=()=>{
        console.log('changeColor',index);
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
        console.log('useEffect [stateRandomUsers, color]',index);
        const arrayRandomUsers=[];
        Object.entries(stateRandomUsers).map(randomUser=>arrayRandomUsers.push(<UserCard color={color} user={randomUser[1]}></UserCard>));
        arrayRandomUsers.push(<div className='loader__container'><div className='loader' id='loader' ref={loadingRef}></div></div>);
        setItems(arrayRandomUsers);
    }, [stateRandomUsers, color]);   

    if(loaderVisiblity===true){
        setLoaderVisibility(false);
        getUsers();
    }
    const onSlideChanged=(e)=>{
        setIndex(e.item);
        console.log('onSlideChanged',index);
        let observer= new IntersectionObserver((entries)=>{
            const entry=entries[0];
            if(entry.isIntersecting===true){
                setLoaderVisibility(true);
                setIndex(e.item);
                console.log('IntersactionObserver',index);
            } 
        });
        observer.observe(loadingRef.current);
    };

    return (
        <div>
            <h1 style={{display: 'flex', justifyContent: 'center'}}>My Clerks</h1>
            <div className='color__picker__container'>
                <span>Card background color:</span>
                <input style={{marginLeft: '1%', borderRadius: '12px'}} 
                    type="color" 
                    className='color__picker'
                    data-testid='color-picker'
                    id='color__picker'
                    defaultValue={'#554398'}
                    onChange={changeColor}>
                </input>
            </div>
            <AliceCarousel mouseTracking items={items} disableButtonsControls disableDotsControls responsive={responsive} controlsStrategy="alternate" id={'carousel'} onSlideChanged={onSlideChanged} activeIndex={index}>
            </AliceCarousel>
        </div>
    );
};


export default CarouselContainer;
