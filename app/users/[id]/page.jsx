/* eslint-disable @next/next/no-img-element */

import "@/styles/userDetail.css";
import Link from "next/link";

const fetchUserById = async (id) => {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
};

const UserPage = async ({ params }) => {
  const userId = params.id;
  const user = await fetchUserById(userId);

  return (
    <div className="cardDetail">
      <div className="details-content">
        <ul className="card_info">
          <li>ID: {user.id}</li>
          <li>Nombre: {user.first_name}</li>
          <li>Apellido: {user.last_name}</li>
          <li>Email: {user.email}</li>
          <Link href={"/"}>Volver</Link>
        </ul>
        <figure className="img">
          <img src={user.avatar} alt="img" />
        </figure>
      </div>
    </div>
  );
};

export default UserPage;
