// axiosClient.ts
import axios from 'axios';

const axiosClient = axios.create({
  baseURL:'https://dev-bo.megp.peragosystems.com',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Interceptor to add Authorization header
axiosClient.interceptors.request.use(
  config => {
    const token = 'your-eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRJZCI6MCwiaWQiOiJjMTAyOWYzMS1kNzkyLTRkZjMtYmQ4Ny1lMDhlMWEzNWI2M2IiLCJ1c2VybmFtZSI6Im11LWNhZnYyODc4IiwiZmlyc3ROYW1lIjoiVGFtcmF0IEIiLCJsYXN0TmFtZSI6IkFzc2VmYSIsImVtYWlsIjoidGFtbmV0NDQ0QGdtYWlsLmNvbSIsInBob25lIjpudWxsLCJpc1Bob25lVmVyaWZpZWQiOmZhbHNlLCJvcmdhbml6YXRpb25zIjpbeyJ1c2VySWQiOiJmOThlN2RkMS03MmJkLTQzYzMtOWRmNC1mNjQ0NDVkZTU2MmUiLCJvcmdhbml6YXRpb24iOnsiaWQiOiI0MzI2ZjIwYi1mZjNkLTQ4NjgtYmY0My0xYjc2ZDI3NjY3NDAiLCJuYW1lIjoiQXNzc29jaWF0aW9uIG9mIEVhcmx5IENoaWxkaG9vZCBEZXZlbG9wbWVudCBpbiBNYWxhd2kiLCJzaG9ydE5hbWUiOiJBRUNETSIsImNvZGUiOiJVUFdta2UiLCJwcmVmZXJlbnRpYWxUcmVhdG1lbnRzIjpudWxsfSwicGVybWlzc2lvbnMiOlsicGxhbm5pbmc6cmV2aWV3UHJvY3VyZW1lbnRSZXF1aXNpdGlvbiIsInBsYW5uaW5nOnN1Ym1pdFByb2N1cmVtZW50UmVxdWlzaXRpb24iLCJwbGFubmluZzptYW5hZ2VJdGVtc09uUFIiLCJwbGFubmluZzpidWRnZXRWZXJpZmljYXRpb24iLCJwbGFubmluZzptYW5hZ2VBcHByb3ZlZEl0ZW0iLCJwbGFubmluZzphcHByb3ZlUHJlUGxhbiIsInBsYW5uaW5nOmFwcHJvdmVQb3N0UGxhbiIsInBsYW5uaW5nOnN1Ym1pdFBvc3RQbGFuIiwicGxhbm5pbmc6bWFuYWdlUG9zdFBsYW5BY3Rpdml0eSIsInBsYW5uaW5nOm1hbmFnZVBvc3RQbGFuIiwicGxhbm5pbmc6c3VibWl0UHJlUGxhbiIsInBsYW5uaW5nOm1hbmFnZVByZVBsYW5JdGVtIiwicGxhbm5pbmc6bWFuYWdlUHJlUGxhbkFjdGl2aXR5IiwicGxhbm5pbmc6bWFuYWdlUHJlUGxhbiIsInBsYW5uaW5nOmNyZWF0ZVByb2N1cmVtZW50UmVxdWlzaXRpb24iLCJwbGFubmluZzptYW5hZ2VCdWRnZXQiLCJwbGFubmluZzphcHByb3ZlQnVkZ2V0IiwicGxhbm5pbmc6bWFuYWdlQXBwcm92ZWRBY3Rpdml0eSIsInBsYW5uaW5nOnBsYW5uaW5nIiwiaWFtOnVzZXIiLCJpYW06bWFuYWdlT3JnYW5pemF0aW9uIiwiaWFtOm1hbmRhdGVWaWV3ZXIiLCJwbGFubmluZzpyZXZpZXdQcm9jdXJlbWVudFJlcXVpc2l0aW9uIiwicGxhbm5pbmc6bWFuYWdlQXBwcm92ZWRJdGVtIiwiaWFtOnJvbGUiLCJpYW06dW5pdCIsInBsYW5uaW5nOmFwcHJvdmVQcm9jdXJlbWVudFJlcXVpc2l0aW9uIiwicGxhbm5pbmc6Y3JlYXRlUHJvY3VyZW1lbnRSZXF1aXNpdGlvbiIsImd1YXJhbnRlZTphcHByb3ZlRm9yZmVpdG1lbnQiLCJndWFyYW50ZWU6dmlld0ZvcmZlaXRtZW50IiwiZ3VhcmFudGVlOnZpZXdSZWxlYXNlIiwiZ3VhcmFudGVlOnJlamVjdFJlcXVlc3QiLCJndWFyYW50ZWU6YXBwcm92ZVJlcXVlc3QiLCJndWFyYW50ZWU6dmlld1JlcXVlc3QiLCJndWFyYW50ZWU6Zm9yZmVpdEd1YXJhbnRlZSIsImd1YXJhbnRlZTpyZWxlYXNlR3VhcmFudGVlIiwiZ3VhcmFudGVlOnZpZXdHdWFyYW50ZWUiLCJndWFyYW50ZWU6dmlld0JpZFNlY3VyaXR5IiwiaWFtOnVzZXIiLCJpYW06bWFuYWdlT3JnYW5pemF0aW9uIiwiaWFtOm1hbmRhdGVWaWV3ZXIiLCJpYW06Z3JvdXAiLCJpYW06cm9sZSIsImlhbTp1bml0IiwicGxhbm5pbmc6c3VibWl0UHJlUGxhbiIsInBsYW5uaW5nOm1hbmFnZVByZVBsYW5JdGVtIiwicGxhbm5pbmc6bWFuYWdlUHJlUGxhbkFjdGl2aXR5IiwicGxhbm5pbmc6bWFuYWdlUHJlUGxhbiIsInBsYW5uaW5nOnN1Ym1pdFBvc3RQbGFuIiwicGxhbm5pbmc6bWFuYWdlUG9zdFBsYW5JdGVtIiwicGxhbm5pbmc6bWFuYWdlUG9zdFBsYW5BY3Rpdml0eSIsInBsYW5uaW5nOm1hbmFnZVBvc3RQbGFuIiwicGxhbm5pbmc6YnVkZ2V0VmVyaWZpY2F0aW9uIiwicGxhbm5pbmc6dmlld1Bvc3RQbGFuIiwicGxhbm5pbmc6dmlld1JldmlzZVBvc3RQbGFuIiwicGxhbm5pbmc6YXBwcm92ZVByZVBsYW4iLCJwbGFubmluZzphcHByb3ZlUG9zdFBsYW4iLCJwbGFubmluZzptYW5hZ2VCdWRnZXQiLCJpYW06bWFuYWdlU3VwZXJBZG1pbiIsInBsYW5uaW5nOnN1Ym1pdFByb2N1cmVtZW50UmVxdWlzaXRpb24iLCJwbGFubmluZzptYW5hZ2VJdGVtc09uUFIiLCJndWFyYW50ZWU6YXBwcm92ZUZvcmZlaXRtZW50IiwiZ3VhcmFudGVlOnZpZXdGb3JmZWl0bWVudCIsImd1YXJhbnRlZTp2aWV3UmVsZWFzZSIsImd1YXJhbnRlZTpyZWplY3RSZXF1ZXN0IiwiZ3VhcmFudGVlOmFwcHJvdmVSZXF1ZXN0IiwiZ3VhcmFudGVlOnZpZXdSZXF1ZXN0IiwiZ3VhcmFudGVlOmFwcHJvdmVGb3JmZWl0bWVudCIsImd1YXJhbnRlZTp2aWV3Rm9yZmVpdG1lbnQiLCJndWFyYW50ZWU6dmlld1JlbGVhc2UiLCJndWFyYW50ZWU6cmVqZWN0UmVxdWVzdCIsImd1YXJhbnRlZTphcHByb3ZlUmVxdWVzdCIsImd1YXJhbnRlZTp2aWV3UmVxdWVzdCJdLCJyb2xlU3lzdGVtcyI6WyJPUkdBTklaQVRJT05fQURNSU5JU1RSQVRPUiIsIlBSRV9CVURHRVRfUExBTl9DUkVBVE9SIiwiUE9TVF9CVURHRVRfUExBTl9DUkVBVE9SIiwiUFBEQV9QTEFOX0FQUFJPVkVSIiwiQlVER0VUX09GRklDRVIiLCJSRVFVSVNJVElPTkVSIiwiR1VBUkFOVEVFX0FQUFJPVkVSIiwiR1VBUkFOVEVFX09GRklDRVIiXSwiYXBwbGljYXRpb25zIjpbInBsYW5uaW5nIiwiaWFtIiwiZ3VhcmFudGVlIl19XSwiaWF0IjoxNzIyODM2Mjk4LCJleHAiOjE3MjI5MjI2OTh9.cwvkpHYyb0AeSaYfgGIFfkkE0mk9yoZWbUXSb0A_SuI-token-here'; // Replace with your logic to get the token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosClient;