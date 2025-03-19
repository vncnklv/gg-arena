const BASE_URL = "http://localhost:3030";

export default async function makeRequest(path, options = {}, method = "GET", body = null,) {
    try {
        const response = await fetch(`${BASE_URL}${path}`, {
            method,
            headers: {
                "Content-Type": "application/json",
                ...options.headers,
            },
            body: body ? JSON.stringify(body) : null,
            ...options,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        throw new Error(error.message || "Something went wrong");
    }
}
