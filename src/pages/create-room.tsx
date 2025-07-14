// biome-ignore assist/source/organizeImports: false
import { useQuery } from "@tanstack/react-query";
import {
  CardTitle,
  Card,
  CardHeader,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
// A importação do Link pode ser removida se não for usada
// import { Link } from "react-router-dom";

type GetRoomsAPIResponse = Array<{
  id: string;
  name: string;
  questionsCount: number;
  createdAt: string;
}>;

export function CreateRoom() {
  // 1. Capture os estados de 'isLoading' e 'isError' do useQuery
  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-rooms"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3333/rooms");

      // Adicionar verificação se a resposta da API foi bem-sucedida
      if (!response.ok) {
        throw new Error("Falha ao buscar as salas.");
      }

      const result: GetRoomsAPIResponse = await response.json();
      return result;
    },
  });

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-2 items-start gap-8">
          <div />

          <Card>
            <CardHeader>
              <CardTitle>Salas Recentes</CardTitle>
              <CardDescription>
                Acesso Rápido para as Salas Criadas Recentemente
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              {isLoading && <p>Carregando salas...</p>}

              {isError && (
                <p className="text-red-500">
                  Ocorreu um erro ao buscar as salas.
                </p>
              )}
              {data?.map((room) => {
                return (
                  <Link
                    className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent"
                    key={room.id}
                    to={`rooms/${room.id}`}
                  >
                    <div className="flex flex-1 flex-col gap-1">
                      <h3 className="font-medium ">{room.name}</h3>

                      <div className="flex items-center gap-2">
                        <Badge>{room.createdAt}</Badge>
                        <Badge className="text-xs " variant={"outline"}>
                          {room.questionsCount} pergunta(s)
                        </Badge>
                      </div>
                    </div>

                    <span className="flex items-center gap-1 text-sm">
                      Entrar
                      <ArrowRight className="size-3 " />
                    </span>
                  </Link>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
