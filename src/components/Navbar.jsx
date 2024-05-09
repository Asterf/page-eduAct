import React from 'react'
import {Icon} from './Icon'
export function Navbar() {
  return (
    <div className='pt-5'>
        <header>
            <nav>
                <ul className='flex justify-around items-center text-sm'>
                    < Icon/>
                    <li><a href="">Pages</a></li>
                    <li><a href="">Course</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact</a></li>
                    <button className='w-32 h-8 text-sm font-bold rounded bg-[#F57005]'>Get In Touch</button>
                </ul>
            </nav>
        </header>
    </div>
  )
}