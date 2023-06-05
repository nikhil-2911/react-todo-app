// Mock user data (replace with your actual data)
const users = [
  { username: "user1", password: "password1", name: "User One" },
  { username: "user2", password: "password2", name: "User Two" },
];

// Example login API request
export const login = async (username, password) => {
  // Find the user with the matching credentials
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    return Promise.resolve({ token: "your-jwt-token" });
  } else {
    return Promise.reject(new Error("Invalid credentials"));
  }
};

// Other API requests can be added similarly
