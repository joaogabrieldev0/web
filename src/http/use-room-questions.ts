import { useQuery } from "@tanstack/react-query";
import type { GetRoomQuestionsResponse } from "./types/get-room-questions-response";
export function useRoomQuestions(roomID: string) {
  return useQuery({
    queryKey: ["get-questions"],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomID}/questions`
      );

      if (!response.ok) {
        throw new Error("Falha ao buscar as salas.");
      }
      const result: GetRoomQuestionsResponse = await response.json();

      return result;
    },
  });
}

// [
//   {
//     id,
//     question,
//     answer,
//     createdAt,
//   },
// ];
