
import axios from "axios";
import { useQuery } from "@tanstack/react-query";




const TodoList = () => {
    const fetchTodos = () => axios
        .get<Todo[]>("https://jsonplaceholder.typicode.com/todos") //used to fetch the data from the backend & the function return the promises
        .then((res) => res.data);

   const {data, error, isLoading } =  useQuery<Todo[], Error>({
        queryKey: ["todos"], // used for storing caching
        queryFn: fetchTodos
  });

  if(isLoading) return <p>Loading.....</p>
  if(error) return <p>{error.message }</p>

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
            {data?.map((todo)=>(
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
};

export default TodoList;
