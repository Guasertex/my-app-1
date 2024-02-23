import {Image, heroImg, HeroContent} from "../MainImports"

export const Hero = () => {
    return (
        <div className="w-full h-screen -mt-[120px]">
            <div className="">
                <Image className="hidden 2xl:block absolute bg-cover w-[739px] h-[840px]" placeholder = 'empty' src={heroImg} width={739} height={840} alt="Hero Image" />
            </div>
            <div className="z-10 w-full">
                <div className="flex justify-end mx-auto">
                    <div className="pr-24 pt-[280px]">
                        <HeroContent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero