import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { UserContext } from './AuthContext'
// useErrorHandler

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong: Make sure you type Developer</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function Errorr({ username }) {
  if (username  === 'Developer') {
    throw new Error('💥 CABOOM 💥 Make sure you type Developer');
  }
  return <h2>Hello  {username} Your Security settings will be made avialable soon </h2>
}

export default function Privacy() {
    const {user}= UserContext()

  const [username, setUsername] = React.useState('');
  const usernameRef = React.useRef(null);

  return (
    <div className='logout'>
      <label>
        {` ${user.displayName} type "Developer"`}
        <input className='input'
          placeholder={`Type "Developer"`}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          ref={usernameRef}
        />
      </label>
      <div>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            setUsername('');
            usernameRef.current.focus();
          }}
          resetKeys={[username]}
        >
          <Errorr username={username} />
        </ErrorBoundary>
      </div>
    </div>
  );
}
