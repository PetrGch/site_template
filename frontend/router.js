import { Route, IndexRoute } from 'react-router';
import App from './App';

import Form from './form/Form';

module.exports = (
    <Route path='/' component={App}>
        <IndexRoute component={Form}/>
    </Route>
);
