import { Hono } from "hono";
import { prettyJSON } from "hono/pretty-json";
import pages from "./blogs/blogs";
import auth from "./auth/auth";
import { basicAuth } from "hono/basic-auth";

const app = new Hono();

// 出力する際のJSONを見やすくできる
app.use("*", prettyJSON());
app.use(
  "/auth/*",
  basicAuth({
    username: "renren",
    password: "1234renren",
  })
);

app.route("/posts", pages);
app.route("auth", auth);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
