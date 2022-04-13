const PositiveMess = () => <p>Zapraszamy</p>
const NegativeMess = () => <p>Nie zapraszamy</p>
class CheckboxAgeConfirmation extends React.Component {
    state = {
        isChecked: false,
    }
    handleChackboxChange = () => {
        this.setState({
            isChecked: !this.state.isChecked
        })
    }

    displayMessage = () => {
        if (this.state.isChecked) {
            return <PositiveMess />
        } else {
            return <NegativeMess />
        }
    }
    render() {
        console.log(this.state.isChecked)
        return(
            <>
    <h1> Kup bilet</h1>
    <input type="checkbox" id="ageConfirmation" onChange = {this.handleChackboxChange} checked = {this.state.isChecked}/>
    <label htmlFor="ageConfirmation">Mam wiecej niz 18 lat</label>
    {this.displayMessage()}
      </>  )

        }
}
ReactDOM.render(<CheckboxAgeConfirmation />, document.getElementById('app'));
