// const PositiveMess = () => <p>Zaznaczone</p>
// const NegativeMess = () => <p>Nie zaznaczone</p>
const ValidationMessages = (props) =>  {
    const {txt} = props
    return (
    <p>
        {txt}
    </p>
    )

}

// const displayMessage = (isChecked, isFormSubmitted) => { 
//     if(isFormSubmitted){
//     if (isChecked) {
//         return <ValidationMessages txt = "Wiek potwierdzony" />
//     } else {
//         return <ValidationMessages txt= "odmowa dostepu" />
//     }
// }
// else {
//     return null
// }
// }
const OrderForm= (props) => {
      const {change, checked, submit} = props
    return (
<form onSubmit={submit}>
<input type="checkbox" id="ageConfirmation" onChange = {change} checked = {checked}/>
<label htmlFor="ageConfirmation">Mam wiecej niz 18 lat</label>
<br/>
<button type= "submit" className="btn btn-default">Kup Bilet</button>
</form>
)}
class TicketShop extends React.Component {
    state = {
        isChecked: false,
        isFormSubmitted: false,
    }
    handleChackboxChange = () => {
        this.setState({
            isChecked: !this.state.isChecked,
            isFormSubmitted: false,
        })
    }
    hendleFormSubmitted = (e) => {
        e.preventDefault()
        if(!this.state.isFormSubmitted) {
        this.setState({
            isFormSubmitted: true
        })
    }
    }
displayMessage = () => {
if(this.state.isFormSubmitted){
         if (this.state.isChecked) {
             return <ValidationMessages txt = "Wiek potwierdzony" />
        } else {
            return <ValidationMessages txt= "odmowa dostepu" />
         }
     }
    else {
         return null
     }
 }
    render() {
        const {isChecked} = this.state
       console.log(isChecked)
        return(
            <>
    <h1> Kup bilet</h1>
    <OrderForm
        change = {this.handleChackboxChange}
        submit = {this.hendleFormSubmitted}
        checked = {isChecked}
        />
    {this.displayMessage()
    /* // {displayMessage(isChecked, isFormSubmitted)} */}
      </>  )
 
        }
}
ReactDOM.render(<TicketShop />, document.getElementById('app'));