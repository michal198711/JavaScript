class App extends React.Component {
    state ={
        availableProdusts: 10,
        shoppingCard: 0,
    }
    
    handleRemoveFromCard = () =>  {
        this.setState({
            shoppingCard: this.state.shoppingCard - 1
        })
    }
    handleAddFromCard = () =>  {
        this.setState({
            shoppingCard: this.state.shoppingCard + 1
        })
    }
    handleBuy = () => {
        this.setState({
            availableProdusts : this.state.availableProdusts - this.state.shoppingCard,
            shoppingCard: this.state.shoppingCard = 0

        })
    }
    render() {
        const {availableProdusts, shoppingCard} = this.state
        return(
            <>
            <button disabled={shoppingCard  ? false : true} onClick={this.handleRemoveFromCard}>-</button>
             <span style= {{ opacity: 0.3}}> {shoppingCard} </span>
             <button disabled={availableProdusts==shoppingCard} onClick={this.handleAddFromCard}>+</button>
             {shoppingCard > 0 && <button onClick = {this.handleBuy} >Kup</button>}
            </>
        )
}
}
ReactDOM.render(<App />, document.getElementById('app'));