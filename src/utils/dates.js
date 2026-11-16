export function formatPublicationDate(date) {
  const parts = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit", month: "short", year: "numeric", timeZone: "UTC"
  }).formatToParts(new Date(`${date}T12:00:00Z`));
  const value = (type) => parts.find((part) => part.type === type).value.replace(".", "");
  return `${value("day")} ${value("month")} ${value("year")}`;
}
