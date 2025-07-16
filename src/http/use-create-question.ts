import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreateQuestionRequest } from "./types/create-question-request";
import type { CreateQuestionResponse } from "./types/create-question-response";
import type { GetRoomQuestionsResponse } from "./types/get-room-questions-response";

//' MUTATION -> Criação, remoção ou edição
//' QUERY -> Listagem

export function useCreateQuestion(roomID: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateQuestionRequest) => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomID}/questions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(data),
        }
      );
      const result: CreateQuestionResponse = await response.json();

      return result;
    },

    // Executa no momento que for feita a chamada pra API
    onMutate({ question }) {
      const questions = queryClient.getQueryData<GetRoomQuestionsResponse>([
        "get-questions",
        roomID,
      ]);

      const questionsArray = questions ?? [];

      const newQuestion = {
        id: crypto.randomUUID(),
        question,
        answer: null,
        createdAt: new Date().toISOString(),
        isGenneratingAnswer: true,
      };

      queryClient.setQueryData<GetRoomQuestionsResponse>(
        ["get-questions", roomID],
        [newQuestion, ...questionsArray]
      );

      return { newQuestion, questions };
    },

    onSuccess(data, _variables, context) {
      queryClient.setQueryData<GetRoomQuestionsResponse>(
        ["get-questions", roomID],
        (questions) => {
          if (!questions) {
            return questions;
          }

          if (!context.newQuestion) {
            return questions;
          }

          return questions.map((question) => {
            if (question.id === context.newQuestion.id) {
              return {
                ...context.newQuestion,
                id: data.questionID,
                answer: data.answer,
                isGeneratingAnswer: false,
              };
            }

            return question;
          });
        }
      );
    },

    onError(_error, _variables, context) {
      if (context?.questions) {
        queryClient.setQueryData<GetRoomQuestionsResponse>(
          ["get-questions", roomID],
          context.questions
        );
      }
    },

    // onSuccess: () => {
    //   queryClient.invalidateQueries({ queryKey: ["get-rooms"] });
    // },
  });
}
