import React from "react";
import { BiWater } from "react-icons/bi"
import { IoMdCheckbox, IoIosClipboard, IoMdStar, IoMdNotifications } from "react-icons/io"

const TransactionList =()=>{
    const today = [
        {
            name:"Water Bill",
            status:"Unsuccessfully",
            price:"-$200"
        } ,
        {
            name:"Listrik",
            status:"Unsuccessfully",
            price:"-$200"
        }    
    ]

    const bgColors = (status)=>{
        switch (status) {
            case "success":
                return <IoMdCheckbox/>
            
            case "pending":
                return <IoIosClipboard/>
            
            case "warning":
                return <IoMdStar/>
        
            default:
                return <IoMdNotifications/>
        }
    }

    const icons = (status)=>{
        switch (status) {
            case "success":
                return 'bg-blue-500'
            
            case "pending":
                return 'bg-teal-400'
            
            case "warning":
                return 'bg-yellow-500'
        
            default:
                return 'bg-red-500'
        }
    }
    
    return(
        <div>
            <h3>Today</h3>
            <div>
                {today.map((val, index)=>(
                    <div className="flex flex-row item-center mt-4">
                        <div className={`h-10 w-10 bg-indigo-900 rounded-lg flex items-center justify-center mr-3 ${bgColors(val.status)}`}>
                            <BiWater/>
                        </div>
                        <div className="flex-1">
                            <div className="text-lg font-medium">{val.name}</div>
                            <div className="text-sm">{val.status}</div>
                        </div>
                        <div className="text-red-600">
                            {val.price}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default TransactionList