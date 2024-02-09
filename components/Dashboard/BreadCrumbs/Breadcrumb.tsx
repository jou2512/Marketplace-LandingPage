"use client";

import React from "react";
import { useLocation } from "react-router-dom";
import BreadcrumbItem from "./BreadcrumbItem";

function Breadcrumb() {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
      <nav
        className="flex border-b border-gray-300 bg-white h-9"
        aria-label="Breadcrumb"
      >
        <ol role="list" className="flex w-full max-w-7xl px-4">
          <li className="flex">
            <div className="flex items-center">
              <a href="#" className="text-gray-400 bkw">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Home</span>
              </a>
            </div>
          </li>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
              return (
                <BreadcrumbItem href={to} text={value} key={value+index}/>
            );
          })}
        </ol>
      </nav>
    );
}

export default Breadcrumb;