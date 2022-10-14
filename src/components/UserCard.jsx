/* eslint-disable react/prop-types */
import React from 'react';
import '../css/usercard.css';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const UserCard=(props)=> {
    const {user, color}=props;

    return (
        <div className='user__card__container' data-testid='user-card-container'>
            <div className='user__card' data-testid='div-user-card' style={{backgroundColor: color}}>
                <img className='user__card__picture' data-testid='user-card-picture' src={user?.picture?.large}/>
                <div className='user__card__row'>
                    <PersonIcon className="mui__icons" data-testid='person-icon'></PersonIcon>
                    <span data-testid='name-surname-span'>{user?.name?.first} {user?.name?.last}</span>
                </div>
                <div className='user__card__row'>
                    <MailIcon className="mui__icons" data-testid='mail-icon'></MailIcon>
                    <span data-testid='email-span'>{user?.email}</span>
                </div>
                <div className='user__card__row'>
                    <PhoneIphoneIcon className="mui__icons" data-testid='phone-iphone-icon'></PhoneIphoneIcon>
                    <span data-testid='cell-span'>{user?.cell}</span>
                </div>
                <div className='user__card__row'>
                    <LocationOnIcon className="mui__icons" data-testid='location-on-icon'></LocationOnIcon>
                    <span data-testid='location-span'>{user?.location?.city}</span>
                </div>
            </div>
        </div>
    );
};
export default UserCard;