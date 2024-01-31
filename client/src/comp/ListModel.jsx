import React, { useState, useEffect } from "react";
import AddItems from "./TaskModel";
import axios from "axios";
import DetailModel from "./DetailModel";

function ListModel() {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [viewId, setViewId] = useState(null);

  const handleShowDetail = (id) => {
    setShowDetail(true);
    setViewId(id);
  };

  const handleEdit = (id) => {
    setShow(true);
    setViewId(id);
  };

  const handleDelete = async (id) => {
    console.log(id);
    try {
      let response = await axios.delete(
        `http://localhost:5000/api/users/${id}`
      );
      let data = response.data;
      alert("User Deleted!");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get("http://localhost:5000/api/users");
        let data = response.data;
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [users]);

  return (
    <div>
      <div className="container-fluid p-5 bg-dark text-white text-center">
        <h1>Todo List</h1>
      </div>

      {show && <AddItems handleClose={() => setShow(false)} id={viewId} />}

      {showDetail && (
        <DetailModel
          id={viewId}
          handleClose={() => {
            setShowDetail(false);
            setViewId(null);
          }}
        />
      )}

      <div className="container mt-5">
        <div className="d-flex justify-content-center mb-5">
          <button
            variant="primary"
            className="btn btn-dark rounded-0 "
            onClick={() => setShow(true)}
          >
            Add User
          </button>
        </div>

        <div>
          {users.length === 0 ? (
            <p className="text-center">loading...</p>
          ) : (
            users.map((e, index) => (
              <div
                className="row border border-dark mt-2 pb-2 pt-2  mx-auto"
                style={{ maxWidth: "550px" }}
              >
                <p className="col-md-7">
                  <span className="fw-bold">{e.name}</span>
                  <br />
                  <small className="fs-6 text-secondary">{e.email}</small>
                </p>

                <div className="col-md-5">
                  <button
                    className="btn btn-dark btn-sm rounded-0 me-2"
                    onClick={() => handleShowDetail(e._id)}
                  >
                    View
                  </button>
                  <button
                    className="btn btn-dark btn-sm rounded-0 me-2"
                    onClick={() => handleEdit(e._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-dark btn-sm rounded-0 me-2"
                    onClick={() => handleDelete(e._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ListModel;
