import axios from 'axios';
import queryString from 'query-string';
import { ChatBotInterface, ChatBotGetQueryInterface } from 'interfaces/chat-bot';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getChatBots = async (query?: ChatBotGetQueryInterface): Promise<PaginatedInterface<ChatBotInterface>> => {
  const response = await axios.get('/api/chat-bots', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createChatBot = async (chatBot: ChatBotInterface) => {
  const response = await axios.post('/api/chat-bots', chatBot);
  return response.data;
};

export const updateChatBotById = async (id: string, chatBot: ChatBotInterface) => {
  const response = await axios.put(`/api/chat-bots/${id}`, chatBot);
  return response.data;
};

export const getChatBotById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/chat-bots/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteChatBotById = async (id: string) => {
  const response = await axios.delete(`/api/chat-bots/${id}`);
  return response.data;
};
