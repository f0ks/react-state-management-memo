//import { useState } from 'react'
import Item from "../item";

function List(props: {
                items: string[],
                onDeleteItem: (index: number) => void,
              },
) {

  return (
    <div className="list">
      {props.items.map((item, i) =>
        <Item label={item} index={i} onDeleteItem={props.onDeleteItem}/>
      )}
    </div>
  )
}

export default List
