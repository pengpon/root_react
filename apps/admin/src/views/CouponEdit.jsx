function CouponEdit() {
  return (
    <>
      <section className="flex-1 overflow-y-auto bg-gray-50 p-8">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onclick="history.back()"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </button>
            <div>
              <nav className="mb-1 flex text-sm text-gray-500">
                <a href="#" className="hover:text-blue-600">
                  Coupons
                </a>
                <span className="mx-2">/</span>
                <span className="font-medium text-gray-800">Edit Coupon</span>
              </nav>
              <h2 className="text-2xl font-bold text-gray-800">Edit: 超級特惠價格</h2>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="rounded-lg border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
              Discard
            </button>
            <button className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-100 transition hover:bg-blue-700">
              Save Changes
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800">Coupon Rules</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Coupon Title</label>
                  <input
                    type="text"
                    value="超級特惠價格"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Discount Percentage (%)
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value="80"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-12 pl-4 text-gray-800 focus:border-blue-500 focus:bg-white focus:outline-none"
                      />
                      <span className="absolute top-1/2 right-4 -translate-y-1/2 font-semibold text-gray-400">
                        %
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-gray-400 italic">
                      User pays 80% of the price (20% OFF).
                    </p>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Promo Code</label>
                    <input
                      type="text"
                      value="testCode"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 font-mono font-bold text-blue-600 uppercase transition focus:border-blue-500 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800">Validity Period</h3>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Start Date</label>
                  <input
                    type="date"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Due Date</label>
                  <input
                    type="date"
                    value="2026-04-17"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800">Access</h3>
              </div>
              <div className="space-y-4">
                <label className="group relative flex cursor-pointer items-start rounded-xl border border-gray-200 p-4 transition-all duration-200 hover:border-emerald-200 hover:bg-gray-50 has-checked:border-emerald-500 has-checked:bg-emerald-50/30">
                  <input type="radio" name="coupon_status" value="1" className="peer sr-only" checked />
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-4 border-gray-300 bg-white transition-all peer-checked:border-emerald-500 peer-checked:ring-4 peer-checked:ring-emerald-500/10">
                    <div className="h-2 w-2 scale-50 rounded-full bg-emerald-500 opacity-0 transition-all duration-200 peer-checked:scale-100 peer-checked:opacity-100"></div>
                  </div>
                  <div className="ml-3">
                    <span className="block text-sm font-bold text-gray-900 peer-checked:text-emerald-700">
                      Enabled
                    </span>
                    <span className="mt-0.5 block text-xs font-medium text-gray-500">
                      Allow system to activate based on dates.
                    </span>
                  </div>
                </label>

                <label className="group relative flex cursor-pointer items-start rounded-xl border border-gray-200 p-4 transition-all duration-200 hover:border-slate-300 hover:bg-gray-50 has-checked:border-slate-500 has-checked:bg-slate-50">
                  <input type="radio" name="coupon_status" value="0" className="peer sr-only" />
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-4 border-gray-300 bg-white transition-all peer-checked:border-slate-500 peer-checked:ring-4 peer-checked:ring-slate-500/10">
                    <div className="h-2 w-2 scale-50 rounded-full bg-slate-500 opacity-0 transition-all duration-200 peer-checked:scale-100 peer-checked:opacity-100"></div>
                  </div>
                  <div className="ml-3">
                    <span className="block text-sm font-bold text-gray-900 peer-checked:text-slate-700">
                      Disabled
                    </span>
                    <span className="mt-0.5 block text-xs font-medium text-gray-500">
                      Force turn off this coupon.
                    </span>
                  </div>
                </label>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800">History</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="mb-1 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                    Last Modified
                  </p>
                  <p className="text-sm font-medium text-gray-700">2026-03-01 10:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CouponEdit;
