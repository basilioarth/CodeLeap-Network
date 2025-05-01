import styles from './Input.module.css';

interface InputProps {
    label: string;
    name: string;
    placeholder: string;
    value: string;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ label, name, placeholder, value, handleInputChange }: InputProps) {
    return (
        <div className={styles.container}>
            <h2 className={styles.label}>{label}</h2>
            <input 
                type="text"
                name={name}
                placeholder={placeholder}
                className={`${styles.input} ${
                    value ? styles.filled : ''
                }`}
                onChange={handleInputChange}
            />
        </div>
    )
}