import React, {useEffect, useState} from "react";

function Planeteer( {name, fromUSA, born, bio, quote, pictureUrl, twitter}) {

  ///props passed successfully from container
  // console.log(key)
  // console.log(name)
  // console.log(fromUSA)
  // console.log(born)
  // console.log(quote)
  // console.log(pictureUrl)
  // console.log(twitter)

  function setBase (loc) {
    if (loc = fromUSA) {
      return "USA Based"
    } else {
      return "Working overseas"
    }
  }



  const [display, setDisplay] = useState("true")
  
  function handleDisplay() {
setDisplay(!display)
// console.log(display)
// display stat working successfully
  }


  return (
    <li className="cards__item">
      <div onClick={handleDisplay} className="card">
        <img
          src={pictureUrl}
          alt={name}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{name}</div>
          <p className="card__text">
            {display ? quote: bio }
            </p>
          <div className="card__detail">
            <p>{twitter}</p>
            <p>
              {setBase(fromUSA)}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
