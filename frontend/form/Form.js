import './form.css'

export default class From extends React.Component {
    constructor(props) {
        super(props);

        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="add-form">
                <form onSubmit={this.submitForm}>
                    <input type="text" placeholder="Фильтер"/>
                    <button type="submit">Добавить</button>
                </form>
            </div>
        );
    }
}