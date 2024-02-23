import {OrderButton} from "../MainImports"


export const HeroContent = () => {
    return (
        <div className="flex 2xl:block pr-40">
            <div className="w-[715px] h-[256px] pl-16">
                <p className="w-[715px] absolute font-extrabold text-transparent text-[80.4px] leading-[78.4px]">
                    <span className="text-[#408a1c]">Plant a tree today</span>
                    <span className="text-[#408a1c] text-[67px]">
                        {" "}
                    </span>
                    <span className="text-[#081800] text-[60.3px]">it will help us breathe tomorrow.</span>
                </p>
            </div>
            <div className="mt-10 ml-60 flex flex-col z-10">
                <div className="h-[87px]">
                    <p className="w-[468px] absolute font-bold text-[#686a67] leading-7">
                        We know how important trees are to our existence and for the well-being of the planet at large, which is why we have put together a number
                    </p>
                </div>
                <div className="mt-10">
                    <OrderButton />
                    <div className="flex pt-10">
                        {/* Сделать лучше и через переменные */}
                        <div className="mr-20">
                            <p className="font-bold text-[#408a1c] text-[43px] leading-[60.2px]">
                                355+
                            </p>
                            <p className="font-semibold text-[#686a67] text-[18px] leading-[28.8px]">
                                Awesome collection
                            </p>
                        </div>
                        <div className="">
                            <p className="font-bold text-[#408a1c] text-[43px] leading-[60.2px]">
                                100+
                            </p>
                            <p className="font-semibold text-[#686a67] text-[18px] leading-[28.8px]">
                                Sell everybody
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroContent