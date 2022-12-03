import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import PhotoAlbum from "./PhotoAlbum";

const UserDetail = () => {
  const { userDetail } = useContext(UserContext);
  const [edit, setEdit] = useState(false);
  const [disabled, setDisabled] = useState(true)
  const [dataEdit, setDataEdit] = useState({
    email: userDetail.email,
    website: userDetail.website,
    phone: userDetail.phone
  })

  const handleChange = (e) => {
    const value= e.target.value;
    setDataEdit({
      ...dataEdit,
      [e.target.name]: value
    })
    if(userDetail.name !== dataEdit.name || userDetail.phone !== dataEdit.phone || userDetail.website !== dataEdit.website) {
      setDisabled(false)
    }
  }
  const handleReset = (e) => {
    e.preventDefault()
    document.getElementById("editData").reset()
  }

  return (
    <div className="py-2 container">
      {userDetail && (
        <div className="mb-4 row">
          <div className="col-12">
            <div className="mb-4 row">
              <div className="col-6">
                <h2 className="h2 fw-bold">{userDetail.name}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="d-flex flex-column gap-4">
                <div className="row">
                  <div className="col-12">
                    <h4 className="h4 text-info">Personal: </h4>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-lg-3 col-4">
                        <p className="mb-0">Id:</p>
                      </div>
                      <div className="col-lg-9 col-8">
                        <p className="mb-0 fw-bold">{userDetail.id}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3 col-4">
                        <p className="mb-0">Username:</p>
                      </div>
                      <div className="col-lg-9 col-8">
                        <p className="mb-0 fw-bold">{userDetail.username}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <h4 className="h4 text-info">Address: </h4>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-lg-3 col-4">
                        <p className="mb-0">Street:</p>
                      </div>
                      <div className="col-lg-9 col-8">
                        <p className="mb-0 fw-bold">
                          {userDetail.address.street}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3 col-4">
                        <p className="mb-0">Suite:</p>
                      </div>
                      <div className="col-lg-9 col-8">
                        <p className="mb-0 fw-bold">
                          {userDetail.address.suite}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3 col-4">
                        <p className="mb-0">City:</p>
                      </div>
                      <div className="col-lg-9 col-8">
                        <p className="mb-0 fw-bold">
                          {userDetail.address.city}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3 col-4">
                        <p className="mb-0">Zipcode:</p>
                      </div>
                      <div className="col-lg-9 col-8">
                        <p className="mb-0 fw-bold">
                          {userDetail.address.zipcode}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <h4 className="h4 text-info">Company: </h4>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-lg-3 col-4">
                        <p className="mb-0">Name:</p>
                      </div>
                      <div className="col-lg-9 col-8">
                        <p className="mb-0 fw-bold">
                          {userDetail.company.name}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3 col-4">
                        <p className="mb-0">CatchPhrase:</p>
                      </div>
                      <div className="col-lg-9 col-8">
                        <p className="mb-0 fw-bold">
                          {userDetail.company.catchPhrase}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3 col-4">
                        <p className="mb-0">Bs:</p>
                      </div>
                      <div className="col-lg-9 col-8">
                        <p className="mb-0 fw-bold">{userDetail.company.bs}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  <div className="d-flex items-center justify-content-between">
                    <h4 className="h4 text-info">Contact: </h4>
                  </div>
                </div>
                {edit ? (
                  <form action="#" id="editData">
                    <div className="mb-3 row">
                      <div className="col-12">
                        <div>
                          <label htmlFor="email" className="form-label">
                            Email:{" "}
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            value={dataEdit.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <div className="col-12">
                        <div>
                          <label htmlFor="phone" className="form-label">
                            Phone:{" "}
                          </label>
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            className="form-control"
                            value={dataEdit.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <div className="col-12">
                        <div>
                          <label htmlFor="website" className="form-label">
                            Website:{" "}
                          </label>
                          <input
                            type="text"
                            name="website"
                            id="website"
                            className="form-control"
                            value={dataEdit.website}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="d-flex items-center gap-3">
                          <button type="button" className={`btn btn-success 
                          ${disabled && "disabled"}`} 
                          
                          onClick={() => {setEdit(false);setDisabled(true)}}>
                            Submit
                          </button>
                          <button type="button" className="btn btn-danger"
                          onClick={handleReset}>
                            Reset
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                ) : (
                  <div className="mb-2 col-12">
                    <div className="row">
                      <div className="col-lg-3 col-4">
                        <p className="mb-0">Email:</p>
                      </div>
                      <div className="col-lg-9 col-8">
                        <p className="mb-0 fw-bold">{userDetail.email == dataEdit ? userDetail.email : dataEdit.email}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3 col-4">
                        <p className="mb-0">Phone:</p>
                      </div>
                      <div className="col-lg-9 col-8">
                        <p className="mb-0 fw-bold">{userDetail.phone == dataEdit ? userDetail.phone : dataEdit.phone}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3 col-4">
                        <p className="mb-0">Website:</p>
                      </div>
                      <div className="col-lg-9 col-8">
                        <p className="mb-0 fw-bold">{userDetail.website == dataEdit ? userDetail.website : dataEdit.website}</p>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="buttom" className="btn btn-success" onClick={() =>setEdit(true)}>
                        Edit
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <PhotoAlbum />
    </div>
  );
};

export default UserDetail;
