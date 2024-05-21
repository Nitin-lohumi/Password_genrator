import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App(){
 const [lenght,setLenght]=useState(8);
 const [numberAllow,setNumberAllow]=useState(false);
 const [charAllow,setcharAllow]=useState(false);
 const [password,setPassword]=useState("");
 const passwordRef = useRef(null);

 const passwordGenrator=useCallback(()=>{
 let pass="";
 let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
 if(numberAllow) str+="0123456789"
 if(charAllow) str+="!@#$%^&*()"
 for(let i=1; i<=lenght; i++){
  let char=Math.floor(Math.random() * str.length+1);
  pass += str.charAt(char);
 }
 setPassword(pass);
 },[lenght,numberAllow,charAllow,setPassword]);

useEffect(()=>{
  passwordGenrator()
},[lenght,numberAllow,charAllow,passwordGenrator])

  return (
    <>
     {/* <h1 className='text-5xl text-center text-white'>password genrator</h1> */}
     <div className='w-full max-w-md mx-auto rounded-lg px-3 py-3 my-8 text-orange-500 shadow-md bg-gray-800'>
      <h1 className='text-white my-3 text-center'>password genrator</h1>
     <div className="bg-gray-800 flex shadow rounded-lg overflow-hidden mb-4 ">
      <input 
      type="text"
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      ref={passwordRef}
      readOnly />
     </div>
     <div className='flex text-sm gap-x-2'>
      <div className='flex item-center gap-x-1'>
        <input
         type="range" 
         min={6}
         max={30}
         value={lenght}
         className='cursor-pointer'
         onChange={(e)=>{setLenght(e.target.value)}}
        />
        <label>lenght: {lenght} </label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
         defaultChecked={charAllow}
         id="characterInput"
         onChange={ ()=>{
          setcharAllow((prev)=>!prev);
         }}
         />
         <label htmlfor="characterInput">character</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
         defaultChecked={numberAllow}
         id="numberInput"
         onChange={ ()=>{
          setNumberAllow((prev)=>!prev);
         }}
         />
         <label htmlfor="characterInput">number</label>
      </div>
     </div>
     </div>
    </>
  )
}

export default App
