import {Icon} from './Icon'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLocationDot, faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";

export function Footter() {
  return (
    <div className='bg-[#2A254D] flex justify-around py-8 items-center'>
      <div className='w-1/3 text-[#ACA7DA] ml-2'>
        <div className='ml-3'>
          <Icon />
        </div>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
      </div>
      <div className='text-xl'>
        <h3 className='text-white font-bold text-2xl mb-4 border-b-4 border-orange-600 pb-2'>Quick Links</h3>
        
        <ul className='text-[#ACA7DA] text-left'>
          <li className='mt-2'><a href="">Latest Courses</a></li>
          <li className='mt-2'><a href="">Mission & Vision</a></li>
          <li className='mt-2'><a href="">Our Approach</a></li>
          <li className='mt-2'><a href="">Exclusive Advisors</a></li>
          <li className='mt-2'><a href="">Join A Carrer</a></li>
        </ul>
      </div>
      <div>
        <h3 className='text-white font-bold text-2xl mb-4 border-b-4 border-orange-600 pb-2'>Explore</h3>
        <ul className='text-[#ACA7DA] text-left'>
          <li className='mt-2'><a href="">About Us </a></li>
          <li className='mt-2'><a href="">Upcoming Events</a></li>
          <li className='mt-2'><a href=""> Blog & News</a></li>
          <li className='mt-2'><a href="">FAQ Question</a></li>
          <li className='mt-2'><a href="">Testimonial</a></li>
          <li className='mt-2'><a href="">Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <h3 className='text-white font-bold text-2xl mb-4 border-b-4 border-orange-600 pb-2'>Contact Us</h3>
        <ul className='text-[#ACA7DA] text-left'>
          <li className='mt-3'><FontAwesomeIcon className='text-2xl text-orange-600 mr-3' icon={faLocationDot}/>6391 Elgin St Celina, Delaware 10299</li>
          <li className='mt-3'><FontAwesomeIcon className='text-2xl text-orange-600 mr-3' icon={faPhone}/>(303) 5555-0105</li>
          <li className='my-3'><FontAwesomeIcon className='text-2xl text-orange-600 mr-3' icon={faEnvelope}/>michael.mitc@example.com</li>
        </ul>
        <form action="">
          <input className='mt-4 pl-2 h-12 w-56 rounded-tl rounded-bl border-2 bg-[#2A254D] border-[#ACA7DA]' type="email" placeholder='Email Address' />
          <button className='bg-orange-500 h-12 w-32  rounded text-white font-bold'>Subscribe</button>
        </form>
      </div>
    </div>
  )
}