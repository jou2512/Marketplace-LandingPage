import React from "react";

interface BreadcrumbItemProps {
  href: string;
  text: string;
}

function BreadcrumbItem({ href, text }: BreadcrumbItemProps) {
  return (
    <li className="flex">
      <div className="flex items-center">
        <svg
          className="h-full w-6 flex-shrink-0 text-gray-300"
          viewBox="0 0 24 44"
          preserveAspectRatio="none"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"></path>
        </svg>
        <a href={href} className="ml-4 text-sm font-medium text-gray-500 bky">
          {text}
        </a>
      </div>
    </li>
  );
}

export default BreadcrumbItem;
