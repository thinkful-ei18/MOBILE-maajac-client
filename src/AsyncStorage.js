export const loadAuthToken = () => {
    return AsyncStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {
    try {
        AsyncStorage.setItem('authToken', authToken);
    } catch (e) {}
};

export const clearAuthToken = () => {
    try {
        AsyncStorage.removeItem('authToken');
    } catch (e) {}
};

/* ========== USER CREDENTIALS ========== */
export const saveUserCredentials = user => {
    try {
        AsyncStorage.setItem('user', JSON.stringify(user));
    } catch (e) {}
}

export const clearUserCredentials = () => {
    try {
        AsyncStorage.removeItem('user');
    } catch (e) {}
};