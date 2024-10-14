import { addUser } from "@/app/lib/actions";

const AddUser = () => {
  return (
    <div className="p-5 rounded-lg m-10 ">
      <form action={addUser} className="flex flex-wrap justify-evenly">
        <input
          type="text"
          placeholder="Enter your Username"
          name="username"
          required
          className="w-5/12 mb-5 p-3 border-2 border-solid border-black outline-purple-400 rounded-lg"
        />
        <input
          type="email"
          placeholder="Enter your Email Address"
          name="email"
          className="w-5/12 mb-5 p-3 border-2 border-solid border-black outline-purple-400 rounded-lg"
          required
        />
        <input
          type="password"
          placeholder="Enter a Password"
          name="password"
          className="w-5/12 mb-5 p-3 border-2 border-solid border-black outline-purple-400 rounded-lg"
          required
        />
        <input
          type="number"
          placeholder="Enter your Phone No."
          name="phone"
          className="w-5/12  mb-5 p-3 border-solid border-2 border-black outline-purple-400 rounded-lg"
        />
        <select
          name="isAdmin"
          id=""
          className="w-5/12 mb-5 p-3 border-2 border-solid border-black outline-purple-400 rounded-lg"
        >
          <option value={false}>isAdmin</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select
          name="isActive"
          id=""
          className="w-5/12 mb-5 p-3 border-2 border-solid border-black outline-purple-400 rounded-lg"
        >
          <option value={false}>isActive</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="address"
          rows="3"
          placeholder="Enter your Address"
          className="w-11/12 mb-5 p-3 border-2 border-solid border-black outline-purple-400 rounded-lg"
        ></textarea>
        <button
          className="p-3 w-max bg-purple-700 text-white rounded-lg hover:bg-purple-900"
          
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
