function ProductEdit() {
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
                strokeWidth="2"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </button>
            <div>
              <nav className="mb-1 flex text-sm text-gray-500">
                <a href="#" className="hover:text-blue-600">
                  Products
                </a>
                <span className="mx-2">/</span>
                <span className="font-medium text-gray-800">Edit Product</span>
              </nav>
              <h2 className="text-2xl font-bold text-gray-800">Edit: Farm-to-Table Strawberries</h2>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="rounded-lg border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
              Discard
            </button>
            <button className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700">
              Save Changes
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
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
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800">General Information</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Product Name</label>
                  <input
                    type="text"
                    value="Farm-to-Table Sweet Strawberries"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    rows="6"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                  >
                    Hand-picked fresh strawberries from our local farm. High in vitamin C and
                    perfectly sweet.
                  </textarea>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
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
                      d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800">Pricing & Inventory</h3>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Origin Price</label>
                  <div className="relative">
                    <span className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400">$</span>
                    <input
                      type="number"
                      value="150"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-4 pl-8 text-gray-800 focus:border-blue-500 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Sale Price</label>
                  <div className="relative">
                    <span className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400">$</span>
                    <input
                      type="number"
                      value="150"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-4 pl-8 text-gray-800 focus:border-blue-500 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Stock Quantity</label>
                  <input
                    type="number"
                    value="2"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
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
                        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Product Media</h3>
                </div>
                <span className="text-xs text-gray-400">Main image and gallery photos</span>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                <div className="md:col-span-2 md:row-span-2">
                  <label className="mb-2 block text-xs font-semibold tracking-wider text-gray-500 uppercase">
                    Cover Image
                  </label>
                  <div className="group relative aspect-square overflow-hidden rounded-2xl border-2 border-dashed border-gray-200 transition hover:border-blue-400">
                    <img
                      src="https://dummyimage.com/600x600/f3f4f6/6b7280"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="mb-2 size-8 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <span className="text-sm font-medium text-white">Change Cover</span>
                    </div>
                    <input type="file" className="absolute inset-0 cursor-pointer opacity-0" />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-xs font-semibold tracking-wider text-gray-500 uppercase">
                    Gallery Images
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="group relative aspect-square overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
                      <img
                        src="https://dummyimage.com/300x300/f3f4f6/6b7280"
                        className="h-full w-full object-cover"
                      />
                      <button className="absolute top-2 right-2 rounded-full bg-red-500 p-1 text-white opacity-0 transition group-hover:opacity-100 hover:bg-red-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="relative aspect-square overflow-hidden rounded-xl border-2 border-dashed border-gray-200 transition hover:border-blue-400 hover:bg-blue-50/30">
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="mb-1 size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        <span className="text-[10px] font-bold">Add Photo</span>
                      </div>
                      <input
                        type="file"
                        multiple
                        className="absolute inset-0 cursor-pointer opacity-0"
                      />
                    </div>
                  </div>
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
                      d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800">Status</h3>
              </div>
              <div className="space-y-4">
                <label className="group relative flex cursor-pointer items-start rounded-xl border border-gray-200 p-4 transition hover:bg-gray-50 has-checked:border-emerald-500 has-checked:bg-emerald-50/30">
                  <input type="radio" name="coupon_status" value="1" className="peer sr-only" checked />
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-4 border-gray-300 bg-white transition peer-checked:border-emerald-500 peer-checked:ring-4 peer-checked:ring-emerald-500/20">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 opacity-0 peer-checked:opacity-100"></div>
                  </div>
                  <div className="ml-3">
                    <span className="block text-sm font-bold text-gray-900">Active</span>
                    <span className="mt-1 block text-xs text-gray-500">Visible & Purchasable</span>
                  </div>
                </label>

                <label className="group relative flex cursor-pointer items-start rounded-xl border border-gray-200 p-4 transition hover:bg-gray-50 has-checked:border-slate-400 has-checked:bg-slate-50">
                  <input type="radio" name="coupon_status" value="0" className="peer sr-only" />
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-4 border-gray-300 bg-white transition peer-checked:border-slate-500 peer-checked:ring-4 peer-checked:ring-slate-500/20">
                    <div className="h-2 w-2 rounded-full bg-slate-500 opacity-0 peer-checked:opacity-100"></div>
                  </div>
                  <div className="ml-3">
                    <span className="block text-sm font-bold text-gray-900">Inactive</span>
                    <span className="mt-1 block text-xs text-gray-500">Hidden from store</span>
                  </div>
                </label>
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
                      d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m-15 0a2.25 2.25 0 0 0-1.5 2.122v5.25a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25v-5.25a2.25 2.25 0 0 0-1.5-2.122m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800">Organization</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Category</label>
                  <select className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 focus:border-blue-500 focus:bg-white focus:outline-none">
                    <option selected>Fruit</option>
                    <option>Vegetables</option>
                    <option>Dairy</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Unit</label>
                  <input
                    type="text"
                    value="box"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </div>
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
                  <p className="text-sm font-medium text-gray-700">2026-03-05 16:45</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductEdit;
