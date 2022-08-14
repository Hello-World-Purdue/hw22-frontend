import Link from "next/link";
import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

export function DecoratedLink({
  children,
  href,
}: {
  children?: any;
  href: string;
}) {
  return (
    <Link href={href} passHref>
      <a
        href={href}
        className="belle font-bold text-[1.2rem] underline text-[#f178b6]"
      >
        {children}
      </a>
    </Link>
  );
}

export function DecoratedButton({
  children,
  ...rest
}: {children?: any} & Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "className"
>) {
  return (
    <button
      className="belle font-bold text-[1.2rem] underline text-[#f178b6]"
      {...rest}
    >
      {children}
    </button>
  );
}
