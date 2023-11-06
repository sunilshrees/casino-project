const Sidebar = ({ isOpen, toggleSidebar }) => {
    const length = 12;
    const newArray = Array.from({ length }, (_, index) => index * 2);
    return (
        <div
            className={`fixed top-20 left-0  h-screen mt-[-80px] pt-[70px] md:pt-[84px] md:pb-0 ${
                isOpen ? 'w-[250px] opacity-1' : 'w-0 opacity-0'
            } transition-all duration-200 ease-in-out bg-[#1F2029]  z-20 rounded-sm cursor-default`}>
            <div className="relative py-3 px-4 flex flex-col justify-between h-full ">
                <div className="flex justify-between items-center mb-4">
                    <div className="text-[12px] lg:text-[14px]">Chat</div>
                    <button className=" p-0" onClick={toggleSidebar}>
                        <i className="bx bx-x text-white hover:text-[#2f80ed] transition-all duration-200 ease-in-out text-[16px] md:text-[18px]"></i>
                    </button>
                </div>
                <div className="pb-4 w-[220px]  h-full overflow-y-auto overflow-x-hidden chat__messages whitespace-normal  mb-4">
                    {newArray?.map((m, index) => (
                        <div
                            className="flex items-start text-[12px] py-1"
                            key={index}>
                            <i className="bx bxs-user text-[#2f80ed] pt-[3px]"></i>
                            <h2 className="text-[12px] font-bold ml-1">Sam</h2>{' '}
                            <h3 className="text-[12px] ml-1 flex justify-start break-all">
                                She says he is ger ssa Lorem ipsum dolor sit
                                amet consectetur adipisicing.
                            </h3>
                        </div>
                    ))}
                </div>
                

                <div className="flex w-full items-center relative bg-[#141419] rounded-md">
                    <input
                        type="text"
                        autoComplete="off"
                        autoCorrect="off"
                        placeholder="Type Message..."
                        className="w-[220px] py-2 pl-3 outline-none rounded-md border-none placeholder:text-[12px] text-white bg-[#141419]"
                    />
                    <button className=" absolute right-2 top-[8px]">
                        <i className="bx bxs-send text-white hover:text-[#2f80ed] transition-all duration-200 ease-in-out"></i>
                    </button>
                </div>
                
            </div>
        </div>
    );
};

export default Sidebar;
