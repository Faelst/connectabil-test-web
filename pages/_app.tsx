import type { AppProps } from 'next/app';
import { CompaniesProvider } from '../contexts/CompaniesContext';
import { JobsProvider } from '../contexts/JobsContext';
import ThemeContainer from '../contexts/theme/ThemeContainer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContainer>
      <CompaniesProvider>
        <JobsProvider>
          <Component {...pageProps} />
        </JobsProvider>
      </CompaniesProvider>
    </ThemeContainer>
  );
}
