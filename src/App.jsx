import { createContext, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Error from "./Error";
import Register from "./Pages/Register";

export const CredentialContext = createContext();

function App(){
  const credentialsState = useState(null);
  return (
    <CredentialContext.Provider value={credentialsState}>
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    </CredentialContext.Provider>
  );
}

export default App;
