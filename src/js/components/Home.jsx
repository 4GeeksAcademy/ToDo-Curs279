import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  
  //agregar tareas
  const addTask = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  //borrar tareas
  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center text-light bg-dark">
      <h1>¿Qué tienes que hacer?</h1>

      <ul className="p-0" style={{width: "39rem"}}>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Escribe aquí tus tareas :D"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={addTask}
        />

        {tasks.map((task, index) => (
          <li key={index} className="row justify-content-between ms-2">
            {task}
            <button
              className="btn btn-sm btn-danger col-1"
              onClick={() => deleteTask(index)}
            >Borrar</button>
          </li>
        ))}
      </ul>

      <div className="mb-3">
        {tasks.length === 0 && "Bueno, siempre hay que practicar programación ;D"}
        {tasks.length === 1 && <p>{tasks.length} cosa por hacer!</p>}
		{tasks.length >= 2 && <p>{tasks.length} cosas por hacer!</p>}
      </div>
    </div>
  );
};

export default Home;