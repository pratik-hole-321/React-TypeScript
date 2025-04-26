import { Todo } from "../types/todo";

interface Props {
  todos: Todo[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TodoList: React.FC<Props> = ({
  todos,
  toggleTask,
  deleteTask,
}: Props) => {
  return (
    <>
      <div>
        {todos.map(({ id, taskName, completed }) => {
          return (
            <div key={id}>
              <span
                onClick={() => toggleTask(id)}
                style={{
                  textDecoration: completed ? "line-through" : "none",
                }}
              >
                {taskName}
              </span>
              <button onClick={() => deleteTask(id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
