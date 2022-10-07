import React from 'react'
import '../css/usercard.css'

const UserCard=(props)=> {
  const {user}=props;

  return (
    <div className='user__card'>
        {console.log('photo',user?.picture?.large)}
        <img src={user?.picture?.large}></img>
        <div>Name: {user?.name?.first} {user?.name?.last}</div>
        <div>Email: {user?.email}</div>
        <div>Phone: {user?.cell}</div>
        <div>Location: {user?.location?.city}</div>
    </div>
  )
}
export default UserCard