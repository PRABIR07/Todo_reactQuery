import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  userId: number;
}

const useTodos = () => {
  const fetchTodos = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos") //used to fetch the data from the backend & the function return the promises
      .then((res) => res.data);

  return useQuery<Todo[], Error>({
    queryKey: ["todos"], // used for storing caching
    queryFn: fetchTodos,
  });
};

export default useTodos;
