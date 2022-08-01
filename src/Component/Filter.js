import { Rating } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import {FilterTitle,FilterRate} from '../Redux/movieSlice'

const Filter = () => {
    let dispatch=useDispatch()
  return (
    <div>
        <input onChange={(e)=>dispatch(FilterTitle(e.target.value))} type="text" placeholder='Enter Title' />
        <Rating name="half-rating" defaultValue={0} precision={0.5} onChange={(e,v)=>dispatch(FilterRate(v))} />
    </div>
  )
}

export default Filter