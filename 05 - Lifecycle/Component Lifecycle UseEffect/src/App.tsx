import { useState } from 'react';
import LifecycleLoggerUseEffect from './components/LifecycleLoggerUseEffect.tsx';

function App() {
  const [showLogger, setShowLogger] = useState(false);

  return (
    <div className='container'>
      <h2>React Lifecycle Playground</h2>

      {/* Toggle LifecycleLoggerUseEffect */}
      <button
        className='primary-btn'
        onClick={() => setShowLogger(!showLogger)}
      >
        {showLogger ? 'Unmount Logger' : 'Mount Logger'}
      </button>

      {showLogger && <LifecycleLoggerUseEffect />}
    </div>
  );
}
export default App;
