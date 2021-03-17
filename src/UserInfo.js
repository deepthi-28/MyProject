import React,{ Component } from "react";
import axios from 'axios';

export class UserData extends Component{
    constructor(props){
        super(props)
        this.state={
            userInfo:[]
        }
    }

    

    componentDidMount(){
        axios.get('https://reqres.in/api/users/')
        .then(response=>{
            this.setState({userInfo:response.data.data})
        })
        .catch(error=>{
            console.log(error);
        })
    }

    render(){
        const {userInfo}=this.state;
        return(
           <div style={{margin:'25px'}}>
            {
                userInfo!=undefined?
                userInfo.map(userData=>
      
                    <div style={{display:'block',  width: '25%', float: 'left', marginTop:'30px',border: '1px solid',margin:'10px'}}>
                        <img src={userData.avatar} style={{paddingTop:'5px'}}></img> 
                        <p>{userData.first_name}</p>
                        <p>{userData.last_name}</p>
                        <div>{userData.email}</div>
                     </div>      
                )
            :null
            }
            </div>
             )
            }
        }

export default UserData;
