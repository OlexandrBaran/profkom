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
                                            ??????????????
                                        </NavLink>
                                    </li>
                                    
                                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" >
                                        <Link to='#'>
                                            ?????????????? <FiChevronDown/>
                                        </Link>
                                        <ul className={boxClassSubMenu.join(' ')}>
                                            <li>
                                                <NavLink activeClassName='is-active' onClick={toggleClass} to={'/activity'}>
                                                    ???????????????? ????????????????????
                                                </NavLink>  
                                            </li>

                                            <li>
                                                <NavLink activeClassName='is-active' onClick={toggleClass} to={'/guidance'}>
                                                    ??????????????????????
                                                </NavLink>
                                            </li>
                                           
                                            <li>
                                                <NavLink activeClassName='is-active' onClick={toggleClass} to={'/profleaders'}>
                                                    ????????????????
                                                </NavLink>
                                            </li>
                                           
                                            <li>
                                                <NavLink activeClassName='is-active' onClick={toggleClass} to={'/structure'}>
                                                    ??????????????????
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>

                                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" >
                                        <Link to='#'>
                                            ?????????????????? <FiChevronDown/>
                                        </Link>
                                        <ul className={boxClassSubMenu.join(' ')}>
                                            <li>
                                                <NavLink activeClassName='is-active' onClick={toggleClass} to={'/regulations'}>
                                                    ???????????????????? ?????????????????? 
                                                </NavLink>
                                            </li>

                                            <li>
                                                <NavLink activeClassName='is-active' onClick={toggleClass} to={'/tradeUnionDocs'}>
                                                    ???????????????????????? ??????????????????
                                                </NavLink>
                                            </li>
                                           
                                            <li>
                                                <NavLink activeClassName='is-active' onClick={toggleClass} to={'/sampleApplications'}>
                                                    ???????????? ????????
                                                </NavLink>
                                            </li>
                                           
                                        </ul>
                                    </li>

                                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" >
                                        <Link to='#'>
                                            ?????????????? ???????????????????? <FiChevronDown/>
                                        </Link>
                                        <ul className={boxClassSubMenu.join(' ')}>
                                            <li>
                                                <NavLink activeClassName='is-active' onClick={toggleClass} to={'/internationalPrograms'}>
                                                    ???????????????????? ?????????????????? ????????????????
                                                </NavLink>
                                            </li>

                                            <li>
                                                <NavLink activeClassName='is-active' onClick={toggleClass} to={'/sport'}>
                                                    ?????????????????? ??????????
                                                </NavLink>
                                            </li>
                                           
                                            <li>
                                                <NavLink activeClassName='is-active' onClick={toggleClass} to={'/booklet'}>
                                                    ??????'???????? ?????? ??????????????????
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink activeClassName='is-active' onClick={toggleClass} to={'/rating'}>
                                                    ???????????????????? ???????????? ???? ??????????????????
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="menu-item">
                                        <NavLink activeClassName='is-active' onClick={toggleClass} to={'/chummery'}>
                                            ????????????????????
                                        </NavLink>
                                    </li>
                                    <li className="menu-item">
                                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={'/contacts'}>
                                            ????????????????
                                        </NavLink>
                                    </li>
                                    <li className="menu-item">
                                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={'/trustBox'}>
                                            ???????????????? ????????????
                                        </NavLink>
                                    </li>

                                </ul>

                            </nav>

                        </div>


                    </div>
                </div>
            </header>