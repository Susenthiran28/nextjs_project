"use client";
import { useRouter } from "next/navigation";
import { IoMdArrowBack } from "react-icons/io";
import { ROUTES } from "../../../../util/routes";
import { FiClock, FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

export default function ShopDetail() {
  const navigate = useRouter();

  type ProductDetails = {
    name?: string;
    price?: string;
    status?: string;
  };

  type ShopDetails = {
    name?: string;
    address?: string;
    contactNo?: string;
    gpsLocation?: string;
    ratings?: string;
    shopTiming?: string;
    products?: ProductDetails[];
  };

  const shop: ShopDetails = {
    name: "Shop",
    address: "No.420, Innovation Dr, West Side ,Chennai",
    contactNo: "+919155111566",
    ratings: "4.2",
    gpsLocation: "",
    shopTiming: "Mon-Fri: 9:00 AM - 8:00 PM, Weekends: 10:00 AM - 6:00 PM",
    products: [
      { name: "Mobile", price: "10", status: "In stock" },
      { name: "Iphone", price: "1800", status: "Out of stock" },
    ],
  };

  const handleNavigate = () => {
    navigate.push(ROUTES.HOME);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 flex flex-col gap-6">
      <button
        onClick={handleNavigate}
        className="cursor-pointer border hover:scale-[1.015] w-max border-gray-600 rounded-lg px-3 py-2 flex items-center gap-4"
      >
        <IoMdArrowBack className="text-lg" />
        Back to search
      </button>

      {/* Shop Info */}
      <div>
        <div className="flex gap-10">
          <div className="border border-gray-500 rounded-xl p-6">
            <div className="flex flex-col gap-3 border-b pb-2">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">{shop.name}</h1>
                <h2 className="font-bold">{shop.ratings}</h2>
              </div>
              <div className="flex items-center gap-2">
                <GrLocation />
                <p className="text-gray-700">{shop.address}</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 py-3">
              <div className="flex items-center gap-2">
                <FiPhone />
                <p className="text-gray-700">{shop.contactNo}</p>
              </div>
              <div className="flex items-center gap-2">
                <FiClock />
                <p className="text-gray-700">{shop.shopTiming}</p>
              </div>
            </div>
            <button className="bg-blue-600 w-full p-1.5 rounded-2xl mt-2 inline-block cursor-pointer">
              Get Directions
            </button>
          </div>
          <div className="flex-1 border border-gray-500 rounded-xl p-6">
            <div className="flex flex-col gap-3 pb-2">
              <h1 className="text-xl font-bold">Location</h1>
              <div className="flex items-center gap-2"></div>
            </div>
          </div>
        </div>

        {/* Items List */}
        <div className="rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Available Items</h2>
          {shop?.products?.length === 0 ? (
            <p>No items available at this shop.</p>
          ) : (
            <div className="grid grid-cols-2 gap-4 rounded-xl p-4">
              {shop?.products?.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between border rounded-xl px-4 py-2"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-lg">{item.name}</span>
                    <span className="text-sm">{item.status}</span>
                  </div>
                  <span className="font-semibold">${item.price}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
