import "./index.css";
import { data } from "./data/data";
import Task from "./components/Task";

function App() {
  return (
    <div className="App">
      <div className="todoListItems">
        {data.map((item) => {
          return <Task taskName={item.taskName} checked={item.checked} />;
        })}
      </div>
    </div>
  );
}

export default App;
