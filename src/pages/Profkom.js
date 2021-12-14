import react from "react";
import { ProfkomItems } from "./profkomItems";
import * as Icons from "react-icons/fa";

const Profkom = () => {
    return (
        <div>
            <h1 className='page-heading'>Профком</h1>
                <div className="container-profkom">
                    
                        {ProfkomItems.map((item) => { 
                            return(
                            <div className="box" key={item.id}>
                                <div className="image">

                                    <img src={item.imageLink} alt={item.name}/>
                                </div>
                            <h1>{item.name}</h1>
                            <h2>{item.position}</h2>
                            <span><a href={`tel:${item.phoneNumber}`}>{item.phoneNumber}</a></span><br/>
                            <span ><a className="instagram" href={`https://instagram.com/${item.instagram}`} rel="noopener" target="_blank"><Icons.FaInstagram/></a></span>
                            </div>)
                    
                    })}
                </div>
        </div>
    )
}

export default Profkom;