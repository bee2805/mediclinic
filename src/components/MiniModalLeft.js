import React from 'react'
import ErrorAsset from '../assets/icons/error.svg';

const MiniModalLeft = (props) => {
  return (
    <div className='alertMiniModal'>
      <p>{props.message}</p>
      <img src={ErrorAsset} alt="error asset"/>
    </div>  
  )
}

export default MiniModalLeft;