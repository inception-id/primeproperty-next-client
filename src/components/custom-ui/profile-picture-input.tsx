import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRef, useState } from "react";
import { LuCircleUserRound } from "react-icons/lu";

type ProfilePictureInputProps = {
  defaultProfileImage?: string;
};

export const ProfilePictureInput = ({
  defaultProfileImage,
}: ProfilePictureInputProps) => {
  const [profileImage, setProfileImage] = useState<string>(
    defaultProfileImage ?? "",
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={cn("flex flex-col items-center gap-4")}>
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className={cn(
          "border border-dashed w-full h-48 text-muted-foreground/50 hover:bg-muted flex flex-col items-center justify-center rounded gap-2",
        )}
      >
        {profileImage ? (
          <Image
            src={profileImage}
            alt="Profile Image"
            className="size-40 object-cover border rounded-full bg-background"
            width={100}
            height={100}
          />
        ) : (
          <>
            <LuCircleUserRound className="size-24" />
            <div className="text-sm">Image (optional)</div>
          </>
        )}
      </button>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/png"
        className="hidden"
        onChange={handleImageChange}
        name="profile_picture"
      />
    </div>
  );
};
