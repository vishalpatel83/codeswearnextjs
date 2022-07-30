import React from "react";

const Order = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                CODESWEAR.COM
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                OrderID: #155542
              </h1>
              <p className="leading-relaxed mb-4">
                Your order is successfull place.
              </p>
              <div className="flex mb-4">
                <a className="flex-grow text-indigo-500  text-center  py-2 text-lg px-1">
                  Item Description
                </a>
                <a className="flex-grow   py-2 text-lg px-1 text-center">
                  Quantity
                </a>
                <a className="flex-grow   py-2 text-lg px-1 text-center">
                  Item Total
                </a>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Wear the code xl/black</span>
                <span className="ml-auto text-gray-900">1</span>
                <span className="ml-auto text-gray-900">499</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Wear the code xl/black</span>
                <span className="ml-auto text-gray-900">1</span>
                <span className="ml-auto text-gray-900">499</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">Quantity</span>
                <span className="ml-auto text-gray-900">4</span>
              </div>
              <div className="flex flex-col">
                <span className="title-font font-medium text-2xl text-gray-900">
                  Subtotral: $58.00
                </span>
                <button className="flex mx-auto mx-0 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
                  Track Order
                </button>
              </div>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
