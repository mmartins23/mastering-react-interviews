import React from 'react'

const Events = () => {
    const getData = () => {
        console.log("Function Called ...")
    }
  return (
    <div>
        <button onClick={getData}>Get Data</button>
        <button onClick={getData()}>Get Data</button>
    </div>
  )
}

export default Events;