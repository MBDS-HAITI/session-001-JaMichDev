
import './NoteDetail.css';

function NoteDetail({randomItem}) {
    // Get a random item from the data array
    
    return (
        <div className="note-detail-container">
            <div className="note-card">
                <h2 className="note-title">Student Grade Report</h2>
                <div className="note-content">
                    <div className="note-field">
                        <span className="field-label">Course:</span>
                        <span className="field-value">{randomItem.course}</span>
                    </div>
                    <div className="note-field">
                        <span className="field-label">Student:</span>
                        <span className="field-value">{randomItem.student.firstname} {randomItem.student.lastname}</span>
                    </div>
                    <div className="note-field">
                        <span className="field-label">Student ID:</span>
                        <span className="field-value">{randomItem.student.id}</span>
                    </div>
                    <div className="note-field">
                        <span className="field-label">Grade:</span>
                        <span className={`field-value grade ${randomItem.grade >= 70 ? 'passing' : 'failing'}`}>
                            {randomItem.grade}
                        </span>
                    </div>
                    <div className="note-field">
                        <span className="field-label">Date:</span>
                        <span className="field-value">{randomItem.date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { NoteDetail };
