'use client';

import Button from '@/components/ui/button';
import React, { FC, use, useEffect, useState } from 'react';

interface TableFooterProps {
  onPageChange: (page: number) => void;
  totalPages: number;
  loading: boolean;
}

const TableFooter: FC<TableFooterProps> = ({ totalPages, loading, onPageChange }) => {
  const [page, setPage] = useState<number>(1);

  const handleNextPage = () => {
    if (page < totalPages) {
      const nextPage = page + 1;
      setPage(nextPage);
      onPageChange(nextPage); // Assuming onPageChange actually fetches the data for the next page
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      const nextPage = page - 1;
      setPage(nextPage);
      onPageChange(nextPage); // Assuming onPageChange actually fetches the data for the next page
    }
  };

  return (
    <tfoot className="w-full sticky bottom-0 bg-white z-10">
      <tr>
        <td colSpan={8} className="p-2">
          <div className="flex justify-between items-center">
            <Button className="w-24" onClick={handlePreviousPage}>
              Previous
            </Button>
            <p className="font-semibold">
              {loading ? 'Loading...' : `Page ${page} of ${totalPages}`}
            </p>
            <Button className="w-24" onClick={handleNextPage}>
              Next
            </Button>
          </div>
        </td>
      </tr>
    </tfoot>
  );
};

export default TableFooter;
