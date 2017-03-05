import NavLink from './NavLink';

export default class Contacts extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(event) {
        event.preventDefault();
        const userName = event.target.elements[0].value;
        const path = `/contacts/${userName}`;
        this.context.router.push(path)
    }

    render() {
        return (
            <div>
                <h2>Contacts</h2>
                <ul>
                    <li><NavLink to='/contacts/petr'>Petr</NavLink></li>
                    <li><NavLink to='/contacts/ivan'>Ivan</NavLink></li>
                    <li>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="userName"/>{' '}
                            <input type="text" placeholder="contact"/>{' '}
                            <button type="submit">Go</button>
                        </form>
                    </li>
                </ul>

                {this.props.children}
            </div>
        );
    }
}

Contacts.contextTypes = {
    router: React.PropTypes.object
};