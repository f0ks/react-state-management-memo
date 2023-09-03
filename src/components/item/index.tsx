//import { useState } from 'react'


function Item(props: {
  label: string, index: number,
  onDeleteItem: (index: number) => void
}) {
  //const [count, setCount] = useState(0)

  return (
    <div className="item">{props.label}
      <button onClick={() => props.onDeleteItem(props.index)}>X</button>
    </div>
  )
}

export default Item
