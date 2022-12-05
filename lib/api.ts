import axios from 'axios';
import { Company, Job } from './interfaces';

const api = axios.create({
  baseURL:
    process.env.API_BASE_URL || 'https://connectabil-test-api.herokuapp.com',
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

const fetchCompanies = async () => {
  return api.get('/companies');
};

const createCompany = async (payload: Company) => {
  return api.post(`/companies`, payload);
};

const updateCompany = async (id: string, payload: Company) => {
  return api.put(`/companies/${id}`, payload);
};

const deleteCompany = async (id: string) => {
  return api.delete(`/companies/${id}`);
};

const fetchJobs = async () => {
  return api.get('/job-vacancy');
};

const createJob = async (payload: Job) => {
  return api.post(`/job-vacancy`, payload);
};

const updateJob = async (id: string, payload: Job) => {
  return api.put(`/job-vacancy/${id}`, payload);
};

const deleteJob = async (id: string) => {
  return api.delete(`/job-vacancy/${id}`);
};

const fetchAddress = async (zipCode: string) => {
  return axios.get(`https://viacep.com.br/ws/${zipCode}/json/`);
};

export {
  fetchCompanies,
  createCompany,
  updateCompany,
  deleteCompany,
  fetchJobs,
  createJob,
  updateJob,
  deleteJob,
  fetchAddress,
};
