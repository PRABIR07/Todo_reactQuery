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
    <ul>
      {data?.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default TodoList;
