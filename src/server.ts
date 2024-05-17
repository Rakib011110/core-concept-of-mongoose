import mongoose from "mongoose";
import config from "./app/config";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(config.datbaseUrl as string);

    app.listen(config.port, () => {
      console.log(`Example app listening on process.env.PORT ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
