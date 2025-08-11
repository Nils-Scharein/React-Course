import { PacmanLoader } from 'react-spinners';

const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center text-[var(--text-color)]">
    <div className="flex flex-col items-center">
      <PacmanLoader color="var(--text-color)" />
      <p className="mt-4">Loading, please wait...</p>
    </div>
  </div>
);

export default LoadingSpinner;
