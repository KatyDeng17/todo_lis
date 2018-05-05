import React from 'react';
// import ListData from '../helpers/list_data';
const  List = props => {
  if(!props.data.length){
    return <h1 className="center grey-text text-lignten-2">No To Do Item</h1>
    }
  // if(!props.data.length) return <h1 className="center grey-text text-lignten-2">No To Do Item</h1>

  // console.log('List Data: ', ListData);
  console.log('List Data: ', props.data);
  // const listElements = ListData.map((item, index)=> {
    const listElements = props.data.map((item, index)=> {
       return (
          <li className="collection-item" key = {index}> 
          <div className="col s10">
          {item.title} 
          </div>
          <div className ="col s2 right-align">
             <button onClick={()=>{
                 props.delete(item._id)}} 
                className = "btn red darken-2">delete
                </button>
          </div>
          </li>
        )
    })
  return (
      <ul className ="collection">
        {listElements}
      </ul>
  )
}

export default List;

// same as above
//const List = (props) =>{
//   return (
//     <div> 
//        <h3> List will be here</h3> 

//      </div>
//   )
// }