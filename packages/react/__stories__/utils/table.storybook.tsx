// @ts-nocheck
import React from 'react'

interface QuickTableProps {
  headers: string[]
  rows: string[][]
}

export function QuickTable({ headers, rows }: QuickTableProps) {
  return (
    <table className="my-6 w-full border-separate border-spacing-0 overflow-hidden">
      <thead>
        <tr className="bg-[#A60058] text-[#EEE8FF]">
          {headers.map((header, i) => (
            <th
              key={i}
              className="px-4 py-3 text-left font-size-150 font-weight-600 "
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j} className="px-4 py-[10px] font-size-150">
                <code className="corner-radius-full bg-[#EEE8FF] px-2 py-[2px] font-size-150 text-[#A60058]">
                  {cell}
                </code>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
