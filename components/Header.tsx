"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { TfiClose } from "react-icons/tfi";
import { MdPhotoLibrary } from "react-icons/md";

import { menu } from "../db";

export default function Header() {
  const [offEl, setoffEl] = useState("offEl");

  return (
    <header>
      <nav id="nav">
        <ul id="menus">
          <li className="logo">
            <Link href="/">
              <span className="logoSpan">
                <MdPhotoLibrary /> Photo Convert Into 20kb
              </span>
            </Link>
          </li>
          <li
            className="menu-icon"
            onClick={() => {
              if (offEl) {
                setoffEl("");
                document.documentElement.style.cssText =
                  "overflow: hidden !important";
              } else {
                setoffEl("offEl");
                document.documentElement.style.cssText =
                  "overflow: null !important";
              }
            }}
          >
            {!offEl ? (
              <TfiClose className="fa-solid fa-bars" />
            ) : (
              <HiMenuAlt3 className="fa-solid fa-bars" />
            )}
          </li>
          <ul className={`secondary ${offEl}`}>
            {menu.map((menuItem, i) => (
              <li key={i}>
                <Link
                  href={menuItem.path}
                  onClick={() => {
                    if (document.documentElement.clientWidth <= 1171) {
                      setoffEl("offEl");
                      document.documentElement.style.cssText =
                        "overflow: null !important";
                    } else {
                      setoffEl(" ");
                    }
                  }}
                >
                  {menuItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </ul>
      </nav>
    </header>
  );
}
