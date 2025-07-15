// A importação do Link pode ser removida se não for usada
// import { Link } from "react-router-dom";

import { CreateRoomForm } from "@/components/create-room-form";
import { RoomList } from "@/components/room-list";

export function CreateRoom() {
  // 1. Capture os estados de 'isLoading' e 'isError' do useQuery

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-2 items-start gap-8">
          <CreateRoomForm />

          <RoomList />
        </div>
      </div>
    </div>
  );
}
