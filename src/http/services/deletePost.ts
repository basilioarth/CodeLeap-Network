import apiClient from "../api";

export async function deletePost(id: number): Promise<{}> {
    try {
        const response = await apiClient.delete(`/${id}/`);
        
        return response.data;
    } catch (error: any) {
        throw error;
    }
}
