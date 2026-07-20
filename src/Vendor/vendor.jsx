import React from 'react'

const vendor = () => {
    return (
        <>
            <section className="services-hero d-flex align-items-center">
                <div className="container text-center text-white">
                    <h1 className="display-4 fw-bold">Find the Perfect Vendors</h1>

                    <p className="lead">
                        Discover trusted vendors for your events, from catering to entertainment, all in one place.
                    </p>

                    <button className="btn btn-primary btn-lg mt-3">
                        Explore Vendors
                    </button>
                </div>
            </section>

            <section className="py-5">
                <div className="row g-3">
                    <div className="col-lg-8 ">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search for vendors..."
                        />
                    </div>
                    <div className="col-md-4">
                        <select className="form-select">
                            <option value="">Select Category</option>
                            <option value="catering">Catering</option>
                            <option value="photography">Photography</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="decor">Decorator</option>
                            <option value="florist">Florist</option>
                            <option value="florist">DJ</option>
                            <option value="florist">Makeup Artist</option>
                        </select>
                    </div>
                </div>
            </section>
        </>
    )
}

export default vendor