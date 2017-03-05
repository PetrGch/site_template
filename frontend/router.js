import { Route, IndexRoute } from 'react-router';
import Home from './Home';
import App from './App';
import About from './About';
import Contacts from './Contacts';
import Contact from './Contact'


module.exports = (
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/contacts' component={Contacts}>
                <Route path='/contacts/:userName' component={Contact}/>
            </Route>
        </Route>
);
