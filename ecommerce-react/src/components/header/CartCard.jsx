import { useContext } from "react";
import { CartDetailsContext } from "@/context/useCartDetails";
import DeleteIcon from "@/components/icons/DeleteIcon";

const CartCard = () => {
  const { cartProducts, deleteCartProducts } = useContext(CartDetailsContext);

  return (
    <section className=" absolute right-0 top-[25%] z-10 md:right-[5%]  md:top-[10%] md:max-w-lg ">
      <div className="mx-4 rounded-md bg-white shadow-xl">
        <div className="grid grid-cols-2">
          <h4 className="px-6 py-8 text-lg font-bold">Cart</h4>
        </div>

        <hr />
        {cartProducts.length === 0 && (
          <p className="bold px-[120px] py-16 text-center text-xl text-dark-grayish-blue">
            Your cart is empty
          </p>
        )}
        {cartProducts.map((product) => (
          <article
            key={product.id}
            className="grid grid-cols-[1fr_4fr_1fr] items-center gap-6 px-6 py-4"
          >
            <img src={product.img} alt="" className="rounded-md" />
            <div>
              <h6>{product.subtitle}</h6>
              <p>
                <span>
                  {product.discountPrice} € x {product.quantity}
                </span>{" "}
                <span className="font-bold">
                  {(product.discountPrice * product.quantity).toFixed(2)} €
                </span>
              </p>
            </div>
            <button
              className="ml-auto"
              onClick={() => deleteCartProducts(product.id)}
            >
              <DeleteIcon className="hover:fill-orange-primary" />
            </button>
          </article>
        ))}
        {cartProducts.length !== 0 && (
          <div className="px-6 pb-8">
            <button className="w-full rounded-md bg-orange-primary py-4 text-white transition-all hover:bg-orange-700">
              Checkout
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartCard;
