import {ApplyNow} from "components/ApplyNow";
import {ViewSchedule} from "components/ViewSchedule";
import Image from "next/image";
import Link from "next/link";

import banner from "../images/landing/banner.png";
import bg from "../images/landing/bg.jpg";
import castle from "../images/landing/castle.png";
import interlude from "../images/landing/interlude.png";

function Home() {
  return (
    <div>
      <div
        style={{backgroundImage: `url('${bg.src}')`}}
        className="absolute h-screen top-0 w-full -z-10 m-auto left-0 right-0 bg-cover bg-center bg-no-repeat"
      />
      <div className="h-[calc(100vh-40px)] sm:h-[calc(100vh-3.5rem)] flex flex-col items-center justify-evenly">
        <div className="max-h-[250px] max-w-[90vw] mx-auto select-none pointer-events-none">
          <Image className="max-h-[250px]" src={banner} alt="hw" />
        </div>
        <div className="flex items-center justify-start w-full">
          <div className="max-w-[40vw]">
            <Image src={castle} alt="castle" />
          </div>
        </div>
      </div>
      <div className="h-screen">
        <div>
          <div className="flex items-center justify-center">
            <Link href="/apply">
              <a
                aria-label="apply now"
                className="-translate-y-5 sm:-translate-y-10"
              >
                <ApplyNow className="max-w-[500px]" />
              </a>
            </Link>
          </div>
          <section className="amarante">
            <h2 className="amarante text-4xl sm:text-[10rem] leading-tight max-w-[60vw] mx-8">
              September 17th-18th
            </h2>
            <div className="max-w-[70%]">
              <Image
                src="/landing-gradient.png"
                height={78}
                width={2314}
                alt="gradient"
              />
            </div>
            <div className="p-6 sm:flex gap-4">
              <h3 className="text-2xl sm:text-7xl">Meet us there:</h3>
              <Link href="/schedule">
                <a>
                  <ViewSchedule className="sm:h-[70px] h-[40px]" />
                </a>
              </Link>
            </div>
            <div className="mx-auto flex items-center justify-center max-w-[80%] sm:max-w-full mt-8">
              <Image src={interlude} alt="interlude" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
