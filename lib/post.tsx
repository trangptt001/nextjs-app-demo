import axios from "axios";
export const getPosts = async () => {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getPostIds = async () => {
    try {
        const post = await getPosts();
        //@ts-ignore
        return post.map((post) => ({
            params: {
                id: `${post.id}`,
            },
        }));
    } catch (error) {
        console.log(error);
    }
};
//@ts-ignore
export const getPostById = async id => {
    try{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return response.data;
    }catch(error) {
        console.log(error)
    }
}