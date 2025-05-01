import apiClient from "../api";
import { Post } from "../../interfaces/Post";

export async function createPost(username: string, title: string, content: string): Promise<Post> {
    try {
        let data = {
            username: username,
            title: title,
            content: content,
        }

        const response = await apiClient.post('', data);
        
        return response.data;
    } catch (error: any) {
        throw error;
    }
}
