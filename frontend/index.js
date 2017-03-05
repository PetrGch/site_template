import { Router, browserHistory } from 'react-router'
// import routes and pass them into <Router/>
import router from './router'
import './home/index.css';

ReactDOM.render(
    <Router routes={router} history={browserHistory}/>,
    document.getElementById('root')
);