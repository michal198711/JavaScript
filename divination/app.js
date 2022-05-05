const ShowOwnDibvation= () => <p>{HandleShowDivination}</p>
class Divination extends React.Component {
    state = {
        array:
["Mars w korzystnym sekstylu do Księżyca doda ci dzisiaj odwagi w sprawach damsko-męskich. Jeśli od dłuższego czasu czaisz się, żeby zrobić ten pierwszy krok, dziś nie będziesz z tym miał problemów.",
"Twoje sprawy sercowe rokują dzisiaj nad wyraz pomyślnie. Zwłaszcza że nie zabraknie ci siły przebicia oraz daru wymowy. Śmiało możesz więc zainicjować kontakt z kimś, kto wpadnie ci w oko.",
"Na twoje życie uczuciowe wpływ będzie dzisiaj miał Mars w pozytywnym sekstylu do Księżyca. W praktyce oznacza to dla ciebie, że nabierzesz odwagi w swojej relacji. Mars doda ci pewności siebie.", ],
randomCount: "",

}


HandleLotto = () => {
    const array = this.state.array.length
    const random = Math.floor(Math.random() * array);
    this.HandleShowDivination(random);
}
HandleShowDivination= (random) => {
    this.setState({randomCount: random});
}
    HandleAddDivation =() => {
        const newDivination = document.getElementById("addDivation").value;
        const array = this.state.array;
        array.push(newDivination);
        this.setState({array: array});
    }

    render() {
        return (
            <>
            <h3>{this.state.array[this.state.randomCount]} </h3>
                <button className="btn btn-primary" onClick={this.HandleLotto}>losuj</button><br></br>
                <input id="addDivation" type="text" className="form-control" placeholder="Wpisz wrózbę" />
                <button className="btn btn-primary" onClick={this.HandleAddDivation} >Dodaj</button>
                </> )
    }
}
ReactDOM.render(<Divination />, document.getElementById('root'));
