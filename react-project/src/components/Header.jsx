import '../styles/header.css';
import logo from '../img/logo.png';
function Header(){
    const navLists = [
        {id:1, name: 'Home'},
        {id:2, name: 'About us'},
        {id:3, name: 'Services'},
        {id:4, name: 'Training'},
        {id:5, name: 'Donation'},
        {id:6, name: 'Fundraising Events'},
        {id:7, name: 'News and Media'},
        {id:8, name: 'Contact Us'}
    ]
    return ( <header className="header">
        <div className="header-box">
            <div className="container">
                <a href="#" className="logo">
                    <img src={logo} alt="logo"/>
                </a>
            </div>
        </div>
        <nav className="nav-box">
            <div className="container">
                <ul className="nav-style">
                    {navLists.map(item=><li className="nav-item"><a className="nav-link" href="#" key={item.id}>{item.name}</a></li>)}
                </ul>
            </div>
        </nav>
    </header>
);
}



export default Header;