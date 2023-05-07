
import React , {useState ,useEffect} from 'react'
import "./slider.css"
import second from '../buttons/navbtn/btn'
import Btn from '../buttons/navbtn/btn'
import { Button } from '@mui/material'

export default function Slider() {


const [indexIng, setIndexImg] = useState(null)
  const [imgs , setImages]=useState([])
  const [img ,setimg]=useState(null)

useEffect(() => {
  setIndexImg(0)
  setImages(["1.png","2.png","3.gif","4.png"])
  setimg(imgs[indexIng])
  console.log("1");
}, [])

useEffect(() => {
  
  setimg(imgs[indexIng])
}, [indexIng])
useEffect(() => {
  // Change the image every 2 minutes
  const intervalId = setInterval(() => {
    if (indexIng < 3 && indexIng > -1) {
      setIndexImg(indexIng + 1);
    } else {
      setIndexImg(0);
    }
  }, 3000);

  return () => clearInterval(intervalId);
}, [indexIng]);



const next =()=> {
  if( indexIng <3 && indexIng>-1  ) { 
    setIndexImg(indexIng + 1)}
  else{  setIndexImg(0) }
}
const prev=()=>{
if (indexIng<4 && indexIng>0) {
  setIndexImg(indexIng-1)

} else {
  setIndexImg(3)
}

}


  return (
    <div className='parent-slider'>
          <Button className='next'  onClick={next}style={{width:50 , height:50 ,borderRadius:"50%" ,fontSize:30 , backgroundColor:"rgba(255, 0, 0, 0.083)" , color:"rgb(2, 2, 104)"}}  >&lt;</Button>
 <img src={`../../public/slider/${img}`} alt="" />
      <Button className='prev' style={{width:50 , height:50 ,borderRadius:"50%" ,fontSize:30 , backgroundColor:"rgba(255, 0, 0, 0.083)" , color:"rgb(2, 2, 104)"}} onClick={prev}>&gt;</Button>
    </div>
  )
}
