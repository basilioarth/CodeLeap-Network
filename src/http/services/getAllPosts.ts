import apiClient from "../api";
import { Post } from "../../interfaces/Post";

export async function getAllPosts(): Promise<Post[]> {
    try {
        const response = await apiClient.get<{ results: Post[] }>('');

        return response.data.results;
    } catch (error: any) {
        throw error;
    }
}
