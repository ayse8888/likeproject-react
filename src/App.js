import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {cardDatas} from './data/cardDatas'
import Card from './components/Card'

function App() {
  const colSize = "4"
  const [data,setData] = useState(null)
  useEffect(() => {
    localStorage.setItem("counter",0)
    setData(cardDatas)
  }, []) // neler değişecekse bu array içinde yazıyoruz. herhangi bir şey vermezsek bir kere çalışıyor bir daha çalışmıyor

  const likeHandler = (e,id) => {
    let target = e.target.className
    let index;

    if(target === "far fa-thumbs-up mx-3"){
      index = data.findIndex(item => {
        return id === item.id
      })
      let likeButton = data[index];
      likeButton.like++
    }

    else if(target === "far fa-thumbs-down"){
      index = data.findIndex(item => {
        return id === item.id
      })
      let likeButton = data[index];
      likeButton.like--
    }

    let count = Number(localStorage.getItem("counter"))
    localStorage.setItem("counter",count + 1)
    setData([...data])
    e.preventDefault()
  }

  const cardList = cardDatas.map(item => (
    <div className={`col-sm-${colSize} mb-2`}>
    <Card id={item.id} name={item.name} url={item.url} like={item.like} likeFunction={likeHandler}/>
    </div>
  ))
  
  return (
      <div>
        <div className ="container">
          <div className="row">{cardList}</div>
        </div>
      </div>
  );
}



export default App;
