import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1 className="text-center">Welcome</h1>
     <div>
     <ul>
        <li className="m-5 text-blue-800 underline">
        <Link to="/register">Register here.</Link>
        </li>
      </ul>
     </div>
    </div>
  )
}
