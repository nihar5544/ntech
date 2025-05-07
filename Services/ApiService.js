/* eslint-disable no-undef */
import axios from "axios";

export default class ApiService {
  // POST REQUEST FUNCTION FOR DB
  static post(path, body) {
    return axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}${path}`, body);
  }
  // GET REQUEST FUNCTION
  static get(path) {
    return axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}${path}`);
  }
  // UPDATE REQUEST FUNCTION USING PUT
  static put(path, body) {
    return axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}${path}`, body);
  }
  // UPDATE REQUEST FUNCTION USING PATCH
  static patch(path, body) {
    return axios.patch(`${process.env.NEXT_PUBLIC_BASE_URL}${path}`, body);
  }
  // DELETE REQUEST FUNCTION
  static delete(path, body) {
    return axios.delete(
      `${process.env.NEXT_PUBLIC_BASE_URL}${path}/${body}`,
      body
    );
  }
}
