import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CreateRoom } from "./pages/create-room";
import { Room } from "./pages/room";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {" "}
        {/* Para indicar que a aplicação que o roteamento está sendo feito através de um navegador*/}
        <Routes>
          {/* Cada Route é uma página da aplicação */}
          <Route element={<CreateRoom />} index />
          <Route element={<Room />} path="/room/:roomID" />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
