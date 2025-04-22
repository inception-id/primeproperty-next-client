import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  const params = useSearchParams();
  const nameOrEmailParams = params.get("name_or_email");

  const router = useRouter();
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <Button
          size="icon"
          variant="outline"
          disabled={currentPage === 1}
          className="rounded-full"
          onClick={() =>
            router.replace(
              `/agents?page=${currentPage - 1}&${nameOrEmailParams && `name_or_email=${nameOrEmailParams}`}`,
            )
          }
        >
          <LuChevronLeft />
        </Button>
        <span>
          {currentPage} of {totalPages}
        </span>
        <Button
          size="icon"
          variant="outline"
          className="rounded-full"
          disabled={currentPage === totalPages}
          onClick={() =>
            router.replace(
              `/agents?page=${currentPage + 1}&${nameOrEmailParams && `search=${nameOrEmailParams}`}`,
            )
          }
        >
          <LuChevronRight />
        </Button>
      </div>
    </div>
  );
};
