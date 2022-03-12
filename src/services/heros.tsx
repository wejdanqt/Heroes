import axios, { AxiosRequestConfig } from "axios";

export const HerosApis = () => {
  const HEROS_URL = "";
  const FILTER_URL = "";

  const getOptionsList = async (optionsUrl: string) => {
    const { data }: AxiosRequestConfig = await axios.get(`${optionsUrl}`);
    return data;
  };

  //fake service to retrieve all heroes in JSON format based
  const getAllHeros = async () => {
    const { data }: AxiosRequestConfig = await axios.get(`${HEROS_URL}`);
    return data;
  };

  //fake service to retrieve filter configuration in JSON format based
  const getFilterConfiguration = async () => {
    const { data }: AxiosRequestConfig = await axios.get(`${FILTER_URL}`);
    return data;
  };

  return {
    getOptionsList,
    getAllHeros,
    getFilterConfiguration
  };
};
