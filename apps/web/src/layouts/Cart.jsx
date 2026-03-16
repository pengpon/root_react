function Cart({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`fixed inset-0 z-100 transition-all duration-500 ${
          isOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          onClick={onClose}
          className={`absolute inset-0 bg-[#2C3E2D]/40 backdrop-blur-sm transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        ></div>

        <div
          className={`absolute inset-y-0 right-0 w-full max-w-md bg-[#FDFCF8] shadow-2xl transition-transform duration-500 ease-in-out md:w-[450px] ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-[#2C3E2D]/5 p-8">
              <h2 className="text-2xl font-bold tracking-tighter text-[#2C3E2D]">Your Bag.</h2>
              <button onClick={onClose} className="group p-2 transition-transform hover:rotate-90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-6 text-gray-400 group-hover:text-[#2C3E2D]"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="no-scrollbar flex-1 overflow-y-auto p-8">
              <div className="space-y-10">
                <div className="flex gap-5">
                  <div className="h-28 w-20 shrink-0 overflow-hidden rounded-xl bg-white shadow-sm">
                    <img
                      src="https://storage.googleapis.com/vue-course-api.appspot.com/root/1766909664377.jpg"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between py-1">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-[#2C3E2D]">
                          Seasonal Fresh Broccoli
                        </h4>
                        <p className="mt-1 text-[10px] tracking-wider text-gray-400 uppercase italic">
                          500g
                        </p>
                      </div>
                      <button className="text-gray-300 transition-colors hover:text-red-400">
                        <svg
                          className="size-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center rounded-lg border border-[#2C3E2D]/10 bg-white px-2 py-1">
                        <button className="px-2 text-xs font-bold text-[#2C3E2D]">-</button>
                        <span className="px-2 text-xs font-bold">1</span>
                        <button className="px-2 text-xs font-bold text-[#2C3E2D]">+</button>
                      </div>
                      <span className="text-sm font-bold text-[#2C3E2D]">$80</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="h-28 w-20 shrink-0 overflow-hidden rounded-xl bg-white shadow-sm">
                    <img
                      src="https://storage.googleapis.com/vue-course-api.appspot.com/root/1767868606069.jpg"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between py-1">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-[#2C3E2D]">Organic Tomatoes</h4>
                        <p className="mt-1 text-[10px] tracking-wider text-gray-400 uppercase italic">
                          300g
                        </p>
                      </div>
                      <button className="text-gray-300 transition-colors hover:text-red-400">
                        <svg
                          className="size-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center rounded-lg border border-[#2C3E2D]/10 bg-white px-2 py-1">
                        <button className="px-2 text-xs font-bold text-[#2C3E2D]">-</button>
                        <span className="px-2 text-xs font-bold">2</span>
                        <button className="px-2 text-xs font-bold text-[#2C3E2D]">+</button>
                      </div>
                      <span className="text-sm font-bold text-[#2C3E2D]">$120</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-[#2C3E2D]/5 bg-white p-8">
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium text-gray-400">Subtotal</span>
                <span className="font-bold text-[#2C3E2D]">$200.00</span>
              </div>
              <p className="mb-8 text-[10px] tracking-[0.2em] text-gray-400 uppercase">
                Shipping and taxes calculated at checkout
              </p>

              <button className="w-full rounded-2xl bg-[#2C3E2D] py-5 text-xs font-bold tracking-[0.3em] text-white uppercase shadow-xl transition-all hover:bg-[#1a261b] active:scale-95">
                Check out
              </button>

              <button className="mt-6 w-full text-center text-[10px] font-bold tracking-widest text-gray-400 uppercase underline underline-offset-8 transition-colors hover:text-[#2C3E2D]">
                Or continue shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
