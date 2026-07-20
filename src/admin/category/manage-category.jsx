const ManageCategory = () => {
    return (
        <div className="card shadow-sm border-0">

            <div className="card-header bg-success text-white">
                <h4 className="mb-0">
                    Manage Categories
                </h4>
            </div>

            <div className="card-body">

                <table className="table table-bordered table-hover">

                    <thead>

                        <tr>
                            <th>#</th>
                            <th>Category Name</th>
                            <th>Action</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>1</td>
                            <td>Wedding</td>
                            <td>
                                <button className="btn btn-warning btn-sm me-2">
                                    Edit
                                </button>

                                <button className="btn btn-danger btn-sm">
                                    Delete
                                </button>
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>

        </div>
    );
};

export default ManageCategory;