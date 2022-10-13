import axios from "axios";

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InBlZHJvLmJlbHRyYW5AdGVhbWludGVybmF0aW9uYWwuY29tIiwianRpIjoiNGU0OGIyODMtNjU0Yi00Y2YwLThiMGYtM2Q0ZWM4YjI3ZTI3IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiI3YzM2ZWYwOS1kYjg5LTQ3NmMtOTA5MS1lOWQzNjA1NzM2ZWEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiUkVQUkVTRU5UQVRJVkUiLCJIUiJdLCJleHAiOjE2NjY5NjYxMzEsImlzcyI6IlRhbGVudE1hbmFnZW1lbnRBcHAiLCJhdWQiOiJEb21haW4uY29tIn0.MKik1J6GV2M4Gvkc9pW-qCfzGUFzxV0fEMQf7Cj_sjM";

const instance = () =>axios.create({
  baseURL:import.meta.env.VITE_URL_API,
  headers:{
    'Content-Type': 'application/json',
    // authentication:`Bearer ${ token }`
  }
});

const http_service = {
  get:(path)=>instance().get(path),
  post:(path,data)=>instance().post(path,data)
};

export default http_service;
