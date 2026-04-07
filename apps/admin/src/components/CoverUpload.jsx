import { PlusIcon } from '@repo/ui';
import { Toast, validateFiles } from '@repo/utils';

function CoverUpload({ value, onChange, maxMB = 3 }) {
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const [validFile] = validateFiles(files, maxMB, Toast);

    if (validFile) {
      onChange({ file: validFile, preview: URL.createObjectURL(validFile) });
    }
    e.target.value = '';
  };

  const displayUrl = value?.preview || (typeof value === 'string' ? value : '');

  return (
    <div className="group relative aspect-square overflow-hidden rounded-2xl border-2 border-dashed border-gray-200 transition hover:border-emerald-400">
      {displayUrl ? (
        <img src={displayUrl} alt="display image" className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full items-center justify-center bg-gray-50 text-gray-400">
          No Image
        </div>
      )}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
        <PlusIcon className="mb-2 size-8 stroke-2 text-white" />
        <span className="text-sm font-medium text-white">Change Cover</span>
      </div>
      <input
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        className="absolute inset-0 cursor-pointer opacity-0"
        onChange={handleFileChange}
      />
    </div>
  );
}

export default CoverUpload;
