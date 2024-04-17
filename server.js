const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log(`DB connected succesfully`));

app.listen(process.env.PORT, () => {
  console.log("app running");
});
// process.on('unhandledRejection', (err) => {
//   server.close(() => {
//     console.log(err.name);
//     process.exit(1);
//   });
// });
