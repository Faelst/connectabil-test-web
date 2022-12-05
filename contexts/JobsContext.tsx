import { createContext, ReactNode, useEffect, useState } from 'react';
import { Job } from '../lib/interfaces';

import * as api from '../lib/api';

interface JobsContextType {
  jobs: Job[];
  setJobs: (jobs: Job[]) => void;
  job: Job;
  setJob: (job: Job) => void;
  handleChangeJobFormText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDeleteJob: (id: string) => Promise<void>;
  handleDisableJob: (id: string, job: Job) => Promise<void>;
}

interface CompaniesProviderProps {
  children: ReactNode;
}

export const JobsContext = createContext<JobsContextType>(
  {} as JobsContextType
);

export function JobsProvider({ children }: CompaniesProviderProps) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [job, setJob] = useState<Job>({} as Job);

  const fetchJobs = async () => {
    try {
      const { data } = await api.fetchJobs();
      setJobs(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeJobFormText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setJob((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleDeleteJob = async (id: string) => {
    try {
      await api.deleteJob(id);

      fetchJobs();
    } catch (error) {
      alert('Erro ao deletar');
    }
  };

  const handleDisableJob = async (id: string, job: Job) => {
    try {
      await api.updateJob(id, { ...job, status: !job.status });

      fetchJobs();
    } catch (error) {
      alert('Erro ao desabilitar');
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [job]);

  return (
    <JobsContext.Provider
      value={{
        jobs,
        setJobs,
        job,
        setJob,
        handleChangeJobFormText,
        handleDeleteJob,
        handleDisableJob,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
}
