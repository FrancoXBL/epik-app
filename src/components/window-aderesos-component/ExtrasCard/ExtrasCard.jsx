export function ExtrasCard({ extraItem }) {
  return (
    <button className="p-4 bg-primary-200 text-bg-200 m-2 rounded-md">
      {extraItem.name} - <span>{extraItem.price}</span>
    </button>
  );
}
