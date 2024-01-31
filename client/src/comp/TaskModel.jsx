import React, { useState, useEffect } from "react";
import axios from "axios";

function TaskModel(props) {
  const { id, handleClose } = props;
  const [tasks, setTasks] = useState({
    name: "",
    email: "",
    age: "",
  });
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
  const onChange = (e) => {
    setTasks({
      ...tasks,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id == null) {
        const response = await axios.post(
          "http://localhost:5000/api/users",
          tasks
        );
        alert("Task created");
      }
      {
        const response = await axios.put(
          `http://localhost:5000/api/users/${id}`,
          tasks
        );
        alert("Task Update");
      }

      handleClose();
    } catch (error) {
      console.error("Error creating task:", error);
      alert("Error creating task");
    }
  };

  return (
    <div className="TaskModel">
      <form className="TaskForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          required={true}
          value={tasks.name}
          placeholder="Name"
          onChange={onChange}
          title="Must enter task name"
        />
        <input
          type="email"
          required={true}
          name="email"
          onChange={onChange}
          value={tasks.email}
          placeholder="Email"
          title="Must enter task email"
        />
        <input
          type="number"
          required={true}
          name="age"
          onChange={onChange}
          value={tasks.age}
          placeholder="Age"
          title="Must enter task age"
        />
        <div className="btn-group">
          <button type="button" onClick={handleClose}>
            Cancel
          </button>
          <button type="submit">
            {id == null ? <>Save Task</> : <>Update Task</>}
          </button>
        </div>
      </form>
      <span className="underlay" onClick={handleClose} />
    </div>
  );
}

export default TaskModel;
