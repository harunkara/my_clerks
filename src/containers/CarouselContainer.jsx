import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomUsersAction } from '../actions/getRandomUsersAction';
import '../css/carouselcontainer.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import UserCard from '../components/UserCard';

const CarouselContainer = () => {
    const dispatch = useDispatch();

    const [color,setColor]=React.useState('#554398');
    const [items,setItems]=React.useState([]);
    const [stateRandomUsers,setStateRandomUsers]=React.useState([]);
    const [loaderVisibility,setLoaderVisibility]=React.useState(false);

    const randomUsers = useSelector((state) =>state.randomUsers.data);

    let stateRandomUsersRef=useRef([]);
    let loadingRef=useRef(null);
    

    const changeColor=()=>{
        setColor(document.getElementById('color__picker').value);
    };

    const getUsers=()=>{
        dispatch(getRandomUsersAction('https://randomuser.me/api/?results=10'));
        stateRandomUsersRef.current=stateRandomUsers;
    };
  
    let options={
        root: null,
        rootMargin:'0px',
        treshold: 1.0,
    };
    
    const callBackFunc=(entries)=>{
        const entry=entries[0];
        if(entry.isIntersecting){
            setLoaderVisibility(true);
        }
    };

    if(loaderVisibility===true){
        setLoaderVisibility(false);
        getUsers();
    }

    useEffect(() => {
        // dispatch(getRandomUsersAction('https://randomuser.me/api/?results=10'));
        // setStateRandomUsers(randomUsers);
        const observer=new IntersectionObserver(callBackFunc,options);
        const elementToObserve = document.querySelector('#loader');
        observer.observe(elementToObserve);
    }, []);

    useEffect(() => {
        let all=[];
        all=[...stateRandomUsersRef.current,...randomUsers];
        setStateRandomUsers(all);
    }, [randomUsers]);

    useEffect(() => {
        const arrayRandomUsers=[];
        Object.entries(stateRandomUsers).map(randomUser=>arrayRandomUsers.push(<UserCard color={color} user={randomUser[1]}></UserCard>));
        setItems(arrayRandomUsers);
    }, [stateRandomUsers, color]);   

    const slider=document.querySelector('.myCarousel');
    if(slider){
        // const slider=document.querySelector('.myCarousel');
        let isDown=false;
        let startX;
        let scrollLeft;
    
        slider.addEventListener('mousedown',(e)=>{
            isDown=true;
            startX=e.pageX-slider.offsetLeft;
            scrollLeft=slider.scrollLeft;
        });
        slider.addEventListener('mouseleave',()=>{
            isDown=false;
        });
        slider.addEventListener('mouseup',()=>{
            isDown=false;
        });
        slider.addEventListener('mousemove',(e)=>{
            if(!isDown) return;
            e.preventDefault();
            const x=e.pageX-slider.offsetLeft;
            const walk=x-startX;
            slider.scrollLeft= scrollLeft-walk;
        });
    }

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
            <div className="myCarousel" id="myCarousel" onClick={scroll}>
                {items.map(item=>
                    (<>
                        <div className='loader__container'>
                            {item}
                        </div>
                    </>)
                )}
                <div className='loader__container'>
                    <div className='loader' id='loader' ref={loadingRef}></div>
                </div>
            </div>
        </div>
    );
};


export default CarouselContainer;
