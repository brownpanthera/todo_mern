import { Link } from "react-router-dom";

import { CredentialContext } from "../App";
import { useContext } from "react";
import Todos from "../components/Todos";

export default function Home() {
  useContext(CredentialContext);
  const [credentials] = useContext(CredentialContext);
  return (
    <div>
      <h1 className="text-center">Welcome { credentials && credentials.username }</h1>
     <div>
     <ul>
        <li className="m-5 text-blue-800 underline">
       { !credentials && <Link to="/register">Register here.</Link>}
       <br />
       { !credentials && <Link to="/login">Login here.</Link>}
        </li>
      </ul>
      {credentials && <Todos />}
     </div>
    </div>
  )
}
