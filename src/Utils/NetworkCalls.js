import { API } from "../Utils/API"
import axios from "axios"
export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${API}/api/products`)
    return response
  } catch (error) {
    console.log(error)
  }
}
