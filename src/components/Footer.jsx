import "../App.css";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
function Footer(){
    return (
        <>
          <div className="Footer-wrapper">
            <div className="footerlogo">
                <FastfoodIcon style={{color:"rgb(29, 117, 29)" , fontSize:"30px"}}/>
                <h3>Loremipsum</h3>
            </div>
            <div className="footerpara">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque similique temporibus adipisci iusto, illo debitis.</p>
            </div>
            <div className="footernav">
                <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Carrer</a></li>
                    <li><a href="">History</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Project</a></li>
                    <li><a href="">Blog</a></li>
                </ul>
            </div>
            <div className="sociallinks">
                  <FacebookIcon style={{color:"rgb(6, 6, 59)" , fontSize:"30px" , margin:"20px"}}/>
                  <InstagramIcon style={{color:"rgb(6, 6, 59)" , fontSize:"30px" , margin:"20px"}}/>
                  <LinkedInIcon style={{color:"rgb(6, 6, 59)" , fontSize:"30px" , margin:"20px"}}/>
                  <TwitterIcon style={{color:"rgb(6, 6, 59)" , fontSize:"30px" , margin:"20px"}}/>
                  <GitHubIcon style={{color:"rgb(6, 6, 59)" , fontSize:"30px" , margin:"20px" }}/>
            </div>
          </div>
        </>
    )
}
export default Footer;