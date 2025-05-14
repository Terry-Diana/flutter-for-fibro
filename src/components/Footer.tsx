
import React from "react";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Mail, Linkedin } from "lucide-react";
import ButterflyIcon from "./ButterflyIcon";

const Footer = () => {
  return (
    <footer className="bg-secondary pt-12 pb-6">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <ButterflyIcon className="h-8 w-8 text-primary mr-2" />
              <h3 className="text-xl font-bold text-primary">
                Fibro Awareness
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Raising awareness, providing support, and advocating for those affected by fibromyalgia.
            </p>
            <div className="flex space-x-3">
              <SocialButton icon={<Facebook size={18} />} label="Facebook" />
              <SocialButton icon={<Instagram size={18} />} label="Instagram" />
              <SocialButton icon={<Linkedin size={18} />} label="LinkedIn" />
              <SocialButton icon={<Mail size={18} />} label="Email" />
            </div>
          </div>

          <div>
            <h4 className="text-primary font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="#about">About Fibromyalgia</FooterLink>
              <FooterLink href="#stories">Personal Stories</FooterLink>
              <FooterLink href="#resources">Resources</FooterLink>
              <FooterLink href="#blog">Blog</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <FooterLink href="#">Medical Resources</FooterLink>
              <FooterLink href="#">Support Groups</FooterLink>
              <FooterLink href="#">Research Updates</FooterLink>
              <FooterLink href="#">Educational Materials</FooterLink>
              <FooterLink href="#">Help Center</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-semibold mb-4">Subscribe</h4>
            <p className="text-gray-600 mb-4">
              Stay updated with the latest news, research, and events.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Fibromyalgia Awareness Initiative. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-600">
              <a href="#" className="hover:text-primary">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary">
                Accessibility
              </a>
              <a href="#" className="hover:text-primary">
                Admin Login
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-center text-xs text-gray-500">
        <p>
          This website is designed to provide general information and raise awareness about fibromyalgia. It is not intended to replace professional medical advice.
        </p>
      </div>
    </footer>
  );
};

// Social button component
const SocialButton = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <a
    href="#"
    className="bg-white h-10 w-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-200 shadow-sm"
    aria-label={label}
  >
    {icon}
  </a>
);

// Footer link component
const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a
      href={href}
      className="text-gray-600 hover:text-primary transition-colors"
    >
      {children}
    </a>
  </li>
);

export default Footer;
