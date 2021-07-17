import { EMPTY_STRING, PAGINATION } from "./constants";

export const getIdFromBaseUrl = (url, baseUrl) =>
  url.replace(baseUrl, EMPTY_STRING).slice(1, -1);

export const getCurrentPage = (page) =>
  PAGINATION.INITIAL_VALUE + PAGINATION.OFFSET * page;
