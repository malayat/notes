import React from 'react';

export default class Note extends React.Component {

    static propTypes = {
        id: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        let type = 'text-shortest';

        if (this.props.text.length > 240) type = 'text-longest';
        else if (this.props.text.length > 120) type = 'text-long';
        else if (this.props.text.length > 60) type = 'text-medium';
        else if (this.props.text.length > 30) type = 'text-short';
        return (
            <div className="note">
                <div className="note-text">
                    <strong>{this.props.title}</strong>
                    <p className={type}>{this.props.text}</p>
                </div>
                <div className="note-toolbar">
                    <a className="note-btn-delete" />
                </div>
            </div>
        );
    }
}
