interface taskProps {
  taskName: string;
  checked: boolean;
}

const Task = ({ taskName, checked }: taskProps) => {
  return (
    <div className="taskContainer">
      <h1>{taskName}</h1>
      <input type="checkbox" />
    </div>
  );
};

export default Task;
