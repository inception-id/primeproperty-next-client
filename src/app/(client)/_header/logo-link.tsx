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
      className="flex items-center gap-2 pl-2"
      onClick={() => onClick?.()}
    >
      <Image
        src="/images/primepro.png"
        alt="PrimePro Logo"
        width={25}
        height={25}
      />
      <div className="text-xs flex flex-col">
        <span>Primepro</span>
        <span>Indonesia</span>
      </div>
    </Link>
  );
};
