import React, { Component } from 'react';
class AddItem extends Component {
  constructor(props){
    super(props);

    this.state ={
      title: '',
      details: ''
    }
  }
   render(){
     const{title, details }= this.state;
     return (
       <form> 
           {/* <h3> Add Item</h3>  */}
           <div className = "row">
              <div className="col s12 m8 offset-m2">
               {/* <label> Title </label> */}
                <input type = "text" placeholder ="Title" value ={title} onChange ={(event)=>{
                  this.setState({title: event.target.value})
                }}/>
              </div>
           </div>
           <div className = "row">
              <div className="col s12 m8 offset-m2">
                {/* <label> Detail </label> */}
                <input type = "text" placeholder ="Detail" value = {details} onChange={event=>this.setState({details: event.target.value})}/>
              </div>
           </div>        
       </form> 
     )
   }
}

export default AddItem;
