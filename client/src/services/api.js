import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

export const getDocuments = async () => {
  const response = await axios.get(`${BASE_URL}/documents`);
  return response.data;
};

export const addDocument = async (document) => {
  const response = await axios.post(`${BASE_URL}/documents`, document);
  return response.data;
};

export const editDocument = async (id, document) => {
  const response = await axios.put(`${BASE_URL}/documents/${id}`, document);
  return response.data;
};

export const deleteDocument = async (id) => {
  const response = await axios.delete(`${BASE_URL}/documents/${id}`);
  return response.data;
};
