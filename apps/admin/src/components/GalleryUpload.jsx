import { Toast, validateFiles } from '@repo/utils';

function GalleryUpload({ values = [], onChange, maxMB = 3 }) {
  const handleAddFiles = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = validateFiles(files, maxMB, Toast);
    if (validFiles.length === 0) return;

    const newItems = validFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    onChange([...values, ...newItems]);

    e.target.value = '';
  };

  const removeImage = (index) => {
    onChange(values.filter((_, i) => i !== index));
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {values.map((item, index) => (
        <div
          key={index}
          className="group relative aspect-square overflow-hidden rounded-xl border border-gray-100 bg-gray-50"
        >
          <img src={item?.preview || item} className="h-full w-full object-cover" />
          <button
            type="button"
            onClick={() => removeImage(index)}
            className="absolute top-2 right-2 rounded-full bg-red-500 p-1 text-white opacity-0 transition group-hover:opacity-100 hover:bg-red-600"
          >
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                d="M6 18L18 6M6 6l12 12"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      ))}

      <label className="relative aspect-square cursor-pointer overflow-hidden rounded-xl border-2 border-dashed border-gray-200 transition hover:border-emerald-400 hover:bg-emerald-50/30">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
          <svg className="mb-1 size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              d="M12 4.5v15m7.5-7.5h-15"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[10px] font-bold">Add Photo</span>
        </div>
        <input type="file" multiple accept="image/*" className="hidden" onChange={handleAddFiles} />
      </label>
    </div>
  );
}

export default GalleryUpload;
