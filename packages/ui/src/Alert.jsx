import { TrashIcon } from "@heroicons/react/24/outline";

export function Alert({ title, data, onConfirm, onCancel }) {
  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm"
      >
        <div className="w-full max-w-md scale-100 transform rounded-3xl bg-white p-8 shadow-2xl transition-all">
          <div className="mx-auto mb-6 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-red-50 text-red-600">
            <TrashIcon className="size-10" />
          </div>

          <div className="text-center">
            <h3 className="mb-2 text-xl font-bold text-gray-900">Delete {title} ? </h3>
            <p className="text-sm leading-relaxed text-gray-500">
              Are you sure you want to delete
              <span className="font-semibold text-gray-900">"{data.title}"</span>? This
              action cannot be undone !
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="rounded-xl border border-gray-200 bg-white py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 cursor-pointer"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              type="button"
              className="rounded-xl bg-red-600 py-3 text-sm font-semibold text-white shadow-lg shadow-red-200 transition hover:bg-red-700 cursor-pointer"
              onClick={onConfirm}
            >
              Yes, Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
