interface PropsTableProps {
  data: {
    prop: string;
    type: string;
    default: string;
    description: string;
  }[];
}

const PropsTable = ({ data }: PropsTableProps) => {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xs">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-zinc-50 dark:bg-zinc-800/80 border-b border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-200">
            <tr>
              <th className="px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-300">
                Prop
              </th>
              <th className="px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-300">
                Type
              </th>
              <th className="px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-300">
                Default
              </th>
              <th className="px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-300">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/70">
            {data.map((row, i) => (
              <tr
                key={i}
                className="hover:bg-zinc-50/80 dark:hover:bg-zinc-800/40 transition-colors"
              >
                <td className="px-4 py-3.5 whitespace-nowrap align-top">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-md font-mono text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60">
                    {row.prop}
                  </span>
                </td>
                <td className="px-4 py-3.5 align-top">
                  <span className="inline-block font-mono text-xs text-purple-700 dark:text-purple-300 bg-purple-50/80 dark:bg-purple-950/50 px-2 py-0.5 rounded-md border border-purple-200/60 dark:border-purple-800/50 break-words leading-relaxed max-w-xs">
                    {row.type}
                  </span>
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap align-top">
                  <span className="font-mono text-xs text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">
                    {row.default}
                  </span>
                </td>
                <td className="px-4 py-3.5 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed align-top">
                  {row.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PropsTable;
