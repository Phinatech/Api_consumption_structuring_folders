import { IUser } from "../../types";
import axios from "./api";

export const fetchDictionary = async () => {
  await axios
    .get("/")
    .then((res) => res.data)
    .catch((err) => {
      return err;
    });
};

// export const fetchDistionarys = async (data: IUser, id: string) => {
//   await axios
//     .get(`/define/${)
//     .then((res) => res.data)
//     .catch((err) => {
//       return err;
//     });
// };
