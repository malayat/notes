import React from 'react';
import Form from './Form';
import Grid from './Grid';

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        notes: this.initNotes()
    };

    initNotes() {
        // Leemos la lista de notas guardadas o creamos una vacía
        let notes = window.localStorage.getItem('notes');

        if (notes === null) {
            notes = []; // Creamos una nueva lista vacía
        } else {
            notes = JSON.parse(notes); // Decodificamos la cadena
        }

        return notes;
    }

    onSave = (note) => {
        // Copiamos la lista de notas almacenada en el state
        let notes = this.state.notes.slice();

        // Insertamos la nueva nota al principio de la lista
        notes.unshift(note);

        // Actualizamos el state
        this.setState({
            notes: notes
        });

        // Codificamos la lista como cadena de texto
        notes = JSON.stringify(notes);

        // Guardamos en localStorage
        window.localStorage.setItem('notes', notes);
    }

    render() {
        return (
            <div id="wrapper">
              <Form onSave={this.onSave} />
              <Grid notes={this.state.notes} />
            </div>
        );
    }
}
