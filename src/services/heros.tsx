import axios, { AxiosRequestConfig } from "axios";

export const HerosApis = () => {
  const getOptionsList = async (optionsUrl: string) => {
    const { data }: AxiosRequestConfig = await axios.get(`${optionsUrl}`);
    return data;
  };

  return {
    getOptionsList
  };
};
