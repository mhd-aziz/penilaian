import axios from "axios";

const API_URL = "http://localhost:3001/api";

export const getSiswa = async () => {
  try {
    const response = await axios.get(`${API_URL}/siswa`);
    return response.data;
  } catch (error) {
    console.error("Error fetching students:", error);
    return [];
  }
};

export const addSiswa = async (siswaData) => {
  try {
    const response = await axios.post(`${API_URL}/siswa`, siswaData);
    return response.data;
  } catch (error) {
    console.error("Error adding student:", error);
    throw error;
  }
};

export const getGuru = async () => {
  try {
    const response = await axios.get(`${API_URL}/guru`);
    return response.data;
  } catch (error) {
    console.error("Error fetching teachers:", error);
    return [];
  }
};

