import axios from "axios";
import env from "src/env";

const API_URL = env.BASE_URL + "/event";

export const createEvent = async (eventData: Event, token: string) => {
  try {
    const response = await axios.post(
      `${API_URL}`,
      {
        ...eventData,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const attendEvent = async (eventId: string, token: string) => {
  try {
    const response = await axios.post(`${API_URL}/attend/${eventId}`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getEvents = async (token: string) => {
  try {
    const response = await axios.get(`${API_URL}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteEvent = async (eventId: string, token: string) => {
  try {
    const response = await axios.delete(`${API_URL}/${eventId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const patchEvent = async (eventId: string, eventData: Partial<Event>, token: string) => {
  try {
    const response = await axios.patch(`${API_URL}/${eventId}`, eventData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};