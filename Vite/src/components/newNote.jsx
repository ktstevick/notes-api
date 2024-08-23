import { useState } from 'react'

export default function newNote(props) {
    const [body, setBody] = useState('');
    const [color, setColor] = useState([231, 201, 169]); // Defaults to classic manilla

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addNote(body);

        setBody('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Note:</h2>
            <div className="input-container">
                <textarea
                    name="body"
                    value={body}
                    maxLength="100"
                    placeholder="Max 100 Chars"

                    onChange={(e) => setBody(e.target.value)}>
                </textarea>
            </div>

            <div className="form-buttons">
                <button>Set Color</button>
                <button type="submit" className="add-button">Create Note</button>
            </div>
        </form>
    )
}