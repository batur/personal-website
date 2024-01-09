'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import LOGO from '@assets/Logo.svg';
import { Button } from '@components/ui/button';

const NAV_LINKS = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Contact',
    href: '/contact'
  }
];

const Header: React.FC = () => {
  const router = usePathname();

  return (
    <header className='w-full py-2'>
      <div className='container mx-auto flex w-full items-center justify-between'>
        <Link href='/'>
          <Image src={LOGO} alt='Logo' width={128} height={40} />
        </Link>
        <nav>
          <ul className='hidden items-center justify-between space-x-6 md:flex'>
            {NAV_LINKS.map(({ name, href }) => (
              <li key={name}>
                <Link href={href}>
                  <span className={`text-neutral-400 duration-100 hover:text-neutral-100 ${router === href ? 'text-neutral-100' : ''}`}>
                    {name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <Button variant='default' size='lg'>
            Let&apos;s Talk
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
