import * as functions from "firebase-functions";

interface IConfig {
  http: {
    allowedorigins: string;
  },
}

export default functions.config() as IConfig;
