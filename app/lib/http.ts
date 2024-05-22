import axios from "axios";

const http = axios.create({
    baseURL: process.env.BACKEND_BASE_URL || "https://email-app-backend.adaptable.app/api/users/",
    headers: {"Content-Type": "application/json"}
});

export default http;