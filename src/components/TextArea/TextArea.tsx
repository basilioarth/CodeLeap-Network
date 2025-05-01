import styles from './TextArea.module.css';

interface TextAreaProps {
    label: string;
    name: string;
    placeholder: string;
    value: string;
    handleTextAreaChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function TextArea({ label, name, placeholder, value, handleTextAreaChange }: TextAreaProps) {
    return (
        <div className={styles.container}>
            <h2 className={styles.label}>{label}</h2>
            <textarea  
                name={name} 
                placeholder={placeholder}
                className={`${styles.textarea} ${
                    value ? styles.filled : ''
                }`}
                onChange={handleTextAreaChange}
            />
        </div>
    )
}