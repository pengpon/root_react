export function FieldErrorMessage({ message }) {
  return (
    <>
      <div className="h-4 p-1 text-xs text-red-500">{message || ''}</div>
    </>
  );
}
