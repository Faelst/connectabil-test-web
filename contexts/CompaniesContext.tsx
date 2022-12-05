import { createContext, ReactNode, useEffect, useState } from 'react';
import { Company } from '../lib/interfaces';

import * as api from '../lib/api';

interface CompaniesContextType {
  companies: Company[];
  setCompanies: (companies: Company[]) => void;
  company: Company;
  setCompany: (company: Company) => void;
  handleChangeCompanyFormText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDeleteCompany: (id: string) => Promise<void>;
  handleDisableCompany: (id: string, company: Company) => Promise<void>;
}

interface CompaniesProviderProps {
  children: ReactNode;
}

export const CompaniesContext = createContext<CompaniesContextType>(
  {} as CompaniesContextType
);

export function CompaniesProvider({ children }: CompaniesProviderProps) {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [company, setCompany] = useState<Company>({} as Company);

  const fetchCompanies = async () => {
    try {
      const { data } = await api.fetchCompanies();
      setCompanies(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeCompanyFormText = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setCompany((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleDeleteCompany = async (id: string) => {
    try {
      await api.deleteCompany(id);

      fetchCompanies();
    } catch (error) {
      alert('Erro ao deletar');
    }
  };

  const handleDisableCompany = async (id: string, company: Company) => {
    try {
      await api.updateCompany(id, { ...company, status: !company.status });

      fetchCompanies();
    } catch (error) {
      alert('Erro ao desabilitar');
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, [company]);

  return (
    <CompaniesContext.Provider
      value={{
        companies,
        setCompanies,
        company,
        setCompany,
        handleChangeCompanyFormText,
        handleDeleteCompany,
        handleDisableCompany,
      }}
    >
      {children}
    </CompaniesContext.Provider>
  );
}
