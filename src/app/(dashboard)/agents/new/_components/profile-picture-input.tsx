import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRef, useState } from "react";
import { LuUpload, LuUser } from "react-icons/lu";

export const ProfilePictureInput = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
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
    <div className="flex flex-col items-center gap-4">
      <div className="relative h-32 w-32 overflow-hidden rounded-full border">
        {profileImage ? (
          <Image
            src={profileImage || "/placeholder.svg"}
            alt="Profile preview"
            className="h-full w-full object-cover"
            width={50}
            height={50}
          />
        ) : (
          <LuUser className="h-full w-full text-muted-foreground/50" />
        )}
      </div>

      <div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
          onClick={() => fileInputRef.current?.click()}
        >
          <LuUpload className="h-4 w-4" />
          Upload Picture
        </Button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
          name="profile_picture"
        />
      </div>
    </div>
  );
};
