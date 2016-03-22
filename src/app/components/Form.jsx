import React from 'react';
import ReactDOM from 'react-dom';

export default class Form extends React.Component {
    
    static propTypes = {
        onSave: React.PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        //binding
        //this.open = this.open.bind(this);
        //this.close = this.close.bind(this);
        //this.save = this.save.bind(this);
    }

    state = {
        open: false
    };

    open = (event) => {
        document.addEventListener('click', this.close);
        this.setState({
            open: true
        });
    };

    close = (event) => {
        document.removeEventListener('click', this.close);
        this.setState({
            open: false
        });
    };

    save = (event) => {
        event.preventDefault();

        // Obtenemos los valores del formulario
        let note = {
            id: new Date().getTime(), //Generamos una id rapida
            title: ReactDOM.findDOMNode(this.refs.title).value,
            text: ReactDOM.findDOMNode(this.refs.text).value
        };

        // Enviamos la nota al controller view
        this.props.onSave(note);

        // Vaciamos el formulario
        ReactDOM.findDOMNode(this.refs.title).value = '';
        ReactDOM.findDOMNode(this.refs.text).value = '';

        // Y finalmente lo cerramos
        this.close();
    };

    componentDidMount() {
        ReactDOM.findDOMNode(this).addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    render() {
        return (
            <form className={"addnote" + (this.state.open ? ' open' : '')} onFocus={this.open} onSubmit={this.save}>
            <input className="addnote-title" type="text" placeholder="Título" ref="title" />
            <textarea className="addnote-text" placeholder="Añadir nota" ref="text" />
            <div className="addnote-toolbar">
                <button>Hecho</button>
                <a className="addnote-btn-list" />
            </div>
        </form>
        );
    }
}
