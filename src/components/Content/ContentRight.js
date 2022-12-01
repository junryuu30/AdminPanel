import { BiNotification, BiUser } from "react-icons/bi";
import TransactionList from "./TransactionList";

const ContentRight = () => {
  return (
    <section className="w-96 bg-gray-300 rounded rounded-tl-70px overflow-hidden px-14">
      <div className="pt-12 flex justify-end space-x-9 items-center">
        <BiNotification size={25} />
        <BiUser size={25} />
        <img
          src="https://i.pinimg.com/564x/11/96/16/11961692edf30e391038ae403ba70803.jpg"
          alt="user"
          className="h-9 w-9 object-cover rounded-full"
        />
      </div>
      <div className="card mt-9">
        <div className="relative p-5 text-white">
          <div>John Saith</div>
          <div>Amazon Platinum</div>
          <div>12344</div>
          <div className="flex justify-between relative">
            <span>$ 2.000</span>
            <h2 className="h-4">img</h2>
          </div>
        </div>
      </div>
      <button className="py-3 rounded border-indigo-700 border-dashed w-full mt-10">
        Add new card
      </button>
      <TransactionList/>
    
    </section>
  );
};

export default ContentRight;
