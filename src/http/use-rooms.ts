import { useQuery } from "@tanstack/react-query";

import type { GetRoomsResponse } from "./types/get-rooms-response";

export function useRooms() {
  return useQuery({
    queryKey: ["get-rooms"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3333/rooms");

      // Adicionar verificação se a resposta da API foi bem-sucedida
      if (!response.ok) {
        throw new Error("Falha ao buscar as salas.");
      }
      const result: GetRoomsResponse = await response.json();

      return result;
    },
  });
}
