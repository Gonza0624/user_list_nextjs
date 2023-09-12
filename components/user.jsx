import Link from "next/link";
import "@/styles/home.css";

/* eslint-disable @next/next/no-img-element */
const User = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <div className="card" key={user.id}>
          <figure className="container_image">
            <img src={user.avatar} alt="img" />
          </figure>
          <div className="info">
            <p>Nombre: {user.first_name}</p>
            <p>Correo: {user.email}</p>
            <Link href={`users/${user.id}`}>Ver mas</Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default User;
