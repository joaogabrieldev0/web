import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type GetRoomsAPIResponse = Array<{
  id: string;
  name: string;
}>;

export function CreateRoom() {
  const { data, isLoading } = useQuery({
    // Identificador Único
    queryKey: ["get-rooms"],
    // Função que será executada para chamar a API
    queryFn: async () => {
      const response = await fetch("http://localhost:3333/rooms");
      const result: GetRoomsAPIResponse = await response.json();

      return result;
    },
  });

  return (
    <div className="flex flex-col gap-1">
      Create Room
      <br />
      {/* Chaves no react, permitem que um código JavaScript seja escrito no HTML */}
      {isLoading ? <p>Carregando...</p> : null}
      <pre>
        {data?.map((room) => {
          return (
            <Link key={room.id} to={`/room/${room.id}`}>
              {room.name}
            </Link>
          );
        })}
      </pre>
      <Link className="underline" to="/room">
        Acessar Sala
      </Link>
    </div>
  );
}
