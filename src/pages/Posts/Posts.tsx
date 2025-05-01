import { useLocation } from "react-router-dom";
import styles from './Posts.module.css';
import { useEffect, useState } from "react";
import { Post } from "../../components/Post/Post";
import { Input } from "../../components/Input/Input";
import { TextArea } from "../../components/TextArea/TextArea";
import { getAllPosts } from "../../http/services/getAllPosts";
import { Post as PostInterface } from "../../interfaces/Post";
import { createPost } from "../../http/services/createPost";

export function Posts() {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
    });
    const [hasFullFilledRequiredFields, setHasFullFilledRequiredFields] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [postsList, setPostsList] = useState<PostInterface[]>([]);

    const location = useLocation();
    const { loggedUsername } = location.state || {};

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const loadAllPosts = async () => {
        setIsLoading(true);

        try {
            const response = await getAllPosts();
            setPostsList(response);
            console.log(response);
        } catch (error: any) {
            console.error('Error fetching posts:', error);
        }

        setIsLoading(false);
    }

    const handleCreatePost = async () => {
        try {
            await createPost(
                loggedUsername, 
                formData.title, 
                formData.content
            );

            loadAllPosts();
        } catch (error: any) {
            console.error('Error creating post:', error);
        }
    }

    useEffect(() => {
        loadAllPosts();
    }, []);

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
                    <Input
                        label="Title"
                        name="title"
                        placeholder="Hello world"
                        value={formData.title}
                        handleInputChange={handleInputChange}
                    />
                    <TextArea
                        label="Content"
                        name="content"
                        placeholder="Content here"
                        value={formData.content}
                        handleTextAreaChange={handleInputChange} 
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
                    {
                        isLoading ? 
                        (
                            <div className={styles.noPosts}>
                                <h1>Loading...</h1>
                            </div>
                        )
                        : 
                        (
                            postsList.length === 0 ? (
                                <div className={styles.noPosts}>
                                    <h1>There are no posts yet.</h1>
                                </div>
                            ) : (
                                postsList.map((post) => (
                                    <Post
                                        key={post.id}
                                        id={post.id}
                                        loggedUser={loggedUsername}
                                        username={post.username}
                                        title={post.title}
                                        content={post.content}
                                        createdAt={post.created_datetime}
                                        handleAction={loadAllPosts}
                                    />
                                ))
                            )
                        )  
                    }
                </div>
            </div>
        </main>
    )
}