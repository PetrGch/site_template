export default class Contacts extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.params.userName}</h3>
            </div>
        );
    }
}