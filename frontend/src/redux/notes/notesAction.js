import axios from "axios";
import { Base_Url } from "../../constants/BaseUrl";
import { ADD, DELETE, GET, UPDATE } from "./notesType";

export const getAction = (token) => (dispatch) => {
  return axios
    .get(`${Base_Url}/notes`, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    })
    .then((res) => dispatch({ type: GET, payload: res.data.notes }));
};

export const addAction = (token, payload) => (dispatch) => {
  return axios
    .post(`${Base_Url}/notes/add`, payload, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      alert("Added Successfully");
      return dispatch({ type: ADD, payload: res.data.notes });
    })
    .catch((err) => console.log(err));
};

export const updateAction = (token, id, payload) => (dispatch) => {
  return axios
    .patch(`${Base_Url}/notes/update/${id}`, payload, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      alert("Added Updated");
      return dispatch({ type: UPDATE, payload: res.data.notes });
    })
    .catch((err) => console.log(err));
};

export const deleteAction = (token, id, payload) => (dispatch) => {
  return axios
    .delete(`${Base_Url}/notes/delete/${id}`, payload, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      alert("Deleted Successfully");
      return dispatch({ type: DELETE, payload: res.data.notes });
    })
    .catch((err) => console.log(err));
};

export const getSingleAction = (token, id) => (dispatch) => {
  return axios
    .patch(`${Base_Url}/notes/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      alert("Added Updated");
      return dispatch({ type: UPDATE, payload: res.data.notes });
    })
    .catch((err) => console.log(err));
};
