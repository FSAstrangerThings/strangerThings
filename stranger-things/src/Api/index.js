
const BASE_URL = "https://strangers-things.herokuapp.com/api/2010-unf-rm-web-pt";



    
export const fetchPosts = async () => {
    const response = await fetch(`${BASE_URL}/posts`);
    const data = await response.json();
    return data;
}
         
    




