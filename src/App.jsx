import React, { Suspense, lazy } from 'react';
import './App.css';
import { Hourglass } from 'react-loader-spinner';

// Utility function to add a delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Lazy load with a delay
const HomePage = lazy(() =>
  delay(2000).then(() => import('./Pages/HomePage')) // Add a 2-second delay before loading HomePage
);

function App() {
  return (
    <div>
      <Suspense
        fallback={
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Hourglass
              visible={true}
              height="80"
              width="80"
              ariaLabel="hourglass-loading"
              colors={['#306cce', '#72a1ed']}
            />
          </div>
        }
      >
        <HomePage />
      </Suspense>
    </div>
  );
}

export default App;
