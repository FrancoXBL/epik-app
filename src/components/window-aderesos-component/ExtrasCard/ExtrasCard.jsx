export function ExtrasCard({ extraItem }) {
  return (
    <button className="p-4 bg-primary-200 text-bg-200 m-2 rounded-md hover:bg-primary-100">
      {extraItem.name} - <span>{extraItem.specs[0].price}</span>
    </button>
  );
}
