import { Route, Routes } from "react-router-dom";
import Navbar from "./componets/Navbar";
import AddInput from "./componets/tasks/AddInput";
import TasksList from "./componets/tasks/TasksList";
import EditPage from "./componets/tasks/EditPage";

function App() {
  return (
    <div
      className=" min-h-screen flex flex-col justify-start px-3  items-center bg-gradient-to-b from-black to-zinc-900"
    >
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddInput />
              <TasksList />
            </>
          }
        />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
