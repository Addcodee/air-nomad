import list from "./assets/solar_bill-list-broken.svg";
import docs from "./assets/fluent_document-folder-16-regular.svg";
import payment from "./assets/fluent_payment-32-regular.svg";
import plane from "./assets/clarity_airplane-line.svg";

export const methods = [
  {
    id: 1,
    header: "Anmeldung",
    description: "Einreichen einer Bewerbung per Telefon oder auf der Website",
    icon: list,
  },
  {
    id: 2,
    header: "Dokumentation",
    description: "Ausstellung der für die Reise notwendigen Dokumente",
    icon: docs,
  },
  {
    id: 3,
    header: "Vertrag und Zahlung",
    description: "Unterzeichnung des Vertrags und Auswahl einer Zahlungsart",
    icon: payment,
  },
  {
    id: 4,
    header: "Reise",
    description: "Der persönliche Manager ist immer in Kontakt",
    icon: plane,
  },
];
