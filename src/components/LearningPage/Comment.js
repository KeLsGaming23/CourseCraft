function Comment(props) {
    return (
        <>
            <div className='d-flex align-items-center gap-3 my-2'>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" style={{ width: "40px", height: "40px", borderRadius: "50%" }}></img>
                <p>{props.question}</p>
                <button className='btn btn-secondary btn-sm'>reply</button>
            </div>
        </>
    );
}

export default Comment;