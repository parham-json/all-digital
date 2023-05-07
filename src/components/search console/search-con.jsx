import React , {useState} from 'react'
import "./search-con.css"
import SearchIcon from '@mui/icons-material/Search';
export default function Search() {
const [ value ,valueseter ] =useState('جسنجو کنید')
const [animated , setanimation]=useState('')
function getvalue(event) {
     valueseter(event.target.value)
    console.log(value);
}
function deletevalue() {
  valueseter('')
  setanimation('animated')
  console.log(animated);

}

  return (
    <>
    
    <div className='search-consol' >
    <div className='search-consol-container '><  input className="inp" type="text" value={value} onChange={getvalue} onFocus={deletevalue} />
    <div className={`red-line ${animated}`}></div>
    </div>
    </div>

    </>
  )
}
