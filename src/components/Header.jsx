import FastfoodIcon from '@mui/icons-material/Fastfood';
import "../App.css";
function Header(){
    return (
        <>

        <header>
            <nav>
              <div className='Logopart'>
              <FastfoodIcon className='FastfoodIcon' style={{fontSize:"40px", color:"white"}}/>
              <h2>GeeksFoods</h2>
              </div>

              <div className="navlinks">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Quote</a></li>
                    <li><a href="">Resturants</a></li>
                    <li><a href="">Foods</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
              </div>

              <div className="startbutton">
                <button className='startbutton'>Get Started</button>
              </div>
            </nav>
        </header>

        </>
    )
}
export default Header