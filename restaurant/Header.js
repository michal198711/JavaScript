const Header = (props) => {
    const activeItems = props.items.filter(item => item.active === true);
    const number = activeItems.length;
    
    return(
        
        <header>
            <h2>Podsumowanie zamówienia: {number}</h2>
            <h2>Kwota do zapłaty: {number ? `${number* 10} złotych`: `nic nie zamówione `}</h2>
            
            </header>
    )
}