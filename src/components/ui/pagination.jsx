"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Select, SelectItem } from "@/components/ui/select";

export function Pagination({
  currentPage = 1,
  totalItems = 0,
  pageSize = 20,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [10, 20, 30, 50],
  showPageSize = true,
}) {
  const totalPages = Math.ceil(totalItems / pageSize);
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 7;
    const sidePages = 2;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let startPage = Math.max(currentPage - sidePages, 1);
      let endPage = Math.min(currentPage + sidePages, totalPages);

      if (currentPage <= sidePages + 1) {
        endPage = maxVisiblePages - 1;
      } else if (currentPage >= totalPages - sidePages) {
        startPage = totalPages - (maxVisiblePages - 2);
      }

      pages.push(1);
      if (startPage > 2) pages.push("...");
      for (let i = startPage; i <= endPage; i++) {
        if (i !== 1 && i !== totalPages) {
          pages.push(i);
        }
      }
      if (endPage < totalPages - 1) pages.push("...");
      if (totalPages !== 1) pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <Button
          variant="ghost"
          className="text-gray-600 hover:text-gray-700 border-1 border-gray-100 !rounded-none"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <span className="flex items-center gap-1">
            <ChevronLeft className="h-4 w-4" /> Back
          </span>
        </Button>

        <div className="flex items-center gap-2">
          {getPageNumbers().map((page, index) => (
            <React.Fragment key={index}>
              {page === "..." ? (
                <span className="px-2">...</span>
              ) : (
                <Button
                  variant={currentPage === page ? "default" : "ghost"}
                  onClick={() => onPageChange(page)}
                  className={`w-8 h-8 mx-0.5 border-1 border-gray-100 !rounded-none ${
                    currentPage === page
                      ? "bg-[#01C9A7] text-white hover:bg-[#01C9A7] border-none"
                      : "text-gray-600 hover:text-gray-700"
                  }`}
                >
                  {page}
                </Button>
              )}
            </React.Fragment>
          ))}
        </div>

        <Button
          variant="ghost"
          className="text-gray-600 hover:text-gray-700 border-1 border-gray-100 !rounded-none"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <span className="flex items-center gap-1">
            Next <ChevronRight className="h-4 w-4" />
          </span>
        </Button>

        <div className="flex items-center gap-2 ml-auto">
          <span className="text-gray-600">Result per page</span>
          {showPageSize && (
            <Select
              value={pageSize.toString()}
              onChange={(e) => onPageSizeChange(Number(e.target.value))}
              className="w-[100px]"
            >
              {pageSizeOptions.map((size) => (
                <SelectItem key={size} value={size.toString()}>
                  {size}
                </SelectItem>
              ))}
            </Select>
          )}
        </div>
      </div>

      <div className="text-sm text-gray-600">
        {startItem}-{endItem} of {totalItems}
      </div>
    </div>
  );
}
