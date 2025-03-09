import React from "react";
import { XIcon, InstagramIcon, TwitterIcon, ArrowRightIcon } from "lucide-react";
interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}
export function Navigation({
  isOpen,
  onClose
}: NavigationProps) {
  const menuItems = [{
    label: "Archive",
    description: "Browse our collection of exceptional cars",
    href: "/archive"
  }, {
    label: "Merch",
    description: "Curated automotive lifestyle goods",
    href: "/merch"
  }, {
    label: "About",
    description: "Our mission and story",
    href: "/about"
  }, {
    label: "Contact",
    description: "Get in touch with us",
    href: "/contact"
  }];
  const socialLinks = [{
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://instagram.com"
  }, {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com"
  }];
  return <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" onClick={onClose} />}
      {/* Navigation Panel */}
      <div className={`fixed top-0 left-0 h-full w-[380px] bg-black/95 backdrop-blur-md z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex flex-col h-full p-8">
          {/* Close button */}
          <button onClick={onClose} className="text-white hover:opacity-75 transition-opacity self-end" aria-label="Close menu">
            <XIcon size={24} />
          </button>
          {/* Navigation items */}
          <nav className="mt-12">
            <ul className="space-y-8">
              {menuItems.map((item, index) => <li key={item.label} className="transform transition-transform duration-200 hover:-translate-x-2" style={{
              transitionDelay: `${(index + 1) * 50}ms`
            }}>
                  <a href={item.href} className="block group">
                    <span className="text-white text-2xl font-medium group-hover:text-red-500 transition-colors">
                      {item.label}
                    </span>
                    <p className="text-white/60 mt-1 text-sm">
                      {item.description}
                    </p>
                  </a>
                </li>)}
            </ul>
          </nav>
          {/* Newsletter Signup */}
          <div className="mt-12 border-t border-white/10 pt-8">
            <h3 className="text-white text-sm font-medium mb-4">
              JOIN OUR NEWSLETTER
            </h3>
            <div className="flex gap-2">
              <input type="email" placeholder="your@email.com" className="bg-white/10 text-white px-4 py-2 rounded-md flex-1 text-sm focus:outline-none focus:ring-2 focus:ring-red-500" />
              <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md transition-colors">
                <ArrowRightIcon size={20} />
              </button>
            </div>
          </div>
          {/* Social links */}
          <div className="mt-auto pt-8 border-t border-white/10">
            <h3 className="text-white text-sm font-medium mb-4">FOLLOW US</h3>
            <div className="flex gap-4">
              {socialLinks.map(link => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition-colors p-2 hover:bg-white/5 rounded-md" aria-label={link.label}>
                  <link.icon size={24} />
                </a>)}
            </div>
          </div>
        </div>
      </div>
    </>;
}