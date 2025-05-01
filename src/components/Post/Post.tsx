import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { Input } from '../Input/Input';
import { TextArea } from '../TextArea/TextArea';
import { deletePost } from '../../http/services/deletePost';
import { editPost } from '../../http/services/editPost';
import { format, formatDistanceToNow } from 'date-fns';
import styles from './Post.module.css';

interface PostProps {
    id: number,
    loggedUser: string,
    username: string,
    title: string,
    content: string,
    createdAt: string,
    handleAction: () => void;
}

export function Post({ id, loggedUser, username, title, content, createdAt, handleAction }: PostProps) {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
    });
    const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const createdAtFormatted = format(createdAt, "MMMM d 'at' h:mm a");
    const createdDateRelativeToNow = formatDistanceToNow(createdAt, { addSuffix: true });

    const handleDeletePost = async () => {
        try {
            const response = await deletePost(id);
            console.log(response);
        } catch(error) {
            console.error('Error deleting post:', error);
        }
        setIsCancelModalOpen(false);
        handleAction();
    }

    const handleEditPost = async () => {
        try {
            const response = await editPost(id, formData.title, formData.content);
            console.log(response);
        } catch(error) {
            console.error('Error editing post:', error);
        }
        setIsEditModalOpen(false);
        handleAction();
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        console.log(formData);
    };

    return (
        <div className={styles.container}>
            <div className={styles.postHeader}>
                <h1>{title}</h1>
                {
                    loggedUser === username &&
                    (
                        <div className={styles.actionContainer}>
                            <img src="./ic_baseline-delete-forever.svg" alt="" onClick={() => setIsCancelModalOpen(true)} />
                            <img src="./bx_bx-edit.svg" alt="" onClick={() => setIsEditModalOpen(true)} />
                        </div>
                    )
                }
            </div>
            <div className={styles.content}>
                <div className={styles.infos}>
                    <h2 className={styles.username}>@{username}</h2>
                    <time 
                        className={styles.time} 
                        title={createdAtFormatted} 
                        dateTime={createdAt}
                    >
                        {createdDateRelativeToNow}
                    </time>
                </div>
                <p>{content}</p>
            </div>
            <Modal 
                isOpen={isCancelModalOpen} 
                message="Are you sure you want to delete this item?" 
                actionLabel="Delete"
                onCancel={() => setIsCancelModalOpen(false)}
                onConfirm={() => handleDeletePost()}
            />
            <Modal 
                isOpen={isEditModalOpen} 
                message="Edit item"
                actionLabel="Save"
                onCancel={() => setIsEditModalOpen(false)}
                onConfirm={() => handleEditPost()}
            >
                <Input
                    label="Title"
                    name="title"
                    placeholder="Hello world"
                    value={title}
                    handleInputChange={handleInputChange}
                />
                <TextArea 
                    label="Content"
                    name="content"
                    placeholder="Content here"
                    value={content}
                    handleTextAreaChange={handleInputChange}
                />
            </Modal>
        </div>
    )
}