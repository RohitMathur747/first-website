import { Component } from "react";
import './style.css'
class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focus : false,
        }
    }
    render() {
        
        const {props,state} = this;
        const { label,name,type = "text",error } = props;
        console.log(props.value);
        return <div className={`input-container ${ props.varitent === "shink" ? "shink" : ""} ${state.focus && "border-c-bl"}`}>
            { label && <label className={`${ props.varitent === "shink" ? ( state.focus || props.value) && "at-top" : ""} ${state.focus === false && "c-gray"}`} htmlFor={props.name+ "1"}>{label}</label>}
            <input 
            value={props.value} 
            name={name}
            onChange={props.onChange} 
            onBlur={() => this.setState({ focus : false })} 
            onFocus={() => this.setState({ focus : true})} 
            type="text" id={props.name+ "1"} />
            {error && <p className="error-tag">{error}</p>}
        </div>
    }
}

export default InputField;