import { Router, browserHistory } from 'react-router'
import router from './router';
import './home/index.css';

ReactDOM.render(
    <Router routes={router} history={browserHistory}/>,
    document.getElementById('root')
);