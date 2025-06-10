"use client";
import { motion, useAnimate } from "motion/react";
import { useState } from "react";

export default function NotifyComponents() {
  const [scope, animate] = useAnimate();
  const [email, setEmail] = useState('');
  const startAnimating = async () => {
    animate(
      ".text",
      {
        display: "none",
      },
      {
        duration: 0.1,
      }
    );
    animate(
      ".btn",
      {
        width: "0rem",
      },
      {
        duration: 0.3,
      }
    );

    await animate(
      "input",
      {
        width: "24rem",
        paddingRight: 96,
        paddingLeft: 16,
      },
      {
        duration: 0.3,
        delay: 0.6,
        ease: "easeInOut",
      }
    );

    await animate(
      ".sendBtn",
      {
        width: "5rem",
        paddingRight: 16,
        paddingLeft: 16,
      },
      {
        duration: 0.3,
        ease: "easeInOut",
      }
    );
    await animate(
      ".mailText",
      {
        display: "block",
      },
      {
        duration: 0.1,
        ease: "easeInOut",
      }
    );
  };

  const startSendAnimate = async () => {
   

    animate(
      "svg",
      {
        opacity: 1,
        display: "block",
      },
      {
        duration: 0.1,
        delay : 0.6,
        ease: "easeInOut",
      }
    );
    await animate(
      ".mailText",
      {
        display: "none",
      },
      {
        duration: 0.1,
        ease: "easeInOut",
      }
    );
    await animate(
        "input",
        {
          width: "0rem",
          paddingRight: 0,
          paddingLeft: 0,
        },
        {
          duration: 0.3,
          ease: "easeInOut",
        }
      );

    animate(
      ".sendBtn",
      {
        width: "8rem",
        position : 'static'
      },
      {
        duration: 0.3,
        delay : 0.3,
        ease: "easeInOut",
      }
    );
    
  };


  const sendMail = () => {
    if(!email.trim()) return

    startSendAnimate()
  }

  return (
    <div
      ref={scope}
      className="flex justify-center items-center font-roboto w-full"
    >
      <motion.button
        style={{
          width: "16rem",
        }}
        className="bg-foreground btn rounded-full shadow-md backdrop-blur-2xl h-16 text-sky-600 text-2xl tracking-tight cursor-pointer"
        onClick={startAnimating}
      >
        <span className="text">Notify Me</span>
      </motion.button>
      <motion.div className="relative flex justify-center items-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "0rem",
            padding: "0px",
          }}
          className="rounded-full shadow-md backdrop-blur-2xl h-16 px-4 bg-foreground text-sky-400 text-2xl focus:outline-0 placeholder:text-sky-400 placeholder:text-xl"
          placeholder="Email"
        />
        <button
          style={{
            width: "0rem",
            padding: "0px",
          }}
          className="absolute px-4 flex justify-center items-center sendBtn bg-sky-600 top-2 shadow-md backdrop-blur-2xl rounded-[25px] h-12 right-2 text-foreground z-50 cursor-pointer"
          onClick={sendMail}
        >
          <span
            style={{
              display: "none",
            }}
            className="mailText"
          >
            Send
          </span>

          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity: 0, display: "none" }}
            className={"w-10 h-10 top-3 right-2 z-50"}
            viewBox="0 0 300 150"
          >
            <path
              fill="none"
              stroke="#FF156D"
              strokeWidth="15"
              strokeLinecap="round"
              strokeDasharray="300 385"
              strokeDashoffset="0"
              d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
            >
              <animate
                attributeName="stroke-dashoffset"
                calcMode="spline"
                dur="2"
                values="685;-685"
                keySplines="0 0 1 1"
                repeatCount="indefinite"
              ></animate>
            </path>
          </motion.svg>
        </button>
      </motion.div>
    </div>
  );
}
