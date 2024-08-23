export default function Note(props) {
    return (
        <div>
            <div className="note-card">
                <p>{props.body}</p>
            </div>

            <button
                className="delete-button"
                onClick={() => props.deleteNote(props.id)}>
                X
            </button>
        </div>
    )
}