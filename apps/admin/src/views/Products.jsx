function Products() {
  return (
    <>
      <section className="flex-1 overflow-y-auto bg-gray-50 p-8">
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between border-b border-gray-50 p-6">
            <button className="mr-4 flex items-center rounded-lg bg-blue-100 p-2 text-blue-600 transition hover:bg-blue-600 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="mr-2 h-4 w-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span className="font-medium"> Add Product </span>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-xs tracking-wider text-gray-500 uppercase">
                <tr>
                  <th className="px-6 py-4 font-semibold">Product Name</th>
                  <th className="px-6 py-4 font-semibold">Category</th>
                  <th className="px-6 py-4 font-semibold">Price</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold">Stock</th>
                  <th className="px-6 py-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                <tr className="transition hover:bg-gray-50">
                  <td className="flex items-center px-6 py-4 font-medium text-gray-800">
                    <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-gray-50">
                      <img
                        src="https://dummyimage.com/600x400/cdcdcd/ffffff"
                        alt="Product"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="font-medium text-gray-900">Farm-to-Table Sweet Strawberries</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">Fruit</td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-semibold text-gray-900">$150</div>
                    <div className="text-xs text-gray-400">/ box</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-600/20 ring-inset">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-600">
                      2 units
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex space-x-2">
                      <button className="rounded-full p-2 text-gray-500 hover:bg-white hover:text-blue-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                          />
                        </svg>
                      </button>
                      <button className="rounded-full p-2 text-gray-500 hover:bg-white hover:text-red-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="transition hover:bg-gray-50">
                  <td className="flex items-center px-6 py-4 font-medium text-gray-800">
                    <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-gray-50">
                      <img
                        src="https://dummyimage.com/600x400/cdcdcd/ffffff"
                        alt="Product"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="font-medium text-gray-900">Seasonal Fragrant Peaches</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">Fruit</td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-semibold text-gray-900">$35</div>
                    <div className="text-xs text-gray-400">/ box</div>
                  </td>

                  <td className="px-6 py-4">
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-600/20 ring-inset">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-600">
                      5 units
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex space-x-2">
                      <button className="rounded-full p-2 text-gray-500 hover:bg-white hover:text-blue-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                          />
                        </svg>
                      </button>
                      <button className="rounded-full p-2 text-gray-500 hover:bg-white hover:text-red-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="transition hover:bg-gray-50">
                  <td className="flex items-center px-6 py-4 font-medium text-gray-800">
                    <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-gray-50">
                      <img
                        src="https://dummyimage.com/600x400/cdcdcd/ffffff"
                        alt="Product"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="font-medium text-gray-900">Garden Fresh Cherry Tomatoes</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">Fruit</td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-semibold text-gray-900">$150</div>
                    <div className="text-xs text-gray-400">/ box</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700 ring-1 ring-amber-600/20 ring-inset">
                      Inactive
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600">
                      12 units
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex space-x-2">
                      <button className="rounded-full p-2 text-gray-500 hover:bg-white hover:text-blue-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                          />
                        </svg>
                      </button>
                      <button className="rounded-full p-2 text-gray-500 hover:bg-white hover:text-red-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="my-6">
          <div className="flex justify-center gap-2">
            <button
              disabled
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-gray-100 text-gray-800 hover:bg-gray-500 hover:text-white disabled:cursor-not-allowed disabled:bg-white disabled:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-gray-100 text-gray-800 hover:bg-gray-500 hover:text-white disabled:cursor-not-allowed disabled:bg-white disabled:text-gray-400">
              1
            </button>
            <button
              disabled
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-gray-100 text-gray-800 hover:bg-gray-500 hover:text-white disabled:cursor-not-allowed disabled:bg-white disabled:text-gray-400"
            >
              2
            </button>
            <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-gray-100 text-gray-800 hover:bg-gray-500 hover:text-white disabled:cursor-not-allowed disabled:bg-white disabled:text-gray-400">
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
                  d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </button>

            <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-gray-100 text-gray-800 hover:bg-gray-500 hover:text-white disabled:cursor-not-allowed disabled:bg-white disabled:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
