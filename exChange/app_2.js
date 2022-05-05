// const Dollars = (props) => (
//     <div>Wartość w dolarach: {props.cash ? (props.cash / props.ratio).toFixed(2) : ""}</div>
// )
// const Euros = (props) => (
//     <div>Wartość w euro:{props.cash ? (props.cash / props.ratio).toFixed(2): ""}</div>
// )

const Cash = (props) => {
    const value = (props.cash / props.ratio).toFixed(2)
return(

    <div>{props.title} {props.cash <=0 ? "" : value}</div>
)
}
class ExchangeCal extends React.Component {
    state= {
        amount:"",
        ratioDollars: 4.34,
        ratioEuros: 4.64,


    }
    handleChange = (event) => {
        this.setState({
            amount: event.target.value
        })
    }
    render() {
        return (
            <div className = "app">
                <label >
                <input type= "number" value={this.state.amount} onChange={this.handleChange} ></input>
                </label>
                <Cash cash ={this.state.amount} ratio={this.state.ratioDollars} title="Wartość w dolarach:"/>
                <Cash cash ={this.state.amount} ratio={this.state.ratioEuros} title="Wartość w Euro:"/>
            </div>
        );
    }
}
 
ReactDOM.render(<ExchangeCal />, document.getElementById('root'));