export default function Note(props) {
    const colorStr = 'rgb(' + props.red + ', ' + props.blue + ', ' + props.green + ')' 

    return (
        <div>
            <div className="note-card" style={{backgroundColor: colorStr}}>
                <p >{props.body}</p>
            </div>

            <button
                className="delete-button"
                onClick={() => props.deleteNote(props.id)}>
                X
            </button>
        </div>
    )
}