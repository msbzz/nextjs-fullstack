import React from "react";
import NextLink from "next/link";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export default function Link({ href, children, ...props }: LinkProps) {

  const isExternalLink = href.startsWith('http');

  if (isExternalLink) return <a href={href} {...props}>{children}</a>

  return (
    <NextLink href={href} passHref legacyBehavior>
      <a {...props}>
        {children}
      </a>
    </NextLink>
  );
}
