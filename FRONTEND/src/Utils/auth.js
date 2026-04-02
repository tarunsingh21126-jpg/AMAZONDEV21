// token save karne ke liye
// line by line code likha hai vaise hi kam karega
export const saveToken = (tokens) => {
    localStorage.setItem("access_token", tokens.access);
    localStorage.setItem("refresh_token", tokens.refresh);

}
// token delete karne ke liye
export const clearToken = ()=> {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
}
// token pane  ke liye
export const getAccessToken = () => {
    return localStorage.getItem("access_token")
}

export const authFetch = (URL, options = {}) => {
    const token = getAccessToken();
    const headers = options.headers ? {...options.headers }:{};

    if (token) headers["Authorization"] = 'Bearer ${token}';
    headers["Content-Type"] = "application/json";

    return fetch(URL, {
        ...options,
        headers,
    });
    
};