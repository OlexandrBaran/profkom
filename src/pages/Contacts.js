
import * as Icons from "react-icons/fa"

const Contacts = () => {
    return (
        <div>
            <h1  className='page-heading'> Контакти</h1>
            <div className="contacts-container">
                <div className='container-box'>
                    <div className="box">
                        <div className="image">
                            <img src={"https://www.uzhnu.edu.ua/uploads/post/extra/1372_golova_ppos_baran_o_I.jpg"} alt={"Олександр Баран"}/>
                        </div>
                            <h1>{"Олександр Баран"}</h1>
                            <h2>{"Голова Профкому"}</h2>
                           
                    </div>
                </div>
                <div className='container-box'>
                    <div className="box">
                        <div className="image">
                            <img src={"https://scontent.fudj1-1.fna.fbcdn.net/v/t1.6435-9/61139279_410934386156942_5095734669547143168_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=1c20pDOwECIAX961MGR&_nc_ht=scontent.fudj1-1.fna&oh=00_AT8JC56ktzZXvsy87mX8WlaI7d3EWBgN-_OElSY96I_DWw&oe=61DDC74E"} alt={"Лідія Ірчак"}/>
                        </div>
                            <h1>{"Лідія Ірчак"}</h1>
                            <h2>{"Cекретар профкому"}</h2>
                           
                    </div>
                </div>
                <div className='contacts-data'>
                    <ul className="info">
                            <li>
                                <span><Icons.FaMapPin/></span>
                                <span> 88000, м. Ужгород, Університетська 12</span>
                            </li>
                            <li>
                                <span><Icons.FaPhone/></span>
                            <span><a href="tel:0501075796">+ 38 (050) 107 57 96</a></span>
                            </li>
                            <li>
                                <span><Icons.FaPhone/></span>
                            <span><a href="tel:0501075796">+ 38 (095) 872 87 76</a></span>
                            </li>
                            <li>
                                <span><Icons.FaEnvelope/></span>
                                <span><a href="mailto:stud-pk@uzhnu.edu.ua" >stud-pk@uzhnu.edu.ua</a></span>
                            </li>
                        </ul>
                        <ul className="sci">
                        <li><a href="https://www.facebook.com/uzhnu.today/" rel="noopener" target="_blank"><Icons.FaFacebook/></a></li>
                        <li><a href="https://instagram.com/uzhnu_students" rel="noopener" target="_blank"><Icons.FaInstagram/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contacts;