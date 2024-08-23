import { useState } from 'react'

export default function newNote(props) {
    const [body, setBody] = useState('');

    // Style
    const DEFAULT_RGB_RED = 181;
    const DEFAULT_RGB_BLUE = 255;
    const DEFAULT_RGB_GREEN = 192;

    const [red, setRed] = useState(DEFAULT_RGB_RED);
    const [blue, setBlue] = useState(DEFAULT_RGB_BLUE);
    const [green, setGreen] = useState(DEFAULT_RGB_GREEN);

    const [visibleControls, setVisibleControls] = useState(false);
    const visibilityStr = visibleControls ? "grid" : "none";

    const colorStr = 'rgb(' + red + ', ' + blue + ', ' + green + ')'

    // Methods
    const handleSubmit = (e) => {
        if (body.trim() === '') {
            alert('You need to write a note before you can post it!');
        } else {
            e.preventDefault();
            props.addNote(body, red, blue, green);

            // Restore defaults
            setBody('');
            setRed(DEFAULT_RGB_RED);
            setBlue(DEFAULT_RGB_BLUE);
            setGreen(DEFAULT_RGB_GREEN);
        }
    };

    const toggleColorControls = (e) => {
        e.preventDefault();
        setVisibleControls(!visibleControls);
    }

    return (
        <form>
            <h2>Add Note:</h2>
            <div className="input-container">
                <textarea
                    name="body"
                    value={body}
                    maxLength="100"
                    placeholder="Max 100 Chars"

                    onChange={(e) => setBody(e.target.value)}

                    style={{ backgroundColor: colorStr }}>
                </textarea>
            </div>

            <div className="form-buttons">
                <button onClick={toggleColorControls}>Set Color</button>
                <button onClick={handleSubmit}>Create Note</button>

                {/* Could likely become its own component */}
                <div className="color-controls" style={{ display: visibilityStr }}>
                    <input
                        name="red"
                        id="red"
                        type="number"
                        min="0"
                        max="255"
                        value={red}
                        onChange={(e) => { setRed(e.target.value) }}></input>
                    <label> - Red</label>

                    <input
                        name="blue"
                        id="blue"
                        type="number"
                        min="0"
                        max="255"
                        value={blue}
                        onChange={(e) => { setBlue(e.target.value) }}></input>
                    <label> - Blue</label>

                    <input
                        name="green"
                        id="green"
                        type="number"
                        min="0"
                        max="255"
                        value={green}
                        onChange={(e) => { setGreen(e.target.value) }}></input>
                    <label> - Green</label>
                </div>
            </div>
        </form>
    )
}