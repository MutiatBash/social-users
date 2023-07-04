import { useState } from "react";
import "./App.css";
import { users } from "./users";

function App() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);

  function handleSearch() {
    setError(false);
    const searchUser = search.toLowerCase();
    const result = users.filter((user) =>
      user.firstName.toLowerCase().includes(searchUser)
    );
    if (result.length === 0) {
      setError(true);
      setError("user not found");
    }
  }

  function handleInput(e) {
    setSearch(e.target.value);
    setError(false);
    handleSearch();
  }
  return (
    <div className="app">
      <input
        placeholder="Search by name..."
        className="search"
        value={search}
        onChange={handleInput}
      />
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="container">
          {users
            .filter((user) => {
              return search.toLowerCase() === ""
                ? user
                : user.firstName.toLowerCase().includes(search);
            })
            .map((user, index) => {
              return (
                <div key={index} className="users">
                  <div className="user-img">
                    <img src={user.picture} />
                  </div>
                  <div className="user">
                    <p>{user.id}</p>
                    <p className="username">
                      {user.title} {user.firstName} {user.lastName}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default App;
