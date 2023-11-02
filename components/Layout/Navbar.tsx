import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import React, { useState } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [openGames, setOpenGames] = useState(false);

    const toggleDrawer =
        (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setOpen(open);
        };

    return (
        <nav className="fixed top-0 bg-[#24252F] p-4 px-6 md:px-12  z_index_navbar w-full">
            <div className="flex justify-between items-center ">
                <button className="btn-background px-[10px] py-[6px] lg:px-4 lg:py-2 text-[12px] md:text-[14px] lg:text-[16px] rounded-md mt-[4px]">
                    Deposit
                </button>
                <div className=" justify-between items-stretch min-w-[500px] md:text-[14px] lg:text-[16px] hidden  md:flex relative">
                    <div
                        className={`min-w-[475px]  h-[135px] bg-[#252C31] absolute top-20 rounded-md p-4 ${
                            openGames ? 'block ' : 'hidden '
                        } `}>
                        <div className="w-full h-full   flex items-center  space-x-3">
                            <img
                                src="/images/crash.png"
                                alt=""
                                onClick={() => {
                                    setOpenGames(false);
                                }}
                                className="w-[100px] h-[100px] transition-all duration-200 ease-in-out hover:-translate-y-1 cursor-pointer"
                            />
                            <img
                                src="/images/dice.png"
                                alt=""
                                onClick={() => {
                                    setOpenGames(false);
                                }}
                                className="w-[110px] h-[100px] transition-all duration-200 ease-in-out hover:-translate-y-1 cursor-pointer"
                            />
                            <img
                                src="/images/roulette.png"
                                alt=""
                                onClick={() => {
                                    setOpenGames(false);
                                }}
                                className="w-[105px]  h-[107px] transition-all duration-200 ease-in-out hover:-translate-y-1 cursor-pointer"
                            />
                            <img
                                src="/images/crash.png"
                                alt=""
                                onClick={() => {
                                    setOpenGames(false);
                                }}
                                className="w-[100px] h-[100px] transition-all duration-200 ease-in-out hover:-translate-y-1 cursor-pointer"
                            />
                        </div>
                    </div>
                    <div className="cursor-pointer hover:text-[#E9B10E]  transition-colors duration-400 ease-in-out  flex items-center">
                        Giveaway
                    </div>
                    <div
                        className="cursor-pointer hover:text-[#E9B10E]  transition-colors duration-400 ease-in-out  flex items-center "
                        onClick={() => {
                            setOpenGames((prev) => !prev);
                        }}>
                        <span className="mr-[8px]">Games</span>
                        <i
                            className={`bx bxs-${
                                !openGames ? 'down' : 'up'
                            }-arrow md:text-[12px] lg:text-[14px]`}></i>
                    </div>
                    <div className="cursor-pointer">
                        <img
                            src="/images/logo.png"
                            alt=""
                            className="w-12 h-12 lg:w-14 lg:h-14"
                        />
                    </div>
                    <div className="cursor-pointer hover:text-[#E9B10E]  transition-colors duration-400 ease-in-out  flex items-center">
                        Daily
                    </div>
                    <div className="cursor-pointer hover:text-[#E9B10E]  transition-colors duration-400 ease-in-out  flex items-center">
                        Affiliates
                    </div>
                </div>
                <div className="cursor-pointer block md:hidden">
                    <img src="/images/logo.png" alt="" className="w-10 h-10" />
                </div>
                <div className="hidden md:flex items-center space-x-4 mt-[4px]">
                    <div className="w-20 h-10 rounded-md bg-black  border border-gray-600 shadow-lg flex justify-center items-center text-[#E9B10E]">
                        <i className="bx bxs-dollar-circle -mt-[1px] mr-[3px] text-[18px]"></i>
                        <span className="text-white hover:text-[#E9B10E] cursor-pointer">
                            400
                        </span>
                    </div>
                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[#24252F]  border-2 border-[#E9B10E] cursor-pointer hidden md:flex justify-center items-center text-[9px] lg:text-[12px]">
                        PFP
                    </div>
                </div>
                <div className="flex md:hidden justify-center w-10 h-10 items-center ">
                    <i
                        className={`bx ${
                            open ? 'bx-x' : 'bx-menu'
                        } text-[30px] text-white hover:text-[#E9B10E] cursor-pointer`}
                        onClick={toggleDrawer(!open)}></i>
                </div>
            </div>
            <Drawer anchor={'right'} open={open} onClose={toggleDrawer(false)}>
                <div className="pt-16 bg-[#1F2029] text-white h-full relative overflow-y-scroll">
                    
                    <Box
                        sx={{
                            width: 250,
                        }}
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}>
                        <div className="bg-[#24252F] mt-3 mx-3 py-3 rounded-md">
                            <div className="flex justify-between items-center px-4 mb-4">
                                <div className="cursor-pointer flex items-center">
                                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[#24252F]  border-2 border-[#E9B10E] cursor-pointer  flex justify-center items-center text-[9px] lg:text-[12px]">
                                        PFP
                                    </div>
                                    <span className="text-[#DCD9CD] ml-2">
                                        njw
                                    </span>
                                </div>
                                <div></div>
                            </div>
                            <Divider />
                            <div className="my-4 px-4">
                                <div className="cursor-pointer mb-1 text-[10px] text-[#DCD9CD]">
                                    Your Balance
                                </div>
                                <div className="">
                                    <i className="bx bxs-dollar-circle -mt-[1px] mr-[3px] text-[12px] text-[#E9B10E]"></i>
                                    <span className="text-[#E9B10E] cursor-pointer">
                                        400
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#24252F] mt-3 mx-3 pt-3 pb-1 rounded-md">
                            <div className="flex justify-between items-center px-4 mb-4">
                                <div className="cursor-pointer flex items-center">
                                    <span className="text-[#DCD9CD] ml-2 text-[12px]">
                                        Games
                                    </span>
                                </div>
                            </div>
                            <Divider />
                            <div className="my-2 px-4">
                                <div className="w-full h-full   grid grid-cols-2 place-items-center  gap-2">
                                    <img
                                        src="/images/crash.png"
                                        alt=""
                                        className="w-[100px] h-[80px] transition-all duration-200 ease-in-out hover:-translate-y-1 cursor-pointer"
                                    />
                                    <img
                                        src="/images/dice.png"
                                        alt=""
                                        className="w-[110px] h-[80px] transition-all duration-200 ease-in-out hover:-translate-y-1 cursor-pointer"
                                    />
                                    <img
                                        src="/images/roulette.png"
                                        alt=""
                                        className="w-[105px]  h-[87px] transition-all duration-200 ease-in-out hover:-translate-y-1 cursor-pointer"
                                    />
                                    <img
                                        src="/images/crash.png"
                                        alt=""
                                        className="w-[100px] h-[80px] transition-all duration-200 ease-in-out hover:-translate-y-1 cursor-pointer"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#24252F] mt-3 mx-3 py-3 rounded-md">
                            <div className="flex  items-center px-4 cursor-pointer text-[#DCD9CD]  hover:text-[#E9B10E]">
                                <div className=" flex items-center ">
                                    <span className=" ml-2 text-[12px]">
                                        Giveaway
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-[#24252F] mt-3 mx-3 py-3 rounded-md">
                            <div className="flex  items-center px-4 cursor-pointer text-[#DCD9CD]  hover:text-[#E9B10E]">
                                <div className=" flex items-center ">
                                    <span className=" ml-2 text-[12px]">
                                        Daily
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#24252F] mt-3 mx-3 py-3 rounded-md">
                            <div className="flex  items-center px-4 cursor-pointer text-[#DCD9CD]  hover:text-[#E9B10E]">
                                <div className=" flex items-center ">
                                    <span className=" ml-2 text-[12px]">
                                        Affiliates
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full   text-[#DCD9CD] hover:text-[#E9B10E] px-8  py-6 cursor-pointer">
                        <Divider />

                        <div className="mt-3 flex items-center">
                            <i className="bx bx-exit -mt-[1px] mr-[4px] text-[14px] "></i>
                            <span className=" cursor-pointer text-[12px]">
                                Logout
                            </span>
                        </div>
                    </div>
                    </Box>
                </div>
            </Drawer>
        </nav>
    );
};

export default Navbar;
