// const formatar = new Intl.DateTimeFormat("pt-BR", {
//   dateStyle: "medium",
//   timeStyle: "long",
//   timeZone: "Brazil/Brasília",
// });

// export function formatTimeToNow(date: Date) {
//   formatar.format(date);
// }

import lib from "dayjs";
import "dayjs/locale/pt-BR";
import relativeTime from "dayjs/plugin/relativeTime";

lib.locale("pt-BR");
lib.extend(relativeTime);

export const dayjs = lib;
