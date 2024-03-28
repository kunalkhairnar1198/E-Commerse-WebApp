import React from 'react'
import Availableproducts from '../../Products/Availableproducts'

const Store = (props) => {
  console.log('hello world')
  return (
    <div>
      <Availableproducts onOpenCarthandler={props.onOpenCarthandle}/>
    </div>
  )
}

export default Store
