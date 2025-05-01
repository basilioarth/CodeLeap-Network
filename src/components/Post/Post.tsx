import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { Input } from '../Input/Input';
import styles from './Post.module.css';
import { TextArea } from '../TextArea/TextArea';

interface PostProps {
    loggedUser: string,
    username: string,
    title: string,
    content: string
}

export function Post({ loggedUser, username, title, content }: PostProps) {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
    });
    const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    function handleDeletePost() {
        alert("Post deletado!");
        setIsCancelModalOpen(false);
    }

    function handleEditPost() {
        alert("Post editado!");
        setIsEditModalOpen(false);
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
                    <h2 className={styles.time}>25 minutes ago</h2>
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
            </Modal>
        </div>
    )
}