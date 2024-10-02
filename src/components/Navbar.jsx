import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from "./images/LOGO.png"


const navigation = [
  { name: 'Todays Special Offers', href: '#', current: false },
  { name: 'Why Mr.Cook', href: '#', current: false },
  { name: 'Our Menu', href: '#', current: false },
  { name: 'Our Popular Food', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-4">
        <div className="relative flex h-16 items-center justify-between">

          {/* LOGO: Keep the logo on the left side */}
          <div className='flex flex-1 lg:items-start lg:justify-start'>
            <a href='#!'>
              <img
                alt="Your Company"
                src={logo}
                className="h-16 w-16"
              />
            </a>
          </div>

          {/* MOBILE MENU BUTTON: Move it to the right */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-start rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>

          {/* Center Navigation Links */}
          <div className="flex flex-1 justify-center sm:items-end sm:justify-center whitespace-nowrap"> {/* Added whitespace-nowrap */}
            <div className="hidden sm:block">
              <div className="flex space-x-4"> {/* Reduced space-x */}
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:text-white',
                      'rounded-md px-2 py-2 text-sm font-medium',  // Reduced padding
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Download App Button with space */}
          <div
          className="hidden sm:flex items-center ml-20 mr-8"> {/* Added ml-6 for space */}
            <button
          
            style={{backgroundColor: "#F65F5F"}} 
            className="rounded-full py-2 px-4">Download App</button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}


