import React, { useState } from "react";
import { addTask } from "../../../store/api/Api";
import { useDispatch } from "react-redux";

function AddInput() {
  const [newTask, setNewTask] = useState({
    name: "",
    description: "",
    complete: false,
  });

  const dispatch = useDispatch();
  return (
    <div className=" flex items-center gap-3 mt-50 w-full md:w-auto">
      <input
        type="text"
        placeholder="Add Task"
        className="input input-md w-full"
        value={newTask.name}
        onChange={(e) =>
          setNewTask((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <button
        className="btn btn-active py-1"
        onClick={() => {
          dispatch(addTask(newTask));
          setNewTask(() => ({ name: "" }));
        }}
      >
        submit
      </button>
    </div>
  );
}

export default AddInput;
