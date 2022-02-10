import api from "../config";

export async function getAllCars() {
  try {
    const { data } = await await api.get("Cars");

    return data;
  } catch (err) {
    console.log(err);
  }
}
