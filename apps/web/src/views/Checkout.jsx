function Checkout() {
  return (
    <>
      <section className="min-h-screen bg-[#FDFCF8]">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col gap-16 lg:flex-row">
            <div className="flex-1">
              <div className="mb-12">
                <h2 className="mb-8 flex items-center gap-3 text-xl font-bold text-[#2C3E2D]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2C3E2D] text-[10px] text-white">
                    1
                  </span>
                  Contact Information
                </h2>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-[#2C3E2D]/10 bg-white p-4 text-sm outline-none focus:border-[#8C5E3C]"
                />
              </div>

              <div className="mb-12">
                <h2 className="mb-8 flex items-center gap-3 text-xl font-bold text-[#2C3E2D]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2C3E2D] text-[10px] text-white">
                    2
                  </span>
                  Shipping Address
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="rounded-xl border border-[#2C3E2D]/10 bg-white p-4 text-sm outline-none focus:border-[#8C5E3C]"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="rounded-xl border border-[#2C3E2D]/10 bg-white p-4 text-sm outline-none focus:border-[#8C5E3C]"
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    className="col-span-2 rounded-xl border border-[#2C3E2D]/10 bg-white p-4 text-sm outline-none focus:border-[#8C5E3C]"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className="rounded-xl border border-[#2C3E2D]/10 bg-white p-4 text-sm outline-none focus:border-[#8C5E3C]"
                  />
                  <input
                    type="text"
                    placeholder="Postcode"
                    className="rounded-xl border border-[#2C3E2D]/10 bg-white p-4 text-sm outline-none focus:border-[#8C5E3C]"
                  />
                </div>
              </div>

              <div className="mb-12">
                <h2 className="mb-8 flex items-center gap-3 text-xl font-bold text-[#2C3E2D]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2C3E2D] text-[10px] text-white">
                    3
                  </span>
                  Payment Method
                </h2>
                <div className="rounded-2xl border border-[#2C3E2D]/10 bg-white p-6">
                  <div className="mb-4 flex items-center gap-4 border-b border-[#2C3E2D]/5 pb-4">
                    <input type="radio" checked name="payment" className="accent-[#2C3E2D]" />
                    <span className="text-sm font-bold text-[#2C3E2D]">Credit Card</span>
                  </div>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full rounded-lg bg-[#FDFCF8] p-3 text-sm outline-none"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="MM / YY"
                        className="rounded-lg bg-[#FDFCF8] p-3 text-sm outline-none"
                      />
                      <input
                        type="text"
                        placeholder="CVC"
                        className="rounded-lg bg-[#FDFCF8] p-3 text-sm outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full rounded-2xl bg-[#2C3E2D] py-5 text-sm font-bold tracking-[0.2em] text-white shadow-2xl hover:bg-[#1a261b]">
                COMPLETE ORDER
              </button>
            </div>

            <div className="w-full lg:w-100">
              <div className="sticky top-8 rounded-4xl border border-[#2C3E2D]/5 bg-white p-10 shadow-sm">
                <h3 className="mb-8 text-xs font-bold tracking-widest text-gray-400 uppercase">
                  In your harvest
                </h3>
                <div className="mb-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-12 shrink-0 overflow-hidden rounded-lg bg-[#FDFCF8]">
                      <img
                        src="https://storage.googleapis.com/vue-course-api.appspot.com/root/1766909664377.jpg"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-[#2C3E2D]">Fresh Broccoli</p>
                      <p className="text-[10px] text-gray-400">Qty: 1</p>
                    </div>
                    <span className="text-sm font-bold text-[#2C3E2D]">$80</span>
                  </div>
                </div>

                <div className="mb-8 flex gap-2">
                  <input
                    type="text"
                    placeholder="Gift code"
                    className="flex-1 rounded-xl border border-transparent bg-[#FDFCF8] px-4 py-2 text-sm outline-none focus:border-[#8C5E3C]/20"
                  />
                  <button className="rounded-xl bg-[#F3EFDF] px-6 py-2 text-xs font-bold text-[#2C3E2D]">
                    APPLY
                  </button>
                </div>

                <div className="space-y-3 border-t border-[#2C3E2D]/5 pt-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="font-bold">$200</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Shipping</span>
                    <span className="font-bold text-[#8C5E3C]">Free</span>
                  </div>
                  <div className="flex justify-between border-t border-[#2C3E2D]/5 pt-4">
                    <span className="text-lg font-bold text-[#2C3E2D]">Total</span>
                    <span className="text-2xl font-black tracking-tighter text-[#2C3E2D]">$200</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Checkout;
