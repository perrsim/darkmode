import React, {useEffect, useState} from 'react';
import './App.css';
import Article from './Articolo';
import data from './data';


// const test = localStorage.getItem("theme");
// console.log(test)

const getFromLocalStorage = () => {
  if(localStorage.getItem("theme")){
    return localStorage.getItem("theme");
  }else{
    return "light-mode";
  }
}


function App() {
  const[theme, setTheme]=useState(getFromLocalStorage());

  const cambiatema = () => {
    if(theme === "light-mode"){
      setTheme("dark-mode")
    }else{
      setTheme("light-mode")
    }
  }

  useEffect(()=>{
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  },[theme]);
  console.log(localStorage.getItem)

  return (
    <section className='section-center'>
    <div className="container">
       <button className="btn" onClick={cambiatema}>
          Cambia
        </button>
      <section className="article-section">
          {data.map((el)=>(
            <Article key={el.id} {...el}/>
          ))}
      </section>
    </div>
    </section>
  )
};

export default App;


{/* <section className="article-section">
{data.map((el) => (
  <Articolo key={el.id} {...el} />
))}
</section> */}