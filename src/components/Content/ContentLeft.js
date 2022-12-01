import React from "react"
import { BiCreditCard, BiSearch } from "react-icons/bi"

const ContentLeft = ()=>{
    return(
        <section className="px-14 flex-1 pt-14">
            <div className="border border-gray-300 rounded-lg w-full flex items-center py-3 px-3">
                <BiSearch className="mr-2"/>
                <input type={"text"} className="flex-1" placeholder="Search"/>
            </div>

            <h3 className="text-lg text-black my-8">Welcome back AR Shakir</h3>

            <div className="rounded bg-green-500 bg-opacity-10 p-5 w-32">
                <BiCreditCard/>
                <span className="text-sm">
                    Transfer via
                    <br/>
                    card number
                </span>
            </div>
        </section>
    )
}

export default ContentLeft