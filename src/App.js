import './App.css';
import { useState } from "react";
function App() {
  const [link,setLink] = useState("")
  const changeLink = (e) => {
    setLink(e.target.value);
};
  return (
<div className='wrap'>
  <input onChange={changeLink} type="text" />
  <button onClick={()=>{
    window.open(`https://yandex.ru/search/?text=${link}&lr=16`)
  }}>Найти</button>
</div>
  );
}

export default App;
