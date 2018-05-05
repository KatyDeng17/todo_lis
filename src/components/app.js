import React, {Component} from 'react';
import '../assets/css/app.css';
import 'materialize-css/dist/css/materialize.min.css'; //its a node_modules so we don't need to use 
import List from './list';
import AddItem from './add-item';
// import logo from '../assets/images/logo.svg';
import ListData from '../helpers/list_data';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com'
const API_KEY = '?key=kahahaheho1234';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            listData: [] //this.state is a object with a key as listData and [] as value; 
        };
    }
    componentDidMount(){
        this.getListData();
        // this.getListData = setTimeout(()=>{
        //     this.setState({listData: ListData})
        // },800);

    }
        // getListData(){
    //     setTimeout(()=>{
    //         this.setState({listData: ListData })
    //     },500);
       
    // }
//async is the new JS syntex
   async getListData(){
       try{
        // const response = await axios.get(`${asBASE_URL}/todos${API_KEY}`) this will show error

        const response = await axios.get(`${BASE_URL}/todos${API_KEY}`)
        console.log(response.data.todos);
        this.setState({
            listData: response.data.todos
       });
       }catch(err){
           console.log('ERROR: ', err.message);
       }
       

    }
/****************************************** 
        // axios.get(`${BASE_URL}/todos${API_KEY}`)
        //     .then((resp)=>{
        //         console.log(resp.data.todos);
        //         this.setState({
        //             listData: resp.data.todos
        //         });
        //     })
       
*////////////////////////////////////////////////       


    async AddItem(item){
          await axios.post(`${BASE_URL}/todos/${API_KEY}`,item)
          this.getListData();
        // this.setState({
        //     listData: [item, ...this.state.listData]
        // })
    }
     
   async deleteItem(id){
        // const listData = this.state.listData.slice()
        // listData.splice(index,1);
        // this.setState({ listData: listData })
      try{
          // know which item we are going to delete; 
        await axios.delete(`${BASE_URL}/todos/${id + API_KEY}`)
        this.getListData();
      }catch(err){

      }

    }
    render (){
        return(
        <div className = "container" >
            <h1 className = "center" > To Do List </h1>
            <AddItem add = {this.AddItem.bind(this)}/>
            <List data={this.state.listData} delete ={this.deleteItem.bind(this)}/>

        </div>
        );
    }
} 

    


export default App;
