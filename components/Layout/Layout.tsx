import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (innerWidth <= 640) {
            setIsMobile(true);
            setIsOpen(false)
        } else {
            setIsMobile(false);
            setIsOpen(true)

        }
        if (typeof window != undefined) {
            addEventListener('resize', handleResize);
        }
        return () => {
            removeEventListener('resize', handleResize);
        };
    }, []);

    const handleResize = () => {
        if (innerWidth <= 640) {
            setIsMobile(true);
            setIsOpen(false)
        } else {
            setIsMobile(false);
            setIsOpen(true)

        }
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const sidebarProps = {
        setIsOpen,
        isOpen,
        toggleSidebar,
    };
    return (
        <div className="relative bg-[#1A1C24]">
            <Navbar />
            <div className="flex relative">
                <Sidebar {...sidebarProps} />
                <div className={`container mx-auto `}>
                    <main
                        className={` pt-24  ${
                            isOpen && !isMobile ? 'ml-[250px]' : 'ml-0'
                        }`}>
                        {children}
                    </main>
                </div>
                {
                    <div
                        className={`fixed bottom-7  z-50 ${
                            !isOpen ? 'left-0' : '-left-44 '
                        }  transition-all duration-300 ease-in-out`}>
                        <button
                            className="bg-[#1F2029] text-white py-2 px-3 rounded-r-md shadow-lg mt-4 "
                            onClick={toggleSidebar}>
                            <i className="bx bxs-conversation text-white hover:text-[#E9B10E]"></i>
                        </button>
                    </div>
                }
            </div>
            
        </div>
    );
};

export default Layout;
