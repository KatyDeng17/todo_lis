import React, {Component} from 'react';
import '../assets/css/app.css';
import 'materialize-css/dist/css/materialize.min.css'; //its a node_modules so we don't need to use 
import List from './list';
import AddItem from './add-item';
// import logo from '../assets/images/logo.svg';
import ListData from '../helpers/list_data';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            listData: []
        };
    }
    componentDidMount(){
        this.getListData();
    }
    AddItem(item){
        this.setState({
            listData: [item, ...this.state.listData]
        })
    }
     
    getListData(){
        setTimeout(()=>{
            this.setState({listData: ListData })
        },500);
       
    }
    render (){
        return(
        <div className = "container" >
            <h1 className = "center" > To Do List </h1>
            <AddItem add ={this.AddItem.bind(this)}/>
            <List data={this.state.listData}/>
        </div>
        );
    }
} 

    


export default App;
