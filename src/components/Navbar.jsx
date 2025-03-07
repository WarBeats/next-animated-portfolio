"use client";

import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { links, icons } from "../constants";
import NavLink from './NavLink';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const topVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: 45,
            backgroundColor: "rgb(255,255,255)",
        },
    };
    const centerVariants = {
        closed: {
            opacity: 1,
        },
        opened: {
            opacity: 0,
        },
    };

    const bottomVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: -45,
            backgroundColor: "rgb(255,255,255)",
        },
    };

    const listVariants = {
        closed: {
            x: "100vw",
        },
        opened: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
    };

    const listItemVariants = {
        closed: {
            x: -10,
            opacity: 0,
        },
        opened: {
            x: 0,
            opacity: 1,
        },
    };

    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
            {/*LINKS*/}
            <div className="hidden md:flex gap-4 w-1/3">
                {links.map(link => (
                    <NavLink link={link} key={link.title} />
                ))}
            </div>
            {/*LOGO */}
            <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
                <Link
                    href="/"
                    className="text-sm bg-black rounde p-1 font-semibold flex items-center justify-center"
                >
                    <span className="text-white mr-1">
                        JL
                    </span>
                    <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
                        .dev
                    </span>
                </Link>
            </div>
            {/*SOCIAL*/}
            <div className="hidden md:flex gap-4 w-1/3">
                {icons.map(icon => (
                    <Link href="/" key={icon.image}>
                        <Image src={icon.image} alt="" width={icon.widht} height={icon.height} />
                    </Link>
                ))}
            </div>
            {/*RESPONSIVE MENU*/}
            <div className="md:hidden">
                {/*MENU BUTTON*/}
                <button
                    className="w-10 h-8 flex flex-col justify-between z-50 relative"
                    onClick={(() => setOpen(!open))}
                >
                    {/*ANIMATIONS*/}
                    <motion.div
                        variants={topVariants}
                        animate={open ? "opened" : "closed"}
                        className="w-10 h-1 bg-black rounded origin-left"
                    ></motion.div>
                    <motion.div
                        variants={centerVariants}
                        animate={open ? "opened" : "closed"}
                        className="w-10 h-1 bg-black rounded"
                    ></motion.div>
                    <motion.div
                        variants={bottomVariants}
                        animate={open ? "opened" : "closed"}
                        className="w-10 h-1 bg-black rounded origin-left"
                    ></motion.div>
                    {/*ANIMATIONS*/}
                </button>
                {/* MENU LIST */}
                {open && (
                    <motion.div
                        variants={listVariants}
                        initial="closed"
                        animate="opened"
                        className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
                    >
                        {links.map((link) => (
                            <motion.div
                                variants={listItemVariants}
                                className=""
                                key={link.title}
                            >
                                <Link href={link.url}>{link.title}</Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
            {/*LOGO */}
        </div>
    )
}

export default Navbar