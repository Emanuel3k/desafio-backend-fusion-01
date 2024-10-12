import { app } from "@/infra/App";

app.server().then(() => {
  console.log("Server is running on port 1337");
});
