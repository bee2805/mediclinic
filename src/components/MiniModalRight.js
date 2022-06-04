import React from 'react'
import ErrorAsset from '../assets/icons/error.svg';

const MiniModalRight = (props) => {
  return (
    <div className='alertMiniModalRight'>
        <img src={ErrorAsset} alt="error asset"/>
        <p>{props.message}</p> 
    </div>
  )
}

export default MiniModalRight;