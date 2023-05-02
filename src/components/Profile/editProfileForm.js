function EditProfileForm() {

    function handleSave() {
        alert("save");
    }

    function handleCancel() {
        alert("cancel");
    }

    return (
        <>
            <div className="" style={{}}>
                <form className="row g-3">
                    <div className="col-12">
                        <label htmlFor="">First Name:</label>
                        <div className="">
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-12">
                        <label htmlFor="">Last Name:</label>
                        <div className="">
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-12">
                        <label htmlFor="">Email:</label>
                        <div className="">
                            <input type="email" className="form-control" />
                        </div>
                    </div>
                    <div className="col-12">
                        <label htmlFor="">Password:</label>
                        <div className="">
                            <input type="password" className="form-control" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-end gap-1">
                        <button className="btn btn-outline-secondary btn-sm" onClick={handleCancel}>Cancel</button>
                        <button className="btn btn-primary btn-sm" onClick={handleSave}>Save</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default EditProfileForm;