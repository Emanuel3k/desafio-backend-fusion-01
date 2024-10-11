import { app } from "@/infra/app";

app.server().then(() => {
  console.log("Server is running on port 1337");
});
