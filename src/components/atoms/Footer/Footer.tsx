import { FC } from "react";
import Link from "next/link";
import { FacebookIcon, TwitterIcon, YoutubeIcon } from "@/assets";

export const Footer: FC = () => {
  return (
    <>
      <div className="bg-[#4B4A46]">
        <footer className="footer relative mx-auto flex w-full max-w-7xl items-center justify-between p-10">
          <div className="text-[#FDFBF3]">
            <span className="footer-title">Services</span>
            <a className="link-hover link">Branding</a>
            <a className="link-hover link">Design</a>
            <a className="link-hover link">Marketing</a>
            <a className="link-hover link">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link-hover link">About us</a>
            <a className="link-hover link">Contact</a>
            <a className="link-hover link">Jobs</a>
            <a className="link-hover link">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link-hover link">Terms of use</a>
            <a className="link-hover link">Privacy </a>
            <a className="link-hover link">Cookie </a>
            <a className="link-hover link">Delivery</a>
          </div>
        </footer>
      </div>
      <div className="bg-[#4B4A46] p-4 text-[#FFFFFF]">
        <footer className="footer relative mx-auto flex w-full max-w-7xl items-center justify-between border-t p-4">
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
