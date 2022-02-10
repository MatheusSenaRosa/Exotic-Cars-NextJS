import api from "../config";

export async function getSelectedCar(carID: number) {
  try {
    const { data } = await api.get(`/Cars/${carID}`);
    return data;
  } catch (err) {
    console.log(err);
  }
}
