import {useState} from "react"


import Counter from "../counter";
import List from "../list";
import AddItem from "../add-item";

function WrapperNoStateManagement() {
  const [items, setItems] = useState(["test item"])

  const addItemHandler = (item: string) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setItems([...items, item]);
  }

  const deleteItemHandler = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }

  return (
    <div className="wrapper">
      <h2>Wrapper no state management</h2>

      <Counter count={items.length}/>

      <List items={items} onDeleteItem={deleteItemHandler}/>

      <AddItem onAddItem={addItemHandler}/>

    </div>
  )
}

export default WrapperNoStateManagement
