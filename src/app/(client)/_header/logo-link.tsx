"use client";
import Link from "next/link";
import Image from "next/image";

type LogoLinkProps = {
  onClick?: () => void;
};

export const LogoLink = ({ onClick }: LogoLinkProps) => {
  return (
    <Link
      href="/"
      title="PrimePro Indonesia"
      aria-label="PrimePro Indonesia"
      className="flex items-center gap-2 pl-2"
      onClick={() => onClick?.()}
    >
      <Image
        src="/images/primepro.png"
        alt="PrimePro Logo"
        width={50}
        height={50}
        className="w-6 h-6"
      />
      <div className="text-lg flex flex-wrap font-bold">PRIMEPRO INDONESIA</div>
    </Link>
  );
};
