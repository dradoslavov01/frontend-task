import axios from "axios";

export const getArticlesRequest = () =>
  axios.get("https://storage.googleapis.com/aller-structure-task/article_list.json");


export const updateArticleRequest = (data, id) =>
  axios.put(`https://storage.googleapis.com/aller-structure-task/article_list.json/${id}`, data)

export const deleteArticleRequest = (id) =>
  axios.delete(`https://storage.googleapis.com/aller-structure-task/article_list.json/${id}`);