import { ApiRequest } from "./requestPrototype";

// Base prototype for CRM
const baseCRMRequest = new ApiRequest(
  "https://test.dev/contacts",
  {
    Authorization: "Bearer some_token",
    "Content-Type": "application/json",
  },
  {
    source: "web",
    tags: ["lead"],
    contact: {
      name: "",
      email: "",
    },
  }
);

// Clone and customize per user
function createCRMRequest(user: { name: string; email: string }) {
  const request = baseCRMRequest.clone();
  request.payload.contact.name = user.name;
  request.payload.contact.email = user.email;
  return request;
}

// Example controller or service logic
const users = [
  { name: "Ana Perez", email: "ana@example.com" },
  { name: "Luis Gomez", email: "luis@example.com" },
];

// ✅ Benefits of Prototype Here:
// You don’t repeat payload setup logic
// Avoids unintended side-effects by cloning.
// Can easily manage and update base templates.

users.forEach(async (user) => {
  const crmRequest = createCRMRequest(user);
  // Imagine using Axios or HttpService from NestJS here
  console.log(`Sending request to ${crmRequest.endpoint} with payload`, crmRequest.payload);
});