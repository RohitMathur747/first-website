import './index.css'

const ButtonSelect = ({isMulti = false ,selectedValue, options = [],onSelectOption  = () => {} }) => {
    return <div className="s-btn-container">
        {
            options.map( btntext => <button className={`s-btn ${selectedValue === btntext && "active"}`} key={btntext} onClick={onSelectOption.bind(this,btntext)}>{btntext}</button>)
        }
    </div>
}

export default ButtonSelect;