import { useState } from "react";
import './itemCounter.css'

interface Props {
    name: string,
    quantity?: number }

const ItemCounter = ({name, quantity = 1} : Props) => {

    const [count, setCount] = useState(quantity);    

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleSubs = () => {
        if(count===1)
            return

        setCount(count - 1)
    }

  return (
    <section
     className="item-row"
    >
      <span style={{ width: 150 }}>{name}</span>
      <button onClick={handleAdd}>+1</button>
      <span>{count}</span>
      <button onClick={handleSubs}>-1</button>
    </section>
  );
};

export default ItemCounter;
