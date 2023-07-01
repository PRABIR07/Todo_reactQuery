import useTodos from "../hooks/useTodos";

const TodoList = () => {
  const { data, error, isLoading } = useTodos();
  if (isLoading) return <p>Loading.....</p>;
  if (error) return <p>{error.message}</p>;

  //   const [todos, setTodos] = useState<Todo[]>([]);
  //   const [error, setError] = useState("");

  //   useEffect(() => {
  //     axios
  //       .get("")
  //       .then((res) => setTodos(res.data))
  //       .catch((error) => setError(error));
  //   }, []);

  return (
    <ul className="list-group">
      {data?.map((todo) => (
        <li key={todo.id} className="list-group-item">{todo.title}</li>
      ))}
    </ul>
  );
};

export default TodoList;
