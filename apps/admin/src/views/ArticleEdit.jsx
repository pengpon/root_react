function ArticleEdit() {
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
                  Articles
                </a>
                <span className="mx-2">/</span>
                <span className="font-medium text-gray-800">Edit Article</span>
              </nav>
              <h2 className="text-2xl font-bold text-gray-800">Edit: 測試文章</h2>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="rounded-lg border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
              Discard
            </button>
            <button className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-100 transition hover:bg-blue-700">
              Publish Article
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-blue-600">
                  <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800">Content</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Article Title</label>
                  <input
                    type="text"
                    value="測試文章"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    rows="3"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 focus:border-blue-500 focus:bg-white focus:outline-none"
                  >
                    文章內容簡介...
                  </textarea>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Full Content</label>
                  <div className="min-h-75 rounded-xl border border-gray-200 bg-gray-50 p-4 text-gray-400 italic">
                    WYSIWYG Editor Placeholder (如 Quill 或 CKEditor)
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800">Visibility</h3>
              </div>
              <div className="space-y-3">
                <label className="group relative flex cursor-pointer items-center rounded-xl border border-gray-200 p-4 transition-all has-checked:border-emerald-500 has-checked:bg-emerald-50/30">
                  <input type="radio" name="isPublic" value="true" className="peer sr-only" checked />
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-4 border-gray-300 bg-white transition-all peer-checked:border-emerald-500">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 opacity-0 transition-all peer-checked:opacity-100"></div>
                  </div>
                  <span className="ml-3 text-sm font-bold text-gray-900 peer-checked:text-emerald-700">
                    Public
                  </span>
                </label>
                <label className="group relative flex cursor-pointer items-center rounded-xl border border-gray-200 p-4 transition-all has-checked:border-slate-500 has-checked:bg-slate-50">
                  <input type="radio" name="isPublic" value="false" className="peer sr-only" />
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-4 border-gray-300 bg-white transition-all peer-checked:border-slate-500">
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-500 opacity-0 transition-all peer-checked:opacity-100"></div>
                  </div>
                  <span className="ml-3 text-sm font-bold text-gray-900 peer-checked:text-slate-700">
                    Private (Draft)
                  </span>
                </label>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800">Metadata</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Author</label>
                  <input
                    type="text"
                    value="author"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 focus:border-indigo-500 focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Create Date</label>
                  <input
                    type="date"
                    value="2026-03-06"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 focus:border-indigo-500 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50/50 p-6">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium tracking-wider text-gray-500 uppercase">
                  Reading Time
                </span>
                <span className="text-sm font-bold text-gray-900">~ 5 min</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium tracking-wider text-gray-500 uppercase">
                  Words
                </span>
                <span className="text-sm font-bold text-gray-900">1,250</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ArticleEdit;
