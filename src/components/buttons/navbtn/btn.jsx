import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import "./btn.css"
import {Link, Route} from 'react-router-dom'
import Button from "@mui/material/Button";
export default function Btn(props) {
const { btn , route , children ,   }= props

  return (
    <>
    
    <Button variant="text" color="error" className='btn' style={{backgroundColor:"rgba(255, 0, 0, 0.080)"}}>
    <Link to={route} style={{textDecoration:"none"}}>{children} {btn}</Link></Button>
    
    
    </>
  )
}
