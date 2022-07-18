import React from 'react'
import Rating from '@mui/material/Rating';
function Filter({setsearch,setRate,rate}) {
    
  return (
    <div className='d-flex w-75'>
        <input className='w-100 ms-5' onChange={(e)=>setsearch(e.target.value)} name='title' type="text" id='title' placeholder='Enter keywords...'/>
        <Rating  className='mx-5' size="large"  name="rating" defaultValue={0} precision={0.5} onChange={(event,newvalue)=>setRate(newvalue)} />
    </div>
  )
}

export default Filter