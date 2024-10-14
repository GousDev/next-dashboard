import Search from "@/app/ui/search/search";
import { MdRemoveRedEye, MdDelete } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/pagination/Pagination";
import { fetchProducts } from "@/app/lib/data";
import { deleteProduct } from "@/app/lib/actions";

const Products = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, products } = await fetchProducts(q, page);

  return (
    <div className="p-5 rounded-lg mt-5 bg-slate-50">
      <div className="flex items-center justify-between">
        <Search placeholder={"Search for a product"} />
        <Link href="./products/add">
          <button className="p-2.5 bg-indigo-600 rounded-lg text-white ">
            Add Product
          </button>
        </Link>
      </div>
      <table className="w-full my-2">
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created at</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <div className="flex items-center gap-2">
                <Image
                  src={product.img || "/noavatar.png"}
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                {product.title}
              </div>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.createdAt?.toString().slice(4, 16)}</td>
              <td>{product.stock}</td>
              <td>
                <div className="flex items-center gap-2 ">
                  <Link href={`/dashboard/products/${product._id}`}>
                    <MdRemoveRedEye size={30} className="text-blue-800" />
                  </Link>
                  <form action={deleteProduct}>
                    <input type="hidden" name="id" value={product.id} />
                    <button type="submit">
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

export default Products;
