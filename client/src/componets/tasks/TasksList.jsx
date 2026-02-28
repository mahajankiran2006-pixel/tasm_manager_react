import React, { useEffect } from "react";
import { FaEdit, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import swal from "sweetalert2";
import {
  deleteAllTasks,
  deleteOneTask,
  getAllTasks,
  updateData,
} from "../../../store/api/Api";

function TasksList() {
  const dispatch = useDispatch();
  const { tasks, loading } = useSelector((state) => state.taskData);
  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch, updateData]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);
  const handleDeleteAllTasks = () => {
    swal
      .fire({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel",
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          try {
            dispatch(deleteAllTasks());
            swal.fire("Deleted!", "Your file has been deleted.", "success");
          } catch (error) {
            swal.fire(
              "Error!",
              "There was a problem deleting the file.",
              "error"
            );
            console.error(error);
          }
        }
      });
  };
  const handleDeleteTask = (id) => {
    swal
      .fire({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel",
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          try {
            dispatch(deleteOneTask(id));
            swal.fire("Deleted!", "Your file has been deleted.", "success");
          } catch (error) {
            swal.fire(
              "Error!",
              "There was a problem deleting the file.",
              "error"
            );
            console.error(error);
          }
        }
      });
  };

  //

  return (
    <div>
      {loading ? (
        <div className="flex justify-center h-full  items-center absolute top-0 left-1/2">
          <span className={`loading loading-spinner  w-10`} />
        </div>
      ) : tasks.AllTask !== undefined && tasks.AllTask.length !== 0 ? (
        <div className="  rounded-box border border-gray-700 bg-base-100 mt-10 py-5 flex flex-col justify-center items-center gap-4 ">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Description</th>
                <th>Complete</th>
              </tr>
            </thead>
            {tasks.AllTask !== undefined &&
              tasks?.AllTask?.length > 0 &&
              tasks?.AllTask?.map((task) => (
                <tbody key={task._id} className="text-xl ">
                  <tr>
                    <th>
                      <div class="flex items-center mb-4">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                      </div>
                    </th>
                    <td>{task.name || ""}</td>
                    <td>{task.description || ""}</td>
                    <td className="flex gap-1">
                      <button
                        className="btn btn-outline btn-error btn-sm md:btn-md"
                        onClick={() => {
                          handleDeleteTask(task._id);
                        }}
                      >
                        <FaRegTrashAlt className="" />
                      </button>
                      <button className="btn btn-outline btn-info btn-sm md:btn-md">
                        <Link to={`edit/${task._id}`}>
                          <FaRegEdit className="hover:text-blue-500 btn-sm" />
                        </Link>
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>

          <button
            onClick={handleDeleteAllTasks}
            className=" border bg-red-400 border-gray-700 p-3 w-1/2  rounded cursor-pointer hover:bg-red-700 text-black  transition-all duration-300"
          >
            delete All
          </button>
        </div>
      ) : (
        <div className="  py-4 font-bold text-2xl text-center text-gray-500">
          No Task Found
        </div>
      )}
    </div>
  );
}

export default TasksList;
