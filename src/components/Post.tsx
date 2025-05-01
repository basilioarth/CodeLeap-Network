import styles from './Post.module.css';

interface PostProps {
    loggedUser: string,
    username: string,
    title: string,
    content: string
}

export function Post({ loggedUser, username, title, content }: PostProps) {

    return (
        <div className={styles.container}>
            <div className={styles.postHeader}>
                <h1>{title}</h1>
                {
                    loggedUser === username &&
                    (
                        <div className={styles.actionContainer}>
                            <img src="./ic_baseline-delete-forever.svg" alt="" />
                            <img src="./bx_bx-edit.svg" alt="" />
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
        </div>
    )
}