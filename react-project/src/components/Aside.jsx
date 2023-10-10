import '../styles/aside.css'
import redCross from '../img/image.jpg'
function Aside(){
    const asideLists = [
        {id:1, name: 'Donate Now'},
        {id:2, name: 'Take a Class'},
        {id:3, name: 'Get Help'},
        {id:4, name: 'Volunteer'},
        {id:5, name: 'Give Blood'}
    ]
    return (
        <aside className="aside">
            <ul className="side-nav-style">
                {asideLists.map(item=><li className="side-nav-item"><a className="side-nav-link" href="#" key={item.id}>{item.name}</a></li>)}
            </ul>
            <div className="image-box">
                <a href="">
                    <img src={redCross} alt="image"/>
                </a>
            </div>
            <div className="info-container">
                <h2 className="info-title">upcoming events:</h2>
                <ul className="info-style">
                    <li className="info-item"><a className="info-link" href="#">Wine Auction and Tasting</a>
                        <p className="info-date">February 27, 2009</p>
                    </li>
                    <li className="info-item"><a className="info-link" href="#">Military Family Day</a>
                        <p className="info-date">March 28, 2009</p>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Aside