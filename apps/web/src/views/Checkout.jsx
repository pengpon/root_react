function Checkout() {
  return (
    <>
      <section class="min-h-screen bg-[#FDFCF8]">
        <div class="container mx-auto px-4 py-12">
          <div class="flex flex-col gap-16 lg:flex-row">
            <div class="flex-1">
              <div class="mb-12">
                <h2 class="mb-8 flex items-center gap-3 text-xl font-bold text-[#2C3E2D]">
                  <span class="flex h-6 w-6 items-center justify-center rounded-full bg-[#2C3E2D] text-[10px] text-white">
                    1
                  </span>
                  Contact Information
                </h2>
                <input
                  type="email"
                  placeholder="Email Address"
                  class="w-full rounded-xl border border-[#2C3E2D]/10 bg-white p-4 text-sm outline-none focus:border-[#8C5E3C]"
                />
              </div>

              <div class="mb-12">
                <h2 class="mb-8 flex items-center gap-3 text-xl font-bold text-[#2C3E2D]">
                  <span class="flex h-6 w-6 items-center justify-center rounded-full bg-[#2C3E2D] text-[10px] text-white">
                    2
                  </span>
                  Shipping Address
                </h2>
                <div class="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    class="rounded-xl border border-[#2C3E2D]/10 bg-white p-4 text-sm outline-none focus:border-[#8C5E3C]"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    class="rounded-xl border border-[#2C3E2D]/10 bg-white p-4 text-sm outline-none focus:border-[#8C5E3C]"
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    class="col-span-2 rounded-xl border border-[#2C3E2D]/10 bg-white p-4 text-sm outline-none focus:border-[#8C5E3C]"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    class="rounded-xl border border-[#2C3E2D]/10 bg-white p-4 text-sm outline-none focus:border-[#8C5E3C]"
                  />
                  <input
                    type="text"
                    placeholder="Postcode"
                    class="rounded-xl border border-[#2C3E2D]/10 bg-white p-4 text-sm outline-none focus:border-[#8C5E3C]"
                  />
                </div>
              </div>

              <div class="mb-12">
                <h2 class="mb-8 flex items-center gap-3 text-xl font-bold text-[#2C3E2D]">
                  <span class="flex h-6 w-6 items-center justify-center rounded-full bg-[#2C3E2D] text-[10px] text-white">
                    3
                  </span>
                  Payment Method
                </h2>
                <div class="rounded-2xl border border-[#2C3E2D]/10 bg-white p-6">
                  <div class="mb-4 flex items-center gap-4 border-b border-[#2C3E2D]/5 pb-4">
                    <input type="radio" checked name="payment" class="accent-[#2C3E2D]" />
                    <span class="text-sm font-bold text-[#2C3E2D]">Credit Card</span>
                  </div>
                  <div class="space-y-4">
                    <input
                      type="text"
                      placeholder="Card Number"
                      class="w-full rounded-lg bg-[#FDFCF8] p-3 text-sm outline-none"
                    />
                    <div class="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="MM / YY"
                        class="rounded-lg bg-[#FDFCF8] p-3 text-sm outline-none"
                      />
                      <input
                        type="text"
                        placeholder="CVC"
                        class="rounded-lg bg-[#FDFCF8] p-3 text-sm outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button class="w-full rounded-2xl bg-[#2C3E2D] py-5 text-sm font-bold tracking-[0.2em] text-white shadow-2xl hover:bg-[#1a261b]">
                COMPLETE ORDER
              </button>
            </div>

            <div class="w-full lg:w-100">
              <div class="sticky top-8 rounded-4xl border border-[#2C3E2D]/5 bg-white p-10 shadow-sm">
                <h3 class="mb-8 text-xs font-bold tracking-widest text-gray-400 uppercase">
                  In your harvest
                </h3>
                <div class="mb-8 space-y-6">
                  <div class="flex items-center gap-4">
                    <div class="h-16 w-12 shrink-0 overflow-hidden rounded-lg bg-[#FDFCF8]">
                      <img
                        src="https://storage.googleapis.com/vue-course-api.appspot.com/root/1766909664377.jpg"
                        class="h-full w-full object-cover"
                      />
                    </div>
                    <div class="flex-1">
                      <p class="text-sm font-bold text-[#2C3E2D]">Fresh Broccoli</p>
                      <p class="text-[10px] text-gray-400">Qty: 1</p>
                    </div>
                    <span class="text-sm font-bold text-[#2C3E2D]">$80</span>
                  </div>
                </div>

                <div class="mb-8 flex gap-2">
                  <input
                    type="text"
                    placeholder="Gift code"
                    class="flex-1 rounded-xl border border-transparent bg-[#FDFCF8] px-4 py-2 text-sm outline-none focus:border-[#8C5E3C]/20"
                  />
                  <button class="rounded-xl bg-[#F3EFDF] px-6 py-2 text-xs font-bold text-[#2C3E2D]">
                    APPLY
                  </button>
                </div>

                <div class="space-y-3 border-t border-[#2C3E2D]/5 pt-6 text-sm">
                  <div class="flex justify-between">
                    <span class="text-gray-400">Subtotal</span>
                    <span class="font-bold">$200</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-400">Shipping</span>
                    <span class="font-bold text-[#8C5E3C]">Free</span>
                  </div>
                  <div class="flex justify-between border-t border-[#2C3E2D]/5 pt-4">
                    <span class="text-lg font-bold text-[#2C3E2D]">Total</span>
                    <span class="text-2xl font-black tracking-tighter text-[#2C3E2D]">$200</span>
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
