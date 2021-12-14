/*
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
        setResponsiveclose(isResponsiveclose === false ? true : false);
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);

    const toggleSubmenu = () => {
        setMenuSubMenu(isMenuSubMenu === false ? true : false)
    };

   
    let boxClass = ['main-menu menu-right menuq1'];
        if (isMenu) {
            boxClass.push('menuq2')
        } else {
            boxClass.push('')
        }

    let boxClassSubMenu = ['sub__menus'];
        if (isMenuSubMenu) {
            boxClassSubMenu.push("sub__menus__Active");
        } else {
            boxClassSubMenu.push("");
        }*/


         /*
            <header className='header_middle'>
                <div className='container'>
                    <div className='row'>

                        <div className="header_middle__logo"> 
                            <NavLink exact activeClassName='is-active' to='/'>
                                <img src={logo} alt='logo' />
                            </NavLink>
                        </div>
                        
                        <div className="header_middle__menus"> 
                            <nav className='main-nav'>*/
                                
                                {/* Responsive navbar */}

                                {/* isResponsiveclose === true ? <>
                                <span className='menubar_button' style={{display : 'none'}}
                                onClick={toggleClass} > <FiXCircle/> </span> 
                                </> : <>
                                <span className='menubar_button' style={{display : 'none'}}
                                onClick={toggleClass} > <faAlignRight/> </span> </>


                                }


                                <ul className={boxClass.join(' ')}>
                                    <li className="menu-item">
                                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={'/'}>
                                            Головна
                                        </NavLink>
                                    </li>
                                    
                                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" >
                                        <Link to='#'>
                                            Профком <FiChevronDown/>
                                        </Link>
                                        <ul className={boxClassSubMenu.join(' ')}>
                                            <li>
                                                <NavLink activeClassName='is-active' onClick={toggleClass} to={'/activity'}>
                                                    Напрямки діяльності
                                                </NavLink>  
                                            </li>

                                            <li>
                                                <NavLink activeClassName='is-active' onClick={toggleClass} to={'/guidance'}>
                                                    Керівництво
                                                </NavLink>
                                            </li>
                                           
                                            <li>
                                                <NavLink activeClassName='is-active' onClick={toggleClass} to={'/profleaders'}>
                                                    Профбюро
                                                </NavLink>
                                            </li>
                                           
                                            <li>
                                                <NavLink activeClassName='is-active' onClick={toggleClass} to={'/structure'}>
                                                    Структура
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>

                                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" >
                                        <Link to='#'>
                                            Документи <FiChevronDown/>
                                        </Link>
                                        <ul className={boxClassSubMenu.join(' ')}>
                                            <li>
                                                <NavLink activeClassName='is-active' onClick={toggleClass} to={'/regulations'}>
                                                    Нормативні документи 
                                                </NavLink>
                                            </li>

                                            <li>
                                                <NavLink activeClassName='is-active' onClick={toggleClass} to={'/tradeUnionDocs'}>
                                                    Профспілкові документи
                                                </NavLink>
                                            </li>
                                           
                                            <li>
                                                <NavLink activeClassName='is-active' onClick={toggleClass} to={'/sampleApplications'}>
                                                    Зразки заяв
                                                </NavLink>
                                            </li>
                                           
                                        </ul>
                                    </li>

                                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" >
                                        <Link to='#'>
                                            Корисна Інформація <FiChevronDown/>
                                        </Link>
                                        <ul className={boxClassSubMenu.join(' ')}>
                                            <li>
                                                <NavLink activeClassName='is-active' onClick={toggleClass} to={'/internationalPrograms'}>
                                                    Міжнародні навчальні програми
                                                </NavLink>
                                            </li>

                                            <li>
                                                <NavLink activeClassName='is-active' onClick={toggleClass} to={'/sport'}>
                                                    Спортивне життя
                                                </NavLink>
                                            </li>
                                           
                                            <li>
                                                <NavLink activeClassName='is-active' onClick={toggleClass} to={'/booklet'}>
                                                    Пам'ятка для студентів
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink activeClassName='is-active' onClick={toggleClass} to={'/rating'}>
                                                    Рейтингові списки на стипендію
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="menu-item">
                                        <NavLink activeClassName='is-active' onClick={toggleClass} to={'/chummery'}>
                                            Гуртожитки
                                        </NavLink>
                                    </li>
                                    <li className="menu-item">
                                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={'/contacts'}>
                                            Контакти
                                        </NavLink>
                                    </li>
                                    <li className="menu-item">
                                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={'/trustBox'}>
                                            Скринька довіри
                                        </NavLink>
                                    </li>

                                </ul>

                            </nav>

                        </div>


                    </div>
                </div>
            </header>