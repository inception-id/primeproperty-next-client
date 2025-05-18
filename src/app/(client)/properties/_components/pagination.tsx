"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FindPropertyQuery } from "@/lib/api/properties/find-properties";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

type PaginationProps = {
  searchParams: FindPropertyQuery;
  currentPage: number;
  totalPages: number;
};

export const Pagination = ({
  currentPage,
  totalPages,
  searchParams,
}: PaginationProps) => {
  const [pageValue, setPageValue] = useState(currentPage);
  const router = useRouter();
  const typingTimeoutRef = useRef<any>(null);
  const onPageChange = (pageNumber: number) => {
    const newParams = new URLSearchParams(searchParams);
    let newPageNumber = pageNumber;
    if (pageNumber < 1) newPageNumber = 1;
    if (pageNumber > totalPages) newPageNumber = totalPages;
    setPageValue(newPageNumber);
    newParams.set("page", String(newPageNumber));
    router.replace(`/properties?${newParams.toString()}`);
  };
  if (totalPages === 1) return <></>;
  return (
    <div className="flex items-center justify-between w-full md:w-fit md:ml-auto md:gap-4">
      <Button
        size="icon"
        variant="outline"
        disabled={currentPage === 1}
        className="rounded-full"
        onClick={() => onPageChange(currentPage - 1)}
      >
        <LuChevronLeft />
      </Button>
      <div className="text-sm flex items-center gap-2">
        <span>Halaman</span>
        <Input
          type="text"
          ref={typingTimeoutRef}
          min={1}
          max={totalPages}
          className="h-8 w-12"
          placeholder={String(pageValue)}
          value={pageValue}
          onChange={(e) => {
            if (isNaN(+e.target.value)) {
              return;
            }
            setPageValue(+e.target.value);
            if (typingTimeoutRef.current) {
              clearTimeout(typingTimeoutRef?.current);
            }
            typingTimeoutRef.current = setTimeout(() => {
              onPageChange(+e.target.value);
            }, 500);
          }}
        />
        <span>dari</span>
        <span>{totalPages}</span>
      </div>
      <Button
        size="icon"
        variant="outline"
        className="rounded-full"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <LuChevronRight />
      </Button>
    </div>
  );
};
