export interface MappedTodo {
  id: number;
  title: string;
  status: Status;
}

type Status = "Completed" | "Not Completed";
