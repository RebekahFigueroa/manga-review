import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  isAuthed: undefined,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isAuthed, setIsAuthed] = useState(undefined);

  useEffect(() => {
    const auth = async () => {
      const response = await fetch("/auth");
      const user = await response.json();

      setIsAuthed(user?.id);
    };

    auth();
  }, []);

  const login = async (username, password) => {
    const response = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const user = await response.json();
    if (user.id) {
      setIsAuthed(user?.id);
    } else {
      alert(user.error.login);
    }
  };

  const create_user = async (username, password) => {
    const response = await fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const user = await response.json();
    if (user.id) {
      setIsAuthed(user?.id);
    } else {
      alert(user.errors.join(", "));
    }
  };

  const logout = async () => {
    await fetch("/logout", {
      method: "DELETE",
    });

    setIsAuthed(undefined);
  };

  return (
    <AuthContext.Provider value={{ isAuthed, login, logout, create_user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
