import { useEffect, useReducer } from "react";
import { IPost } from "@/interface/Post";
import { initialState, postReducer } from "@/reducer/postReducer";
import { api } from "@/configs/api";

export const usePost = () => {
    
    const [ state, dispatch ] = useReducer(postReducer, initialState);
    
    console.log(state)

    const fetchPosts = async () => {
        dispatch({ type: "FETCH_START" });
        try {
            const response = await api.get<IPost[]>(`/posts`);
            dispatch({ type: "FETCH_SUCCESS", payload: response.data });
        } catch (err: any) {
            dispatch({ type: "FETCH_ERROR", payload: err.message ?? "Error fetching posts" });
        }
    };

    const createPost = async (newPost: IPost) => {
        try {
        const response = await api.post<IPost>(`/posts`, newPost);
        dispatch({ type: "CREATE_POST", payload: response.data });
        return response;
        } catch (err: any) {
        dispatch({ type: "FETCH_ERROR", payload: err.message ?? "Error creating post" });
        }
    };

    const updatePost = async (id: number, updatedPost: IPost) => {
        try {
            const response = await api.put<IPost>(`/posts/${id}`, updatedPost);
            dispatch({ type: "UPDATE_POST", payload: response.data });
        } catch (err: any) {
            dispatch({ type: "FETCH_ERROR", payload: err.message ?? "Error updating post" });
        }
    };

    const deletePost = async (id: number) => {
        try {
            await api.delete(`/posts/${id}`);
            dispatch({ type: "DELETE_POST", payload: id });
        } catch (err: any) {
            dispatch({ type: "FETCH_ERROR", payload: err.message ?? "Error deleting post" });
        }
    };

    const editPost = async (value: IPost) => {
        try {
            dispatch({ type: "SET_POST", payload: value });
        } catch (err: any) {
            dispatch({ type: "FETCH_ERROR", payload: err.message ?? "Error seting post" });
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return {
        postData: state.post,
        data: state.posts,
        loading: state.loading,
        error: state.error,
        fetchPosts,
        createPost,
        updatePost,
        deletePost,
        editPost,
    };
};