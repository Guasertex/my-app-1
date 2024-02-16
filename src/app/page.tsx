import { Image, OrderButton, firstBush, secondBush, grassInPot1, grassInPot2, greenAgree, cactusInTheGround, plantsInAPot, playgoundVid, plantFirst, plantSecond, plantThird, Hero } from "./components/MainImports";

export const Home = () => {
  return (
    <section className="flex min-h-screen flex-col items-center pb-[130px]">
      <Hero />
      <div className="flex">
        <div className="flex flex-col">
          <div className="max-w-[517px] h-[138px]">
            <h2 className="w-[517px] font-extrabold text-[#081800] text-5xl leading-[79.8px]">Plant are the lungs of the world</h2>
          </div>
          <div className="mt-14">
            <Image className="relative bg-cover w-[379px] h-[584px]" src={firstBush} width={379} height={584} alt="First Bush Image" />
          </div>
        </div>
        <div className="flex flex-col ml-14">
          <div className="">
            <Image className="relative bg-cover w-[436px] h-[383px]" src={secondBush} width={436} height={383} alt="Second Bush Image" />
          </div>
          <div className="max-w-[436px] h-[54px] font-bold text-[#686a67] leading-7">
            <p>
              That were not animals, and included algae and
              <br />
              however, all current definitions
            </p>
          </div>
          <div className="mt-5">
            <OrderButton />
          </div>
        </div>
      </div>
      <div className="flex pt-32">
        <div className="flex flex-col">
          <div className="max-w-[492px] max-h-[252px]">
            <Image className="relative bg-cover w-[492px] h-[252px]" src={grassInPot1} width={492} height={252} alt="First gras in pot Image" />
          </div>
          <div className="mt-[60px]">
            <div className="flex flex-col">
              <ul className="ps-5">
                <li className="flex">
                  <Image className="bg-cover w-[40px] h-[40px]" src={greenAgree} width={40} height={40} alt="white checkbox on green background" />
                  <p className="w-[398px] h-[57px] font-bold leading-7 text-[#686a67] ml-7">
                    Ost plants are multicellular organisms. Green plants obtain most of their energy
                  </p>
                </li>
                <li className="flex mt-[10px]">
                  <Image className="bg-cover w-[40px] h-[40px]" src={greenAgree} width={40} height={40} alt="white checkbox on green background" />
                  <p className="w-[398px] h-[57px] font-bold leading-7 text-[#686a67] ml-7">
                    Sunlight takes about 8.3 minutes to reach Earth from the surface of the Sun.
                  </p>
                </li>
                <li className="flex mt-[10px]">
                  <Image className="bg-cover w-[40px] h-[40px]" src={greenAgree} width={40} height={40} alt="white checkbox on green background" />
                  <p className="w-[398px] h-[57px] font-bold leading-7 text-[#686a67] ml-7">
                    Researchers can measure the intensity of sunlight using a sunshine recorder
                  </p>
                </li>
                <li className="flex mt-[10px]">
                  <Image className="bg-cover w-[40px] h-[40px]" src={greenAgree} width={40} height={40} alt="white checkbox on green background" />
                  <p className="w-[398px] h-[57px] font-bold leading-7 text-[#686a67] ml-7">
                    That were not animals, and included algae and fungi however.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-14">
          <div className="w-[528px] h-[140px]">
            <h3 className="font-extrabold text-6xl">A great <br /> initiative indeed</h3>
          </div>
          <div className="">
            <Image className="relative bg-cover w-[528px] h-[437px]" src={grassInPot2} width={528} height={437} alt="First gras in pot Image" />
          </div>
        </div>
      </div>
      {/* Доделать проигрывательные видео */}
      <div className="flex pt-32">
        <div className="flex flex-col pr-[100px]">
          <div className="w-[351px]">
            <h4 className="font-extrabold text-6xl leading-[79.8px]">See our latest video</h4>
          </div>
          <div className="pt-[60px]">
            <Image className="bg-cover w-[449px] h-[442px]" src={cactusInTheGround} width={449} height={442} alt="Cactus in the ground image" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="pb-12">
            <Image className="bg-cover w-[528px] h-[543px]" src={plantsInAPot} width={528} height={543} alt="Plants in a pot image" />
          </div>
          <div className="w-[528px] font-bold text-[18px] text-[#686a67] leading-7">
            <p>Plants are predominantly photosynthetic eukaryotes of the kingdom Planet. Historically, the plant kingdom massed all living things</p>
          </div>
        </div>
      </div>
      {/* Доделать сверху видео*/}
      <div className="flex pt-32">
        <div className="flex flex-col pr-[80px]">
          <div className="w-[528px] h-[215px] bg-[#f6ffeb]">
            <div className="flex justify-around mt-[29px]">
              <div className="">
                <Image className="relative bg-cover w-[167px] h-[164px]" src={plantFirst} width={167} height={164} alt="First beautiful Plant" />
              </div>
              <div className="">
                <div className="w-[232px] font-semibold text-[32px] leading-[51.2px]">
                  <p>Fringilla Augue</p>
                </div>
                <div className="w-[232px] font-normal text-[14px] leading-[22.4px]">
                  <p>that weer not animals, and included algae abd however</p>
                </div>
                <div className="font-bold text-[#408a1c] text-[24px] leading-10">
                  $35.00
                </div>
              </div>
            </div>
          </div>
          <div className="w-[528px] h-[215px] bg-[#f6ffeb] mt-6">
            <div className="flex justify-around mt-[24px]">
              <div className="">
                <Image className="relative bg-cover w-[175px] h-[173px]" src={plantSecond} width={175} height={173} alt="Second beautiful Plant" />
              </div>
              <div className="">
                <div className="w-[232px] font-semibold text-[32px] leading-[51.2px]">
                  <p>Faded Short</p>
                </div>
                <div className="w-[232px] font-normal text-[14px] leading-[22.4px]">
                  <p>that were not animals, and included algae and however</p>
                </div>
                <div className="font-bold text-[#408a1c] text-[24px] leading-10">
                  $97.00
                </div>
              </div>
            </div>
          </div>
          <div className="text-[#686a67] w-[456px] font-bold text-[18px] leading-7 pt-10">
            <p>that were not animals, and included algae and fungi however, all current definitions </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-[449px]">
            <h5 className="font-extrabold text-[57px]  leading-[79.8px]">Get our greatest plants</h5>
          </div>
          <div className="mt-[60px] w-[528px] h-[215px] bg-[#f6ffeb] mb-10">
            <div className="flex justify-around mt-[24px]">
              <div className="">
                <Image className="relative bg-cover w-[183px] h-[183px]" src={plantThird} width={183} height={183} alt="Third beautiful Plant" />
              </div>
              <div className="">
                <div className="w-[232px] font-semibold text-[32px] leading-[51.2px]">
                  <p>Eled Doming</p>
                </div>
                <div className="w-[232px] font-normal text-[14px] leading-[22.4px]">
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
                <div className="font-bold text-[#408a1c] text-[24px] leading-10">
                  $50.00
                </div>
              </div>
            </div>
          </div>
          <OrderButton />
        </div>
      </div>
    </section>
  );
}

export default Home