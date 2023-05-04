import { useState } from 'react';

function CommentSection() {

    const [question, setQuestion] = useState('');
    const [listQuestion, setListQuestion] = useState([]);

    function handleChange(e) {
        setQuestion(e.target.value);
    }

    function handleQuestion() {

        if (question.trim() === '') {
            return;
        }
        const newQuestion = (
            <div key={listQuestion.length} className='d-flex align-items-center gap-3'>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    style={{ width: "40px", height: "40px", borderRadius: "50%" }}>
                </img>
                {question}
                <button className='btn btn-primary btn-sm' onClick={handleComment}>Comment</button>
            </div>
        );
        setListQuestion([...listQuestion, newQuestion]);
        setQuestion('');
    }


    function handleComment(e) {
        e.preventDefault();
        alert('comment');
    }

    return (
        <>
            <div className="d-flex gap-3 align-items-center justify-content-center my-5">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" style={{ width: "60px", height: "50px", borderRadius: "50%" }}></img>
                <input type="text"
                    onChange={handleChange}
                    value={question}
                    className="form-control"
                    placeholder="Ask a Question">
                </input>
                <button className="btn btn-primary" style={{ width: "30%" }} onClick={handleQuestion}>Add Question</button>
            </div>
            <div className=''>
                {listQuestion}
            </div>
        </>
    );
}

export default CommentSection;