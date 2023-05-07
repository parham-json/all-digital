import React from 'react'
import {useState} from 'react'
import "./header.css"
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Search from './components/search console/search-con'
import Btn from "./components/buttons/navbtn/btn";
import { useActionData } from 'react-router-dom';
import {Link} from 'react-router-dom'
export default function Header() {
const [btn , setbtn]=useState({btnName:
  ['سبد خرید ' , ' ثبت نام/ ورود','دسته بندی کالاها','جدیدترین ها','جستجوی پیشرفته','مرکز پشتیبانی','راهنما و مقررات','تماس با ما' , " درباره آل دیجیتال"]})
const [icon,seticon ]=useState({icon:["ShoppingCartIcon" ,"PersonIcon"]})
const [route , routing]=useState({route:["/About" ,"/Search","Support","Clasification","Latest","contact"]})
// const[icons,seticon]


  return (
    <> <div className='header'>
<div className='upside'>
<div className='btn-container'>
    <Btn btn= {btn.btnName[0]} icon={icon.icon[0]}>  <ShoppingCartIcon></ShoppingCartIcon>  </Btn>
    <Btn btn={ btn.btnName[1] } icon={icon.icon[1]}> <PersonIcon></PersonIcon></Btn></div>
<Search></Search>
    <div className='logo-container'><Link to="./"><img className='logo' src="./public/logo/1.png" alt="" /></Link></div>
</div>
<div className='downside'> <div className='downside-holder'>
 <Btn btn= {btn.btnName[2]}  ><MenuIcon></MenuIcon></Btn>                     
 <Btn btn= {btn.btnName[3]} route={route.route[4]} ></Btn>
 <Btn btn= {btn.btnName[4]} route={route.route[1]} ></Btn>
 <Btn btn= {btn.btnName[5]} route={route.route[2]}></Btn>
 <Btn btn= {btn.btnName[6]} route={route.route[5]}></Btn>
 <Btn btn= {btn.btnName[7]} route={route.route[0]}></Btn>
 </div>
</div>
</div>

    </>
  )
}
