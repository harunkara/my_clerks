/* eslint-disable react/prop-types */
import React from 'react';
import '../css/usercard.css';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
const UserCard=(props)=> {
    const {user, color}=props;
    const outFunc=(id)=> {
        var tooltip = document.getElementById(id);
        tooltip.innerHTML = 'Copy to clipboard';
    };
    const copyFunc=(user,id)=>{
        const fullName=user?.name?.first+' '+user?.name?.last;
        const email=user?.email;
        const cell=user?.cell;
        const location=user?.location?.city;
        navigator.clipboard.writeText('Full Name: '+fullName+'\nE-mail: '+email+'\nCell phone: '+cell+'\nLocation: '+location);
        var tooltip = document.getElementById(id);
        tooltip.innerHTML = 'Copied: ' + fullName+'\'s values!';
    };
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
                <div className="tooltip">
                    <button                             
                        onMouseOut={()=>outFunc(`myTooltip${user?.login?.sha256}${user?.cell}`)}
                        onClick={()=>copyFunc(user,`myTooltip${user?.login?.sha256}${user?.cell}`)}>
                        <ContentCopyIcon className="mui__icons">
                        </ContentCopyIcon>
                        <span className="tooltiptext" id={`myTooltip${user?.login?.sha256}${user?.cell}`}>Copy to clipboard</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default UserCard;