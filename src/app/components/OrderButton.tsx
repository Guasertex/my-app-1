"use client"
import {usePathname} from "./MainImports"

export const OrderButton = () => {
    const pathname = usePathname();
    return (
        <div className={pathname === "/plantcompany" ? "block" : "hidden"}>
            <button className="inline-flex items-center justify-center px-[20px] py-[15px] relative bg-[#081800] border-[#6ed43b] shadow-[10px_10px_0px_#6ed43b;]">
                <div className="font-bold text-white text-[18px]">
                    Order Now
                </div>
            </button>
        </div>
    )
}
export default OrderButton

