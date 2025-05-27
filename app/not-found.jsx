"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-primary text-white">
      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md p-6"
      >
        <motion.h1
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[6rem] font-extrabold text-accent mb-3"
        >
          404
        </motion.h1>

        <p className="text-2xl font-semibold mb-2">Page Not Found</p>
        <p className="text-gray-400 mb-6">
          Oops... The page you are looking for doesn’t exist.
        </p>

        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-xl bg-accent hover:bg-accent/90 transition-colors duration-300 text-primary font-medium"
        >
          Go back home
        </Link>
      </motion.div>
    </main>
  );
};

export default NotFound;
