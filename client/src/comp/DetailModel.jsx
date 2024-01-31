import React, { useState, useEffect } from "react";
import axios from "axios";

function DetailModel(props) {
  const { id, handleClose } = props;
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(`http://localhost:5000/api/users/${id}`);
        let data = response.data;
        setTasks(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);
  return (
    <div className="TaskModel">
      <div className="TaskForm">
        <h4>User Details</h4>

        <p>
          Name: {tasks.name}
          <br />
          Email: {tasks.email}
          <br />
          Age: {tasks.age}
        </p>
        <div className="btn-group">
          <button type="button" onClick={handleClose}>
            Cancel
          </button>
        </div>
      </div>

      <span className="underlay" onClick={handleClose} />
    </div>
  );
}

export default DetailModel;
