import React from 'react'
import '../css/usercard.css'

const UserCard=(props)=> {
  const {user}=props;

  return (
<div className='user__card__container'>
<div className='user__card'>
      {console.log("girdim")}
      <img className='user__card__picture' src={user?.picture?.large}/>
        <div style={{wordWrap: 'break-word'}}>
        <div style={{fontSize: '0,8vw'}}>Name: {user?.name?.first} {user?.name?.last}</div>
        <span style={{fontSize:'0.9rem', wordWrap: 'break-word'}}>Email: {user?.email}</span>
        <div style={{fontSize: '0,8vw'}}>Phone: {user?.cell}</div>
        <div style={{fontSize: '0,8vw'}}>Location: {user?.location?.city}</div>
        </div>
    </div>
</div>
  )
}
export default UserCard