import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home.jsx";
import Users from "./pages/users";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users/:id" element={<Users />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

/*
      <Title />
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo
          onTodoDelete={onTodoDelete}
          title="Finish Frontend Simplified"
        ></Todo>
        <Todo
          onTodoDelete={onTodoDelete}
          title="Finish interview section"
        ></Todo>
        <Todo onTodoDelete={onTodoDelete} title="Land a 100k job"></Todo>
      </div>
      {showModal && (
        <Modal
          cancelModal={cancelModal}
          confirmModal={confirmModal}
          title="Are you sure?"
        />
      )}
      const [showModal, setShowModal] = useState(false);

  function onTodoDelete() {
    setShowModal(true);
  }

  function confirmModal() {
    setShowModal(false);
  }

  function cancelModal() {
    setShowModal();
  }

  /*useEffect(() => {
    console.log('on mount')
   }, []) Only on Mount
  */

/*useEffect(() => {
    console.log('on mount')
   }) Every time page renders
  */

/*useEffect(() => {
   console.log('on mount')
  }, [showModal]) // on mount and on ${showModal} change

  import Todo from "./components/Todo.jsx";
  import Title from "./components/Title.jsx";
  import Modal from "./components/Modal.jsx";
  import React, { useState, useEffect } from "react";
*/
