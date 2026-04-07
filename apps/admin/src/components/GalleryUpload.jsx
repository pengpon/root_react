import { PlusIcon, XMarkIcon } from '@repo/ui';
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
          <img src={item?.preview || item} alt="preview" className="h-full w-full object-cover" />
          <button
            type="button"
            onClick={() => removeImage(index)}
            className="absolute top-2 right-2 rounded-full bg-red-500 p-1 text-white opacity-0 transition group-hover:opacity-100 hover:bg-red-600"
          >
            <XMarkIcon className="size-4 stroke-2" />
          </button>
        </div>
      ))}

      <label className="relative aspect-square cursor-pointer overflow-hidden rounded-xl border-2 border-dashed border-gray-200 transition hover:border-emerald-400 hover:bg-emerald-50/30">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
          <PlusIcon className="mb-1 size-6 stroke-2" />
          <span className="text-[10px] font-bold">Add Photo</span>
        </div>
        <input type="file" multiple accept="image/*" className="hidden" onChange={handleAddFiles} />
      </label>
    </div>
  );
}

export default GalleryUpload;
