import React, { Component } from 'react';
class AddItem extends Component {
  constructor(props){
    super(props);

    this.state ={
      title: '',
      details: ''
    }
  }
  handleAddItem (event){
    event.preventDefault();
    console.log("Item: ", this.state);
    this.props.add(this.state)
  }

   render(){
     const{title, details } = this.state;
     return (
       <form onSubmit = {this.handleAddItem.bind(this)}> 
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
           <div className = "row">
              <div className = "right-align col s12 m8 offset-m2"> 
                  <div className = "right-align">
                        <button className ="btn purple darken-2">Add Item</button>
                  </div> 
              </div> 
           </div>     
       </form> 
     )
   }
}

export default AddItem;
