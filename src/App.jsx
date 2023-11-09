import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { FastCard } from "./app";
import Topbar from "./components/Topbar";
import SearchBar from "./components/SearchBar";
import Details from "./components/Details";
import ErrorMessage from "./components/ErrorMessage";

const App = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSearch = async () => {
    if (username.trim() === "") {
      setIsError(true);
      setErrorMessage("Type username");
      setTimeout(() => {
        setIsError(false);
      }, 2500);
      return;
    }

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.status === 404) {
        setIsError(true);
        setErrorMessage("No user found!");
        setTimeout(() => {
          setIsError(false);
        }, 2500);
        return;
      }
      const data = await response.json();
      setUser(data);
      setIsError(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <FastCard className="md:w-[90vw] lg:w-[800px] bg-transparent shadow-none">
        <Topbar />
        <SearchBar
          handleSearch={handleSearch}
          username={username}
          setUsername={setUsername}
        />
        <Details user={user} />
      </FastCard>
      <AnimatePresence>
        {isError && <ErrorMessage errorMessage={errorMessage} />}
      </AnimatePresence>
    </>
  );
};

export default App;
