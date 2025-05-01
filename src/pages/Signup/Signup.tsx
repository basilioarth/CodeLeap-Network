import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Signup.module.css';
import { Input } from '../../components/Input/Input';

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
        <Input
          label="Please enter your username"
          name="username"
          placeholder="John doe"
          value={loggedUsername}
          handleInputChange={handleInputChange}
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