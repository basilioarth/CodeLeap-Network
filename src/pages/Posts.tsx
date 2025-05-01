import { useLocation } from "react-router-dom";
import styles from './Posts.module.css';
import { useEffect, useState } from "react";
import { Post } from "../components/Post";

export function Posts() {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
    });
    const [hasFullFilledRequiredFields, setHasFullFilledRequiredFields] = useState(false);

    const location = useLocation();
    const { loggedUsername } = location.state || {};

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCreatePost = () => {
        console.log('Post created:', formData);
    }

    useEffect(() => {
        const allFieldsFilled = Object.values(formData).every((value) => value.trim() !== '');
        setHasFullFilledRequiredFields(allFieldsFilled);
    }, [formData]);

    return (
        <main className={styles.container}>
            <header>CodeLeap Network</header>
            <div className={styles.content}>
                <div className={styles.newPost}>
                    <h1>What's on your mind?</h1>
                    <h2>Title</h2>
                    <input 
                        type="text"
                        name="title"
                        placeholder="Hello world"
                        className={`${styles.input} ${
                            loggedUsername ? styles.filled : ''
                        }`}
                        onChange={handleInputChange}
                    />
                    <h2>Content</h2>
                    <textarea 
                        id="content" 
                        name="content" 
                        placeholder="Content here"
                        className={`${styles.textarea} ${
                            loggedUsername ? styles.filled : ''
                        }`}
                        onChange={handleInputChange}
                    />
                    <div className={styles.actionContainer}>
                    <button 
                        className={hasFullFilledRequiredFields ? styles.enabled : ''}
                        disabled={!hasFullFilledRequiredFields}
                        onClick={handleCreatePost}
                    >
                        Create
                    </button>
                    </div>
                </div>
                <div className={styles.postsList}>
                    <Post loggedUser={loggedUsername} username={loggedUsername} title={formData.title} content={formData.content} />
                    <Post loggedUser={loggedUsername} username={"maria"} title={formData.title} content={formData.content} />
                    <Post loggedUser={loggedUsername} username={loggedUsername} title={formData.title} content={formData.content} />
                    <Post loggedUser={loggedUsername} username={loggedUsername} title={formData.title} content={formData.content} />
                </div>
            </div>
        </main>
    )
}