import React from 'react'
import Navbar from './Navbar';
import { BackgroundBeamsWithCollision } from "@/components/background-beams-with-collision";

// export default function Footer() {
//   return (
//     <div className="border-t mt-10">
//         <Navbar className='flex-col'/>
//     </div>
//   );
// }
  export default function Footer() {
    return (
      <BackgroundBeamsWithCollision>
        
          <div className="border-t mt-10 w-full">
              <Navbar className='flex-col gap-5'/>
          </div>
      </BackgroundBeamsWithCollision>
    );
}


