import React from 'react';

function Register(){
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 m-auto register-section">
                        <form>
                            <div className="form-row mb-4">
                                <div className="col">
                                    <input type="text" className="form-control" name="name" placeholder="Your Name"/>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" name="phone" placeholder="Phone No."/>
                                </div>
                            </div>
                            <div className="form-row mb-4">
                                <div className="col">
                                    <input type="text" className="form-control" name="email" placeholder="Email"/>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" name="fpoName" placeholder="FPO Name"/>
                                </div>
                            </div>
                            <div className="form-row mb-4">
                                <div className="col">
                                    <select className="form-control" name="state">
                                        <option value="">Select State</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <select className="form-control" name="district">
                                        <option value="">Select District</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row mb-4">
                                <div className="col">
                                    <select className="form-control" name="mandal">
                                        <option value="">Select Mandal</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <select className="form-control" name="village">
                                        <option value="">Select Village</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group mb-4">
                                <select className="form-control" name="designation">
                                    <option value="">Select Designation</option>
                                </select>
                            </div>
                            <div className="form-group mb-4">
                                <textarea name="address" rows="5" placeholder="Address..." className="form-control"></textarea>
                            </div>
                            <div className="form-group text-center">
                                <button type="submit" className="regbtn">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;