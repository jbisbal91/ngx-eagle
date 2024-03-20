declare const Type: readonly ["text", "email", "number", "password", "search", "tel", "url", "textarea"];
export type NgxType = (typeof Type)[number];
export {};
