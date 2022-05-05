class App extends React.Component {c
    state = {
        items: [
            { id: 1, name: "Herbata",price: 11, active: true},
            { id: 2, name: "Ziemniaki",price: 12, active: false},
            { id: 3, name: "Kasza",price: 13, active: false},
            { id: 4, name: "Zupa",price: 14, active: false},
            { id: 5, name: "Wrzątek",price: 15, active: false},
            { id: 6, name: "Chleb",price: 16, active: true},
        ],
     }
     handleChangeStatus = (id)=> {
         const items = this.state.items.map(item => {
             if(item.id === id) {
                 return {...item, active: !item.active}
             }
             return item
             
         })
         this.setState({
             items:items
             
         })
     }
    render() {
        return (
            <>
            <Header items={this.state.items} />
            <ListItems items={this.state.items} changeStatus= {this.handleChangeStatus} />
            </>
        );
    }
}

