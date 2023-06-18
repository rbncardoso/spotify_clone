
import Link from 'next/link';
import React from 'react'
import {twMerge} from 'tailwind-merge'

import { IconType } from "react-icons";

interface SidebarItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  active,
  href
}) => {
  return (
  <Link
  href={href}
  className={twMerge(`flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium
                     text-neutral-400 cursor-pointer hover:text-white transition py-1`,
                     active && "text-white")}
  >
    SidebarItem
  </Link

  >
      
  )
}

export default SidebarItem