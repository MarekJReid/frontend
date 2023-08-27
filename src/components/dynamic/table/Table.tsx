interface TableProps<T> {
  data: T[];
  renderers: { [key in keyof T]?: (item: T[key]) => JSX.Element | undefined };
  headers?: {
    [key in keyof T]?: string;
  };
}

export function Table<T extends object>({
  data,
  renderers = {},
  headers,
}: TableProps<T>) {
  if (data.length === 0) return null;

  const columns = Object.keys(data[0]) as Array<keyof T>;

  return (
    <table className="w-full text-left border-collapse">
      <thead className="font-sans bg-blue-500 text-white">
        <tr>
          {columns.map((column) => (
            <th key={String(column)} className="p-4 border border-gray-300">
              {headers?.[column] || String(column)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="font-sans">
        {data.map((item, rowIndex) => (
          <tr
            key={rowIndex}
            className={`${rowIndex % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
          >
            {columns.map((column) => (
              <td key={String(column)} className="p-4 border border-gray-300">
                {renderers[column]
                  ? renderers[column]!(item[column])
                  : item[column]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
