import React from 'react'

const style = {
    width : "18rem",
}

const Card = ({id,name,url,like,likeFunction}) => {
    console.log()
    return (
        <div className="card mx-auto" style={style} onClick={(e) => likeFunction(e,id)}>
          <img src={url} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{like}
              <i className="far fa-thumbs-up mx-3" style={{cursor:"pointer"}}></i>
              <i className="far fa-thumbs-down" style={{cursor:"pointer"}}></i>
            </p>
          </div>
      </div>
    )
}

export default Card;