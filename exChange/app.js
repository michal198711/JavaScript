const Cash = (props) => {
    const value = (props.cash/props.ratio).toFixed(2)
    return (
        <div>
        {props.title} {props.cash <=0 ? "" : value}
        </div>
    )
}

class ExChange extends React.Component {
    state = { 
amount:"",
     } 

currencies = [
    {
        id:1, 
        name:"PLN", 
        ratio:1,
        title: "wartośc w PLN"
    },
    {
        id:1, 
        name:"USD", 
        ratio:4.3,
        title: "wartośc w USD"
    },
    {
        id:1, 
        name:"EUR", 
        ratio:4.3,
        title: "wartośc w EUR"
    },
    {
        id:1, 
        name:"GBP", 
        ratio:5.5,
        title: "wartośc w GBP"
    }
]

}
    render() {
const calculators = this.currencies.map(currency=> (
<Cash key={currency.id} ratio={currency.ratio} title={currency.title} cash={this.state.amount}/>
        ))
        return (
            <div className="app">
                <label>Wybierz produkt:
                    <select>
                        <option value = "ele">Prąd</option>
                        <option value = "pet">Benzyna</option>
                        <option value = "gas">Gaz</option>
                    </select>
                </label><br/>
                <label>
                    <input type="number" value={this.state.amount} onChange={this.chandleChange}/>
                </label>
                {calculators}
            </div>
        );
}

ReactDOM.render(<ExChange />, document.getElementById('root'));