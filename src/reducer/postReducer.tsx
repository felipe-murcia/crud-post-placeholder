import { IPost } from "@/interface/Post";

export const initialState = {
    posts: [] as IPost[],
    loading: false,
    error: null as string | null,
};
  
  type Action =
    | { type: "FETCH_START" }
    | { type: "FETCH_SUCCESS"; payload: IPost[] }
    | { type: "FETCH_ERROR"; payload: string }
    | { type: "CREATE_POST"; payload: IPost }
    | { type: "UPDATE_POST"; payload: IPost }
    | { type: "DELETE_POST"; payload: number };
  
  export const postReducer = (state: typeof initialState, action: Action) => {
    switch (action.type) {
      case "FETCH_START":
        return { ...state, loading: true, error: null };
      case "FETCH_SUCCESS":
        return { ...state, loading: false, posts: action.payload };
      case "FETCH_ERROR":
        return { ...state, loading: false, error: action.payload };
      case "CREATE_POST":
        return { ...state, posts: [...state.posts, action.payload] };
      case "UPDATE_POST":
        return {
          ...state,
          posts: state.posts.map((post) =>
            post.id === action.payload.id ? action.payload : post
          ),
        };
      case "DELETE_POST":
        return {
          ...state,
          posts: state.posts.filter((post) => post.id !== action.payload),
        };
      default:
        return state;
    }
  };