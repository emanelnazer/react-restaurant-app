import React from 'react'
import darkimg from "../../assets/dark-mode.png"
import lightimg from "../../assets/light.png"
const DarkMode = () => {
  const[theme,setTheme]=React.useState(
    localStorage.getItem("theme")?
    localStorage.getItem("theme"): "light"
  );
  const element=document.documentElement;
  React.useEffect(()=>{
    if(theme=="dark"){
      element.classList.add("dark");
      localStorage.setItem("theme","dark");
    }else{
      element.classList.remove("dark");
      localStorage.setItem("theme","light"); 
    }
  },[theme]);
  const changheitem=()=>{
    if(theme=="light"){
      setTheme("dark");
    }else{
      setTheme("light");
    }
  }
  return (
     <>
      <div className='relative'>
       <img
       onClick={changheitem}
       src={lightimg}
       className='w-12 absolute right-0
       z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,1)]
       transition-all duration-300
       '
       />
     <img
     onClick={changheitem}
       src={darkimg}
       className='w-12  
      drop-shadow-[1px_1px_1px_rgba(0,0,0,1)]
       transition-all duration-300
       '
       />

      </div>
       </>
  )
}

export default DarkMode