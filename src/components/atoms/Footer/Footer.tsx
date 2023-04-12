import { FC } from "react";
import Link from "next/link";
import { FacebookIcon, TwitterIcon, YoutubeIcon } from "@/assets";

export const Footer: FC = () => {
  return (
    <>
      <div className="bg-[#4B4A46] text-[#FFFFFF]">
        <footer className="footer p-10 flex items-center justify-between w-full mx-auto relative max-w-7xl">
          <div className="text-[#FDFBF3]">
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy </a>
            <a className="link link-hover">Cookie </a>
            <a className="link link-hover">Delivery</a>
          </div>
        </footer>
      </div>
      <div className="bg-[#4B4A46] text-[#FFFFFF] p-4">
        <footer className="footer p-4 border-t flex items-center justify-between w-full mx-auto relative max-w-7xl">
          <p>Copyright © GU 2023</p>
          <div className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <Link href="https://twitter.com/">
                <TwitterIcon />
              </Link>
              <Link href="https://youtube.com/">
                <YoutubeIcon />
              </Link>
              <Link href="https://facebook.com/">
                <FacebookIcon />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
