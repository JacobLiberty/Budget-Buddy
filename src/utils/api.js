import { Client } from "@gadget-client/budget-buddy";
const API_KEY = "gsk-FdyJC7MCBwiG8mwD4ZwJt4rdi768tQzL";
export const api = new Client({
  authenticationMode: { apiKey: API_KEY },
});
