import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import {
  PROPERTY_IMAGE_TAGS,
  PropertyImage,
  PropertyImageTag,
} from "@/lib/enums/property-image";
import { cn } from "@/lib/utils";
import { LuMenu, LuStar, LuTag, LuTrash } from "react-icons/lu";

type ImagesMenuProps = {
  propertyImage: PropertyImage;
  onSetAsCoverClick: () => void;
  onDeleteClick: () => void;
  onTagClick: (tag: PropertyImageTag) => void;
};

export const ImagesMenu = ({
  propertyImage,
  onSetAsCoverClick,
  onDeleteClick,
  onTagClick,
}: ImagesMenuProps) => {
  return (
    <div className="absolute top-0 right-0">
      <DropdownMenu>
        <DropdownMenuTrigger
          className={cn(
            buttonVariants({ variant: "ghost", size: "icon" }),
            "w-6 h-6 rounded focus-visible:ring-transparent",
          )}
        >
          <LuMenu />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" side="right">
          <DropdownMenuItem onSelect={() => onSetAsCoverClick()}>
            <LuStar />
            Set as cover
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => onDeleteClick()}>
            <LuTrash />
            Delete
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <LuTag />
              Tag
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {PROPERTY_IMAGE_TAGS.map((tag, index) => (
                  <DropdownMenuItem
                    key={`${index}_${tag.indonesian_label}`}
                    className={cn(
                      tag.indonesian_label === propertyImage.indonesian_label &&
                        "bg-secondary text-secondary-foreground",
                    )}
                    onSelect={() => onTagClick(tag)}
                  >
                    {tag.indonesian_label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
