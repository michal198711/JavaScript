//  class ListItems extends React.Component {
//      state = {
//          items: ["jabłko", "gruszka", "śliwka"]
//      }
//         render() {
//             return (
//               <>
//                <ul>
//                 {this.state.items.map(item => <li key= {item}>{`owoc ${item}`}</li>)}
//                 </ul>
//                 </> )
//  }
//  }
// ReactDOM.render(<ListItems />, document.getElementById('app'));

const data = {
    users:[
        {
            id: 1,
            age:6,
            name: "Mateusz",
            sex: "male"
        },
        {
            id: 2,
            age:11,
            name: "Zuzanna",
            sex: "female"
        },
        {
            id: 3,
            age:34,
            name: "Michał",
            sex: "male"
        },
        {
            id: 4,
            age:36,
            name: "Anna",
            sex: "female"
        },
        {
            id: 5,
            age:38,
            name: "Łukasz",
            sex: "male"
        }
    ]
}

// const Item = (props)=> 
// <div>
//     <h1>Użytkownik: {props.user.name}</h1>
//     <h2>Wiek: {props.user.age}</h2>
// </div>
const Item = ({user}) =>
<div className= "userInfo">
    <h3>{user.name}</h3>
    <p>Informacje o użytkowniku:</p>
    <p>Wiek: <strong>{user.age}</strong></p>
    <p>Płeć: <strong>{user.sex}</strong></p>
</div>
class ListItems extends React.Component {
state= {
select: "all"
}
handleUsersFilter(option){
    this.setState({
        select: option
    })
}
//     items: ["jabłko", "gruszka", "śliwka"]
// }
usersList =(props)=> {
//let users = this.props.data.users;
let users = data.users;
switch(this.state.select){
    case "all": 
        return users = users.map(user=> <Item user={user} key = {user.id}/>);
    case "male" : users= users.filter((user)=>user.sex ==="male") ;
        return users = users.map(user=> <Item user={user} key = {user.id}/>);
    case "female" : users= users.filter((user)=>user.sex ==="female");
        return users = users.map(user=> <Item user={user} key = {user.id}/>);
    default:
        return "all"
}


}

render (){
    // let users = this.props.data.users
    // users = users.filter((user)=> user.sex ==="male")
    // const Items = users.map(user => <Item key ={user.id} user = {user}/>)
    // return(
    //     <div>
    //         {Items}
    //     </div>
    // )

    return(
    <div>
    <button onClick={this.handleUsersFilter.bind(this, "all")}>Wszyscy</button>
    <button onClick={this.handleUsersFilter.bind(this, "female")}>Kobiety</button>
    <button onClick={this.handleUsersFilter.bind(this, "male")}>Mężczyźni</button>
    {this.usersList()}
    </div>)
}
}
ReactDOM.render(<ListItems data = {data}/> , document.getElementById('app'));




