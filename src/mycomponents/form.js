import React,{Component} from "react";

class Form extends Component{
    initialState = {
        name:'',
        job:'',
        city:''
    }
    state = this.initialState
    handleChange =(event)=>{
        const{name, value} = event.target
        this.setState({
            [name]:value,
        })
    }
    submitForm=()=>{
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
    render(){
        const{name,job,city } = this.state;
        return (
            <form>
                <label htmlFor="name">Name</label>
                <input 
                type="text"
                name ="name"
                value = {name}
                onChange={this.handleChange} />
                <label htmlFor="job">Job</label>
                <input
                type ="text"
                name = "job"
                id ="job"
                value={job}
                onChange = {this.handleChange}/>
                <label htmlFor="city">City</label>
                <input
                type="text"
                id ="city"
                name ="city"
                value ={city}
                onChange =  {this.handleChange}/>
                <input type="button" value="Submit" onClick ={this.submitForm}></input>
            </form>
        )
    }
}

export default Form;