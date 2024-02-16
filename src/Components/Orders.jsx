import React from 'react'

const Orders = ({ordersList, setOrdersList}) => {
  return (
    <>
    <div>
        {
            ordersList.map(i => <div key={i.id}>{i}</div>)
        }
        </div></>
  )
}

export default Orders