// "use client";
// import { Disclosure } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import Link from "next/link";
// import React from "react";
// import Signdialog from "./Signdialog";
// import Registerdialog from "./Registerdialog";
// import Contact from "./Contactus";
// import Image from "next/image";
// // import Page from "../../Aboutus/page";
// const navigation = [
//   { name: "Home", href: "#home", current: true },
//   { name: "Features", href: "#courses-section", current: false },
//   { name: "Our Team", href: "#mentors-section", current: false },
//   { name: "Testimonial", href: "#testimonial-section", current: false },
//   { name: "Join", href: "#join-section", current: false },
//   { name: "About ExamTech", href: "./Aboutus", current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// const LandingNavbar = () => {

//   return (
//     <Disclosure as="nav" className="bg-lightpink navbar">
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-6 lg:px-8">
//             <div className="relative flex h-20 items-center justify-between">
//               <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
//                 <div className="flex flex-shrink-0 items-center">
//                   <img
//                     className="block h-10 w-12 lg:hidden"
//                     width="8"
//                     height="48"
//                     rx="8"
//                     fill="#611F69"
//                     src="/assets/logo/exam1.png"
//                     alt="Courses-Logo"
//                     style={{
//                       width: "150px",
//                       height: "100px",
//                     }}
//                   />
//                   <img
//                     className="hidden lg:block img-fluid"
//                     src="/assets/logo/exam1.png"
//                     alt="ExamTech-Logo"
//                     style={{
//                       width: "130px",
//                     }}
//                   />
//                 </div>
//                 <div className="hidden sm:ml-14 md:block mt-5">
//                   <div className="flex space-x-4">
//                     {navigation.map((item) => (
//                       <Link
//                         key={item.name}
//                         href={item.href}
//                         className={classNames(
//                           item.current ? "text-purple" : "hover:text-purple",
//                           "px-3 py-2 text-15px font-medium space-links"
//                         )}
//                         aria-current={item.current ? "page" : undefined}
//                       >
//                         {item.name}
//                       </Link>
//                     ))}
//                     <Contact />
//                   </div>
//                 </div>
//               </div>

//               {/* Sign In and Register buttons for Desktop */}
//               <div className="hidden md:flex items-center space-x-8">
//                 {/* <Registerdialog /> */}
//                 <Signdialog />
//               </div>

//               {/* Mobile menu button */}
//               <div className="block md:hidden">
//                 <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black hover:text-white hover:bg-purple focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//             </div>
//           </div>

//           {/* Mobile menu */}
//           <Disclosure.Panel className="md:hidden">
//             <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className={classNames(
//                     "block px-3 py-2 rounded-md text-base font-medium"
//                   )}
//                   aria-current={item.current ? "page" : undefined}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//               <Contact />
//               {/* Sign In and Register buttons for Mobile */}
//               <div className="px-3 py-2">
//                 {/* <Registerdialog /> */}
//                 <Signdialog />
//               </div>
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// };

// export default LandingNavbar;

"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";
import Contact from "./Contactus";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "#home", current: true },
  { name: "Features", href: "#courses-section", current: false },
  { name: "Our Team", href: "#mentors-section", current: false },
  { name: "Testimonial", href: "#testimonial-section", current: false },
  { name: "Join", href: "#join-section", current: false },
  { name: "About ExamTech", href: "./Aboutus", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const LandingNavbar = () => {
  const [showSignDialog, setShowSignDialog] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setShowSignDialog(false); // Hide sign dialog if token exists
    }
  }, []);

  return (
    <Disclosure as="nav" className="bg-lightpink navbar">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-10 w-12 lg:hidden"
                    width="8"
                    height="48"
                    rx="8"
                    fill="#611F69"
                    src="/assets/logo/exam1.png"
                    alt="Courses-Logo"
                    style={{
                      width: "150px",
                      height: "100px",
                    }}
                  />
                <div
  className="hidden lg:block"
  style={{
    fontSize: "32px", // Increased font size
    fontWeight: "bold",
    color: "#3D0158", // Purple color
    marginTop: "10px", // Added margin to move it slightly down
  }}
>
  SmartGrader
</div>


                </div>
                <div className="hidden sm:ml-14 md:block mt-5">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? "text-purple" : "hover:text-purple",
                          "px-3 py-2 text-15px font-medium space-links"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Contact />
                  </div>
                </div>
              </div>

              {/* Sign In and Register buttons for Desktop */}
              <div className="hidden md:flex items-center space-x-8">
                {showSignDialog && <Signdialog />}
              </div>

              {/* Mobile menu button */}
              <div className="block md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black hover:text-white hover:bg-purple focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
              <Contact />
              {/* Sign In and Register buttons for Mobile */}
              <div className="px-3 py-2">
                {showSignDialog && <Signdialog />}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default LandingNavbar;
