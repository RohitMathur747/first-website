import { Component } from "react";
import './style.css';
import InputField from "../../components/InputField";
import ButtonSelect from "../../components/BuutonSelect";
class INITIAL_VALUE {
    constructor() {
        this.firstname = "";
        this.lastname = "";
        this.middlename = "";
        this.gender = null;
        this.phone = {
            countryCode : "",
            phone : null,
        };
        this.email = "";
        this.DateOfBirth = {
            date : "",
            month : "",
            year : ""
        } ;
        this.education = {
            degree : "",
            stream : "",
            yop : ""
        };
        this.intrestedIn = "";
        this.password = "";
    }
}

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student : new INITIAL_VALUE()
        }
    }
    render() {
        return <div>
            <div className="signup-container">
                <h1>Sign Up -:)</h1>
                <InputField
                value={this.state.student.firstname}
                onChange={({target : {value,name}}) => this.setState({
                    student : {...this.state.student,[name] : value}
                })}
                varitent="shink" label="Enter First Name"
                name="firstname"/>
                <InputField
                value={this.state.student.middlename}
                onChange={({target : {value,name}}) => this.setState({
                    student : {...this.state.student,[name] : value}
                })}
                varitent="shink" label="Enter Middle Name"
                name="middlename"/>
                <InputField
                value={this.state.student.lastname}
                onChange={({target : {value,name}}) => this.setState({
                    student : {...this.state.student,[name] : value}
                })}
                varitent="shink" label="Enter Last Name"
                name="lastname"/>
                <InputField
                value={this.state.student.email}
                onChange={({target : {value,name}}) => this.setState({
                    student : {...this.state.student,[name] : value}
                })}
                varitent="shink" label="Enter your email"
                name="email"/>
                <label for="gender"><b>Choose Gender -:)</b></label>
                <ButtonSelect
                selectedValue={this.state.student.gender}
                options={["Male","Female","Other"]} onSelectOption={(value) => 
                this.setState({ student : {...this.state.student,gender : value }})}/>
                <label for="course"><b>Choose Course -:)</b></label>
                <ButtonSelect
                selectedValue={this.state.student.course}
                options={["Java","Phyton","Mern"]} onSelectOption={(value) => 
                this.setState({ student : {...this.state.student,course : value }})}/>
            </div>
        </div>
    }
}

export default Signup