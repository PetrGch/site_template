import NavLink from './NavLink';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>React-Router</h1>
                <ul role="nav">
                    <li><NavLink to='/' onlyActiveOnIndex={true}>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/contacts'>Contacts</NavLink></li>
                </ul>

                {this.props.children || <Home/>}
            </div>
        );
    }
}