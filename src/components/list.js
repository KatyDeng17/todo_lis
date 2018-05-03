import React from 'react';
import ListData from '../helpers/list_data';
export default props => {
  console.log('List Data: ', ListData);
  const listElements = ListData.map((item, index)=> {
       return <li className="collection-item" key = {index}> {item.title} </li>
    })
  return (
      <ul className ="collection">
        {listElements}
      </ul>
  )
}

// same as above
// export default (props) =>{
//   return (
//     <div> 
//        <h3> List will be here</h3> 

//      </div>
//   )
// }