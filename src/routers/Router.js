import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from '../components/navbar/Navbar.js';
import Home from '../components/home/Home';
import Functional from '../components/Functional';
import Hooks from '../components/Hooks';
import ClassComponent from '../components/ClassComponent';
import Lifecycle from '../components/Lifecycle';
import {useState} from 'react';

function Router() {

    const [darkMode, setDarkMode] = useState(()=> {
        const theme = localStorage.getItem('darkMode');
        return (theme && theme === 'true') ? true : false;
      });

    return (
        <BrowserRouter >
            {document.documentElement.setAttribute("data-theme", (darkMode) ? 'dark' : 'light')}
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Switch>
                <Route path='/functional'>
                    <Functional/>
                </Route>
                <Route path='/hooks'>
                    <Hooks/>
                </Route>
                <Route path='/class'>
                    <ClassComponent/>
                </Route>
                <Route path='/lifecycle'>
                    <Lifecycle/>
                </Route>
                <Route path='/'>
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;