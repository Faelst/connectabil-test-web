import { VStack } from '@chakra-ui/react';
import { useContext } from 'react';

import { Card } from '../components/Card';
import { Menu } from '../components/Menu';

import { CompaniesContext } from '../contexts/CompaniesContext';
import { JobsContext } from '../contexts/JobsContext';

export default function List() {
  const { companies, handleDeleteCompany, handleDisableCompany } =
    useContext(CompaniesContext);
  const { jobs, handleDeleteJob, handleDisableJob } = useContext(JobsContext);

  return (
    <VStack as="main" height="100vh" py={100} px={435}>
      <Menu
        jobs={jobs.map((job) => (
          <Card
            key={job._id}
            title={job.title}
            description={job.description}
            jobType={job.type}
            status={job.status}
            type="jobs"
            handleDelete={() => handleDeleteJob(job._id)}
            handleDisable={() => handleDisableJob(job._id, job)}
          />
        ))}
        companies={companies.map((company) => (
          <Card
            title={company.name}
            description={`${company.address}, ${company.number}, ${company.neighborhood}, ${company.city} - ${company.state} • ${company.zip}`}
            type="companies"
            status={company.status}
            key={company._id}
            handleDelete={() => handleDeleteCompany(company._id)}
            handleDisable={() => handleDisableCompany(company._id, company)}
          />
        ))}
      />
    </VStack>
  );
}
