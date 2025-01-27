/* eslint-disable react/no-did-update-set-state */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/sort-comp */
/* eslint max-len: ["error", { "code": 400 }] */
/* eslint-disable object-curly-newline */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable arrow-parens */
/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable no-class-assign */
/* eslint-disable object-shorthand */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-confusing-arrow */
/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/* eslint-disable prefer-template */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable operator-linebreak */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-danger */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-else-return */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable  react/self-closing-comp */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable dot-notation */
/* eslint-disable lines-between-class-members */
/* eslint-disable object-curly-spacing */
/* eslint-disable max-len */

import React, { PureComponent } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import '../css/mymodal.css';
import CancelIcon from '@mui/icons-material/Cancel';
import PhoneIcon from '@mui/icons-material/Phone';
class MyModal extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
        };
    } 
    outFunc=(id)=> {
        var tooltip = document.getElementById(id);
        tooltip.innerHTML = 'Copy to clipboard';
    };
    copyFunc=(user,id)=>{
        console.log('I am here');
        const fullName=user?.name?.title+' '+user?.name?.first+' '+user?.name?.last;
        const email=user?.email;
        const cell=user?.cell;
        const homePhone=user?.phone;
        const location=user?.location?.country+', '+user?.location?.city;
        navigator.clipboard.writeText('Full Name: '+fullName+'\nE-mail: '
        +email+'\nCell phone: '+cell+'\nHome phone: '+homePhone+'\nLocation: '+location);
        var tooltip = document.getElementById(id);
        tooltip.innerHTML = 'Copied: ' + fullName+'\'s values!';
    };
    render() {
        const {open,closeModal,user,color}=this.props;
        if(!open) return null;
        return (

            <div className='modal__container'>
                <div className='modal' style={{backgroundColor:color}}>
                    <button onClick={closeModal} style={{color: 'red',marginTop:'0.5%',marginLeft:'0.5%',borderRadius:'10px'}}><CancelIcon></CancelIcon></button>
                    <div className='user__card__container__bigger' data-testid='user-card-container'>
                        <div className='user__card__bigger' data-testid='div-user-card' style={{backgroundColor: color}}>
                            <img className='user__card__picture__bigger' data-testid='user-card-picture' src={user?.picture?.large}/>
                            <div className='user__card__row__bigger'>
                                <PersonIcon className="mui__icons__bigger" data-testid='person-icon'></PersonIcon>
                                <span className='span__class__bigger' data-testid='name-surname-span'>{user?.name?.title} {user?.name?.first} {user?.name?.last}</span>
                            </div>
                            <div className='user__card__row__bigger'>
                                <MailIcon className="mui__icons__bigger" data-testid='mail-icon'></MailIcon>
                                <span className='span__class__bigger' data-testid='email-span'>{user?.email}</span>
                            </div>
                            <div className='user__card__row__bigger'>
                                <PhoneIphoneIcon className="mui__icons__bigger" data-testid='phone-iphone-icon'></PhoneIphoneIcon>
                                <span className='span__class__bigger' data-testid='cell-span'>{user?.cell}</span>
                            </div>
                            <div className='user__card__row__bigger'>
                                <PhoneIcon className="mui__icons__bigger" data-testid='home-phone-icon'></PhoneIcon>
                                <span className='span__class__bigger' data-testid='home-phone-span'>{user?.phone}</span>
                            </div>
                            <div className='user__card__row__bigger'>
                                <LocationOnIcon className="mui__icons__bigger" data-testid='location-on-icon'></LocationOnIcon>
                                <span className='span__class__bigger' data-testid='location-span'>{user?.location?.country}, {user?.location?.city}</span>
                            </div>
                            <div className="tooltip">
                                <button 
                                    style={{borderRadius:'10px'}}                            
                                    onMouseOut={()=>this.outFunc(`myTooltip${user?.login?.sha256}${user?.cell}${user?.phone}`)}
                                    onClick={()=>this.copyFunc(user,`myTooltip${user?.login?.sha256}${user?.cell}${user?.phone}`)}>
                                    <ContentCopyIcon className="mui__icons">
                                    </ContentCopyIcon>
                                    <span className="tooltiptext" id={`myTooltip${user?.login?.sha256}${user?.cell}${user?.phone}`}>Copy to clipboard</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
            
        );
    }
}

export default MyModal;
