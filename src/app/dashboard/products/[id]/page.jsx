import { fetchProduct } from "@/app/lib/data";
import { updateProduct } from "@/app/lib/actions";
import Image from "next/image";

const userpage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className="flex flex-col gap-3 ">
      <div className=" flex justify-center mt-5   ">
        <div className="w-80 h-60 relative  rounded-xl overflow-hidden mb-5">
          <Image src="/3d.jpg" className="w-60 absolute h-full" fill />
          {/* <h1 className="absolute top-10">Muhammed Gous</h1> */}
        </div>
      </div>
      <div className=" p-3 rounded-lg ">
        <form action={updateProduct} className="flex flex-wrap ">
          <div className="w-1/2 flex flex-col ">
            <input type="hidden" name="id" value={product.id} />
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Iphone"
              className="in"
              defaultValue={product.title}
            />
          </div>
          <div className="w-1/2 flex flex-col border-3 border-solid">
            <label>Description</label>
            <textarea
              name="description"
              placeholder="Nallasopara"
              className="in"
              defaultValue={product.description}
            ></textarea>
          </div>
          <div className="w-1/2 flex flex-col">
            <label>Price</label>
            <input
              type="number"
              name="number"
              placeholder="gous@gmail.com"
              className="in"
              defaultValue={product.price}
            />
          </div>
          <div className="w-1/2 flex flex-col">
            <label>Stock</label>
            <input
              type="number"
              name="stock"
              placeholder="8928065925"
              className="in"
              defaultValue={product.stock}
            />
          </div>
          <div className="w-1/2 flex flex-col">
            <label>Color</label>
            <input
              type="text"
              name="color"
              placeholder="********"
              className="in"
              defaultValue={product.color}
            />
          </div>

          <div className="w-1/2 flex flex-col">
            <label>Category</label>
            <select
              name="category"
              className="in"
              defaultValue={product.category}
            >
              <option value="phone">Mobile</option>
              <option value="laptop">Laptop</option>
              <option value="pc">Computer</option>
            </select>
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
