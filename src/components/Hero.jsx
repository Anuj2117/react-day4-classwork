import { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
function Hero(){
    const [Quotes, setQuotes]=useState([]);
    // const [Author, setAuthor]=useState("");

    
        
    
    useEffect(()=>{
        async function fetchQuote(){
            const response= await axios.get("https://type.fit/api/quotes");
            
            setQuotes(response.data.slice(0,30));
            
            console.log(response.data);
        }
        fetchQuote();
        
        },[])
    return (
        <>
        <div>
            {
              Quotes.map((quoteobj , index)=>(
                 
                <div className="quote-container" key={index}>
                    <p className="quotepara">{quoteobj.text}</p>
                    <p>--{quoteobj.author ? quoteobj.author.split(',')[0] : "Unknown"}</p>
                </div>
              ))
            }
        </div>
        </>
    )
}
export default Hero