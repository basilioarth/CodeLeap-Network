import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Signup.module.css';

export function Signup() {
  const [username, setUsername] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;

    setUsername(value);
  };

  const handleNavigation = () => {
    navigate('/posts', { state: { username }});
  };

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1>Welcome to CodeLeap network!</h1>
        <p>Please enter your username</p>
        <input 
          className={`${styles.input} ${
            username ? styles.filled : ''
          }`}
          type="text" 
          placeholder='John doe'
          value={username}
          onChange={handleInputChange}
        />
        <div className={styles.actionContainer}>
          <button 
            className={username ? styles.enabled : ''}
            disabled={username === ''}
            onClick={handleNavigation}
          >
            enter
          </button>
        </div>
      </div>
    </main>
  )
}