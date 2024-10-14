import Search from "@/app/ui/search/search";
import { MdRemoveRedEye, MdDelete } from "react-icons/md";
import Link from "next/link";
import Pagination from "@/app/ui/pagination/Pagination";
import { fetchUsers } from "@/app/lib/data";
import Image from "next/image";
import { deleteUser } from "@/app/lib/actions";
import { Product } from "@/app/lib/models";

const Users = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const { count, users } = await fetchUsers(q, page);

  return (
    <div className="p-5 rounded-lg mt-5 bg-slate-50">
      <div className="flex items-center justify-between">
        <Search placeholder={"Search for a user"} />
        <Link href="./users/add">
          <button className="p-2.5 bg-indigo-600 rounded-lg text-white ">
            Add User
          </button>
        </Link>
      </div>
      <table className="w-full my-2">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created at</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>
                <div className="flex items-center gap-2">
                  <Image
                    src="/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "Active" : "Inactive"}</td>
              <td>
                <div className="flex items-center gap-2 ">
                  <Link href={`/dashboard/users/${user._id}`}>
                    <MdRemoveRedEye size={30} className="text-blue-800" />
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={user.id} />
                    <button>
                      <MdDelete size={30} className="text-red-600" />
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default Users;
