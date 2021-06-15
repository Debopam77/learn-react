import logo from '../../resources/logo.svg';
import '../../style/Navbar.scss';
import {navOptions} from './navOptions';
import {React, useState} from 'react';

const Navbar =({darkMode, setDarkMode})=> {

    const [menuClicked, setMenuClicked] = useState(false);

    const clickHandler = (event)=> {
        const eventName = event.target.name;
        console.log(eventName);
    }

    return (
        <div className="App-header">
            <div className='leftSide'>
                <img src={logo} className="App-logo" alt="logo" />
                <a href='/'>Learn React</a>
            </div>
            <div className='rightSide'>
                <ul className={(menuClicked) ? 'nav-link-list active' : 'nav-link-list'}>
                    {navOptions.map((item, index)=> {
                        return <li key={'navLink'+index} className='nav-link-chunk' onClick={clickHandler}><a className={item.className} href={item.link} name={item.name}>
                            {item.name}</a><div className='nav-link-line'></div></li>;
                    })}
                </ul>
                <div className='themeSelector' onClick={()=>{
                    //Setting to persist after reload
                    localStorage.setItem('darkMode', (!darkMode) ? 'true' : 'false');
                    //changing dark mode state
                    setDarkMode(!darkMode);
                    }}><i className={(darkMode)? "far fa-moon" : "fas fa-sun"}></i>
                </div>
                <div className='menuButton' onClick={()=> {setMenuClicked(!menuClicked)}}><div className={(menuClicked) ? 'fas fa-times' : 'fas fa-bars'}></div></div>
            </div>
        </div>
    );
}

export default Navbar;