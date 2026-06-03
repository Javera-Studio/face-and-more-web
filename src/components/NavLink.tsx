'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps {
  to: string;
  children?: React.ReactNode;
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  onClick?: () => void;
  [key: string]: any;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, to, onClick, children, ...props }, ref) => {
    const pathname = usePathname();
    const isActive = pathname === to || (to !== "/" && pathname.startsWith(to));

    return (
      <Link
        ref={ref}
        href={to}
        onClick={onClick}
        className={cn(className, isActive && activeClassName)}
        {...props}
      >
        {children}
      </Link>
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
