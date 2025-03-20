const BASE_URL = "http://localhost:3030";

export default async function makeRequest(path, options = {}, method = "GET", body = null) {
    try {
        if(!options.headers) {
            options.headers = {};
        }
        
        const token = localStorage.getItem('token');
        if(token) {
            options.headers["X-Authorization"] = token;
        }

        const response = await fetch(`${BASE_URL}${path}`, {
            method,
            headers: {
                
                "Content-Type": "application/json",
                ...options.headers,
            },
            body: body ? JSON.stringify(body) : null,
            ...options,
        });

        // Try to parse the response JSON
        let responseData;
        try {
            responseData = await response.json();
        } catch {
            responseData = null; // If parsing fails, it's likely not JSON (e.g., empty body)
        }

        // Handle non-OK responses (e.g., 401 Unauthorized)
        if (!response.ok) {
            const errorMessage = responseData?.message || `HTTP error! Status: ${response.status}`;
            throw new Error(errorMessage);
        }

        return responseData; // Return the successful response data
    } catch (error) {
        throw new Error(error.message || "Something went wrong");
    }
}

// const BASE_URL = "http://localhost:3030";

// export default async function makeRequest(path, options = {}, method = "GET", body = null,) {
//     try {
//         const response = await fetch(`${BASE_URL}${path}`, {
//             method,
//             headers: {
//                 "Content-Type": "application/json",
//                 ...options.headers,
//             },
//             body: body ? JSON.stringify(body) : null,
//             ...options,
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         return response.json();
//     } catch (error) {
//         throw new Error(error.message || "Something went wrong");
//     }
// }

