import React from 'react';
import Note from './Note';

export default class Grid extends React.Component {

    static propTypes = {
        /*estableciendo como requerida la propiedad notes por lo tanto 
        podemos eliminarla de la definición defaultProp del padre*/
        notes: React.PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        let notes = this.props.notes.map((note, idx) => {
            return (
                <Note id={note.id} title={note.title} text={note.text} key={idx} />
            );
        });

        return (
            <div className="grid">
                {notes}
            </div>
        );
    }
}
