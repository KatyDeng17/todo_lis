import React from 'react';
import ListData from '../helpers/list_data';
export default props =>{
  console.log('List Data: ', ListData);
  const listElements = ListData.map((iterm, index)=> {
       return <li className="collection-item" key = {index}> {iterm.title} </li>
    })
   return (
     <div> 
        <h3> List will be here </h3> 
        <ul className="collection">
          {listElements}
        </ul>

      </div>
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