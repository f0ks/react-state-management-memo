//import { useState } from 'react'


import React, {useState} from "react";

function AddItem(props: {
  onAddItem: (text: string) => void,
}) {
  const [text, setText] = useState<string>("");

  return (
    <div className="add-item">
      <input type="text" onInput={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}/>
      <button onClick={() => props.onAddItem(text)}>add Item</button>
    </div>
  )
}

export default AddItem
