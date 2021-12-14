import react from "react";
import { ChummeryList } from "./ChummeryList";

const Chummery = () => {
    return (
        <div>
            <h1  className='page-heading'> Гуртожитки</h1>

                <ul className="chummery-container">
                    {ChummeryList.map((item) => {
                        return(
                            <li id={item.key}>
                                <h2>{item.title}</h2>
                                <p>АДРЕСА: {item.adress} </p>
                                <p>ТЕЛЕФОН ПРОХІДНОЇ: {item.contacts}  </p>
                                <p>ТЕЛЕФОН КОМЕНДАНТА: {item.comendantNumber} </p>
                                <p>ДОДАТКОВА ІНФОРМАЦІЯ:{item.addInfo} </p>
                            </li>
                        )
                    }

                    )}
                </ul>

        </div>
    )
}

export default Chummery;