import { addProduct } from "@/app/lib/actions";

const Addproduct = () => {
  return (
    <div className="p-5 rounded-lg mt-5 border-2 border-solid">
      <form action={addProduct} className="flex flex-wrap justify-around">
        <input
          type="text"
          placeholder="title"
          name="title"
          required
          className="w-2/5 mb-5 p-3 border-2 border-solid bg-gray-50 outline-purple-300"
        />
        <input
          type="number"
          placeholder="price"
          name="price"
          className="w-2/5 mb-5 p-3 border-2 border-solid bg-gray-50 outline-purple-300"
        />
        <input
          type="number"
          placeholder="stock"
          name="stock"
          className="w-2/5 mb-5 p-3 border-2 border-solid bg-gray-50 outline-purple-300"
        />
        <input
          type="text"
          placeholder="color"
          name="color"
          className="w-2/5 bg-gray-50 mb-5 p-3 border-solid border-2 outline-purple-300"
        />
        <select
          name="category"
          id=""
          className="w-1/2 mb-5 p-3 border-2 border-solid bg-gray-50 outline-purple-300"
        >
          <option value="general">Choose a category</option>
          <option value="phone">Mobile</option>
          <option value="laptop">Laptop</option>
          <option value="pc">Computer</option>
        </select>
        <textarea
          name="description"
          rows="6"
          placeholder="Description . . ."
          className="w-11/12 mb-5 p-3 border-2 border-solid bg-gray-50 outline-purple-300"
        ></textarea>
        <button className="p-3 w-full bg-purple-600 text-white rounded-lg">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Addproduct;
