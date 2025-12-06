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
      className="flex items-center gap-2"
      onClick={() => onClick?.()}
    >
      <Image
        src="/images/primepro.png"
        alt="PrimePro Logo"
        width={75}
        height={75}
        className="w-8 h-8"
      />
      <div className="text-lg tracking-wider">PRIMEPRO INDONESIA</div>
    </Link>
  );
};
