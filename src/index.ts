import { Hono } from "hono";
import { prettyJSON } from "hono/pretty-json";
import blogs from "./blogs/blogs";

const app = new Hono();

// 出力する際のJSONを見やすくできる
app.use("*", prettyJSON());
app.route("/posts", blogs);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
