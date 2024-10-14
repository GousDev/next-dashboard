import { fetchUser } from "@/app/lib/data";
import { updateUser } from "@/app/lib/actions";
import Image from "next/image";

const userpage = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);
  // console.log(user);
  return (
    <div className="flex gap-12 ">
      <div className="flex-[1] mt-5 ml-5  ">
        <div className="w-full h-60 relative rounded-2xl overflow-hidden mb-5">
          <Image src={"/3d.jpg"} fill />
          Muhammed Gous
        </div>
      </div>
      <div className="flex-[3] p-3 rounded-lg">
        <form action={updateUser} className="flex flex-col">
          <input type="hidden" name="id" value={user.id} />
          <label>Username</label>
          <input
            type="text"
            name="username"
            // placeholder="Naughty"
            className="in"
            defaultValue={user.username}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            // placeholder="gous@gmail.com"
            className="in"
            defaultValue={user.email}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            // placeholder="********"
            className="in"
            defaultValue={user.password}
          />
          <label>Phone</label>
          <input
            type="number"
            name="phone"
            // placeholder="8928065925"
            className="in"
            defaultValue={user.phone}
            // placeholder={user.phone}
          />
          <label>Address</label>
          <textarea
            name="address"
            // placeholder="Nallasopara"
            className="in"
            defaultValue={user.address}
          ></textarea>
          <div className="flex justify-around">
            <div className="w-2/6 flex flex-col">
              <label>IsAdmin</label>
              <select name="isAdmin" className="in" defaultValue={user.isAdmin}>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            <div className="w-2/6 flex flex-col">
              <label>IsActive</label>
              <select
                name="isActive"
                className="in"
                defaultValue={user.isActive}
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
          </div>
          <button className="w-full p-3 rounded-md bg-purple-700 mt-2 text-white hover:bg-purple-900">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default userpage;
