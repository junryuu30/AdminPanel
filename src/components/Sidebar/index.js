import React from "react";
import{ BiHome, BiBookContent, BiIdCard, BiMobile, BiTable } from "react-icons/bi";
import{ AiOutlineSetting } from "react-icons/ai";


const SideBar=()=>{
    const menu = [
        {name: "Home", icon: <BiHome/>},
        {name: "Account", icon: <BiBookContent/> },
        {name: "Cards", icon: <BiIdCard/>},
        {name: "Contact", icon: <BiMobile/>},
        {name: "Loan Calculator", icon: <BiTable/>},
        {name: "Setting", icon:<AiOutlineSetting/>},
    ]

    const schedulePayments = ["Monthly Rent", "Food Payment", "Utility Bills"]


    return(
        <div className="h-screen border-r-4 border-gray-500 w-64 px-9">
            <div className="flex flex-row items-center">
                <h3 className="my-8">ini buat image logo</h3>
                <div>Nama Perusahan</div>
            </div>
            <div>
                <ul>
                    {
                        menu.map((val, index)=>(
                            <li key={index}
                            className="mb-7 flex flex-row items-center cursor-pointer">
                                <div className="mr-5">{val.icon}</div>
                                <div>{val.name}</div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <div className="mb-7 text-indigo-700">Scheduled Payments</div>
                    <div className="space-y-7">
                        <ul>
                        {
                            schedulePayments.map((val, index)=>(
                                <div className="flex items-center">
                                    <div className="h-4 w-4 border border-gray-300 mr-4 rounded-full">
                                    </div>
                                    <div>{val}</div>
                                </div>
                            ))
                        }
                        </ul>
                    </div>
                </div>

        </div>
    )
}

export default SideBar