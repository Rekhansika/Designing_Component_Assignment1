// write the component code here
import React from 'react'

const usercard = () => {

    const profilePhoto = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjHNf3WkJp7E5H7BR86f5RYuPQ50iBl9_b6A&s"; 
    const name = "Rekha";
    const email = "rekha02@gmail.com" ;
    const phoneNumber = "8889996668";
    const address = "Rajamundry";
  return (
    <div className='usercard'>
      <img src={profilePhoto} alt="Image" />
      <p>{name}</p>
      <p>{email}</p>
      <p>{phoneNumber}</p>
      <p>{address}</p>
    </div>
  )
}

export default usercard

