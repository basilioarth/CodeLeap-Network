import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Signup.module.css';

export function Signup() {
  const [loggedUsername, setLoggedUsername] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;

    setLoggedUsername(value);
  };

  const handleNavigation = () => {
    navigate('/posts', { state: { loggedUsername }});
  };

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1>Welcome to CodeLeap network!</h1>
        <p>Please enter your username</p>
        <input 
          className={`${styles.input} ${
            loggedUsername ? styles.filled : ''
          }`}
          type="text" 
          placeholder='John doe'
          value={loggedUsername}
          onChange={handleInputChange}
        />
        <div className={styles.actionContainer}>
          <button 
            className={loggedUsername ? styles.enabled : ''}
            disabled={loggedUsername === ''}
            onClick={handleNavigation}
          >
            enter
          </button>
        </div>
      </div>
    </main>
  )
}