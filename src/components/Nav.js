import React from 'react';
import { Link } from 'react-scroll';

const Nav = () => {
    const navigation = [
        {
            name: 'home',
            href: 'home',
        },
        {
            name: 'about',
            href: 'about',
        },
        {
            name: 'features',
            href: 'features',
        },
        {
            name: 'services',
            href: 'services',
        },
        {
            name: 'contact',
            href: 'contact',
        },
    ];
    return (
        <nav>
            <ul className='flex space-x-12  capitalize text-lg'>
                {navigation.map((item, idx) => {
                    return (
                        <li
                            className=' hover:text-orange-500 cursor-pointer'
                            key={idx}
                        >
                            <Link
                                to={item.href}
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className='transition-all duration-300'
                            >
                                {item.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Nav;
