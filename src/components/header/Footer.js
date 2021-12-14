import react from "react";
import * as Icons from "react-icons/fa";

const Footer = () => {
    return ( <>
        <div className='footer'>
            <div className='container'>
                <div className="sec aboutus">
                    <h2>ПРО НАС</h2>
                    <p>Найбільша молодіжна громадська організація університету, що працює з 1987 року. Місія - соціально-економічна допомога студентам та аспірантам університету, захист їх прав та інтересів.</p>
                
                    <ul className="sci">
                        <li><a href="https://www.facebook.com/uzhnu.today/" rel="noopener" target="_blank"><Icons.FaFacebook/></a></li>
                        <li><a href="https://instagram.com/uzhnu_students" rel="noopener" target="_blank"><Icons.FaInstagram/></a></li>
                    </ul>
                </div>
                
                <div className='sec ourPartners'>
                    <h2>НАШІ ПАРТНЕРИ</h2>
                    <ul>
                        <li><a href='https://www.uzhnu.edu.ua/' rel="noopener" target="_blank">Ужгородський національний університет</a></li>
                        <li><a href='https://oblpon.uz.ua/' rel="noopener" target="_blank">Закарпатська обласна організація профспілки працівників освіти і науки</a></li>
                        <li><a href='http://pon.org.ua/' rel="noopener" target="_blank">Профспілка працівників освіти і науки України</a></li>
                        <li><a href='https://www.uzhnu.edu.ua/uk/cat/student-self_government' rel="noopener" target="_blank">Студентська рада УжНУ</a></li>
                    </ul>

                </div>

                <div className='sec footer-contacts'>
                    <h2>Контакти</h2>
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
                            <span><Icons.FaEnvelope/></span>
                            <span><a href="mailto:stud-pk@uzhnu.edu.ua" >stud-pk@uzhnu.edu.ua</a></span>
                        </li>
                    </ul>
                </div>
            </div> 
        </div>
        <div className="copyright">
            <p>Created by <a href='https://www.linkedin.com/in/alex-baran-51453b176/'  rel="noopener" target="_blank">Alex Baran</a>. All Rights Reserved</p>
        </div>
        </>
    )
}

export default Footer;