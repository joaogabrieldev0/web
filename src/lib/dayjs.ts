// const formatar = new Intl.DateTimeFormat("pt-BR", {
//   dateStyle: "medium",
//   timeStyle: "long",
//   timeZone: "Brazil/Brasília",
// });

// export function formatTimeToNow(date: Date) {
//   formatar.format(date);
// }

import Lib from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
Lib.extend(relativeTime);

export const dayjs = Lib;
