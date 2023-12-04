import { Component } from "react";
class Form extends Component{
    state={
        namee:"",
        lastname:"",
    };
    handlechange=(event)=>{
        this.setState({
            namee:event.target.value,
        });
    };
    handlelastname=(event)=>{
        this.setState({
            lastname:event.target.value,
        });
    };
    handlesubmit=(event)=>{
        event.preventDefault();
            console.log({
                fname:this.state.namee,
                lname:this.state.lastname
            });
    }; 
    render(){
        return(
            <div>Form
                <form onSubmit={this.handlesubmit}>
                    <input onChange={this.handlechange} type="text" value={this.state.namee}></input>
                    <input onChange={this.handlelastname} type ="text" value={this.state.lastname}></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default Form;