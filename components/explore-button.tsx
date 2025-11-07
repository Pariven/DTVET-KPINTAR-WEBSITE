"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function ExploreButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
      className="flex justify-center mt-12"
    >
      <Link href="/certifications" scroll={true}>
        <button className="explore-button">
          <style jsx>{`
            .explore-button {
              position: relative;
              background-color: transparent;
              color: #e8e8e8;
              font-size: 17px;
              font-weight: 600;
              border-radius: 10px;
              width: 250px;
              height: 60px;
              border: none;
              text-transform: uppercase;
              cursor: pointer;
              overflow: hidden;
              box-shadow: 0 10px 20px rgba(51, 51, 51, 0.2);
              transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
              font-family: var(--font-barlow), sans-serif;
            }

            .explore-button::before {
              content: "Explore Programs";
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
              height: 100%;
              pointer-events: none;
              background: linear-gradient(135deg, #F4BB44, #E5A63D);
              transform: translate(0%, 90%);
              z-index: 99;
              position: relative;
              transform-origin: bottom;
              transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
            }

            .explore-button::after {
              content: "Get Certified";
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: #333;
              width: 100%;
              height: 100%;
              pointer-events: none;
              transform-origin: top;
              transform: translate(0%, -100%);
              transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
            }

            .explore-button:hover::before {
              transform: translate(0%, 0%);
            }

            .explore-button:hover::after {
              transform: translate(0%, -200%);
            }

            .explore-button:focus {
              outline: none;
            }

            .explore-button:active {
              scale: 0.95;
            }
          `}</style>
        </button>
      </Link>
    </motion.div>
  )
}
