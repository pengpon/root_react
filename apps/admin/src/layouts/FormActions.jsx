function FormActions({ submitText = 'Save Changes', discardText = 'Discard' }) {
  return (
    <>
      <button className="rounded-lg border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
        {discardText}
      </button>
      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700"
      >
        {submitText}
      </button>
    </>
  );
}

export default FormActions;
