//import { useState } from 'react'


function Counter(props: {count: number}) {
  //const [count, setCount] = useState(0)

  return (
    <div className="counter">Number of items: {props.count}</div>
  )
}

export default Counter;