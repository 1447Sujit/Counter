import { useState } from 'react';
import style from './Counter.module.css'

const Counter = ()=>{

    let a=0
  const [count, setCount] = useState(a)

  function decrease(){
    let dec = count-1
    setCount(dec)
  }
  function reset(){
    let res = 0
    setCount(res)
  }
  function increase(){
    let inc = count+1
    setCount(inc)
  }


  return (
    <div className={style.counter}>
            <div>
              <h1>Counter</h1>
            </div>
            <div><h2>{count}</h2></div>
            <div className={style.buttonBox}>
              <button onClick={decrease}>Decrease</button>
              <button onClick={reset}>Reset</button>
              <button onClick={increase}>Increase</button>
            </div>
    </div>
  )
}

export default Counter;