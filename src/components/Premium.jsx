import axios from 'axios'
import React from 'react'
import { BASE_URL } from '../utils/constant'

const Premium = () => {

     const handleBuyClick=async(type)=>{
         const order=await axios.post(`${BASE_URL}/payment/create`,{
            memberShipType:type, 
         },{withCredentials:true});
         // razorpay dailog box..
         const {keyId,amount,currency,notes,orderId,}=order.data;
         
      // Open Razorpay Checkout
      const options = {
        key: keyId, // Replace with your Razorpay key_id
        amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency,
        name: 'Dev Tinder',
        order_id:orderId, // This is the order_id created in the backend
        prefill: {
          name: notes.firstName+ " "+notes.lastName  ,
          email: notes.emailId,
          contact: '9999999999'
        },
        theme: {
          color: '#F37254'
        },
      };
          const rzp = new window.Razorpay(options);
      rzp.open();

     }
  return (
     <section className="w-full bg-[#0f0f0f] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10 text-gray-100">
          Choose Your Membership
        </h2>

        {/* Responsive Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Silver Card */}
          <div className="relative w-full rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-2xl font-semibold text-gray-200">Silver</h3>
            
              <div className="mt-6">
                <span className="text-4xl font-bold text-gray-100">₹199</span>
                <span className="text-gray-400 ml-2 text-lg">/ month</span>
              </div>

              <ul className="mt-6 space-y-3 text-gray-300">
                <li>• chat With other Peopele</li>
                <li>• 100 connection per / day</li>
                <li>• Blue Tick</li>
              </ul>
            </div>

            <button
              className="mt-8 w-full bg-gray-700 hover:bg-gray-600 transition-all py-3 rounded-xl text-white font-medium"
              onClick={() =>handleBuyClick("silver")}
            >
              Buy Silver
            </button>
          </div>

          {/* Gold Card */}
          <div className="relative w-full rounded-2xl bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-500 p-[2px] shadow-2xl">
            <div className="bg-[#1a1a1a] rounded-2xl h-full p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-yellow-400">
                  Gold
                </h3>
                <p className="text-gray-400 mt-2">
                  Unlock full access with premium benefits.
                </p>

                <div className="mt-6">
                  <span className="text-4xl font-bold text-yellow-400">
                    ₹499
                  </span>
                  <span className="text-gray-400 ml-2 text-lg">/ month</span>
                </div>

                <ul className="mt-6 space-y-3 text-gray-300">
                  <li>•  chat With other Peopele </li>
                  <li>• Unlimited connections</li>
                  <li>• Priority support</li>
                  <li>• Exclusive discounts & badges</li>
                </ul>
              </div>

              <button
                className="mt-8 w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold transition-all py-3 rounded-xl"
                onClick={() => handleBuyClick("gold")}
              >
                Buy Gold
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Premium