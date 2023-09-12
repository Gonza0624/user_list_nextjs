import User from "@/components/user";

const fetchUsers = async () => {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
};

const Home = async () => {
  const users = await fetchUsers();
  return (
    <main className="home-section">
      <User users={users} />
    </main>
  );
};

export default Home;
