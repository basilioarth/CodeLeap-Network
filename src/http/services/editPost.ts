import apiClient from "../api";
import { Post } from "../../interfaces/Post";

export async function editPost(id: number, title: string, content: string): Promise<Post> {
    try {
        let data = {
            title: title,
            content: content,
        }

        const response = await apiClient.patch(`/${id}/`, data);
        
        return response.data;
    } catch (error: any) {
        throw error;
    }
}
