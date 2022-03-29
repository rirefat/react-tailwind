import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuAlt3Icon, XIcon } from '@heroicons/react/solid'

const Header = () => {
    const [open, setOpen] = useState(false);
    const routes =[
        {id: 1, name: 'Home', link:'/home'},
        {id: 2, name: 'About', link:'/About'},
        {id: 3, name: 'Shop', link:'/shop'},
        {id: 4, name: 'Contact', link:'/Contact'},
        {id: 5, name: 'Packages', link:'/Packages'},
    ]
    return (
        <div className='p-3 bg-indigo-400 text-white'>            
            
            <div className='flex justify-between items-center'>
                <h1 className="text-3xl font-bold">
                    React Tailwind
                </h1>
                <nav className={`md:flex absolute duration-1000 md:static ease-in-out ${open ? 'top-14 bg-indigo-400 p-5 w-full justify-center':'top-[-200px]'}`}>
                    {
                        routes.map(route=><Link key={route.id} route={route}></Link>)
                    }
                </nav>
                <div className="ham-icon h-8 w-8 md:hidden duration-700" onClick={()=>setOpen(!open)}>
                    {open ? <XIcon></XIcon> : <MenuAlt3Icon></MenuAlt3Icon>}
                </div>
            </div>
        </div>
        
    );
};

export default Header;