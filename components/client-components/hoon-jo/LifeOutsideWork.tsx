import Instagram from '@/components/server-components/hoon-jo/Instagram';
import _ from 'lodash';
import React from 'react';

const LifeOutsideWork = async () => {
  return (
    <section className="mt-[110px] sm:mt-[250px] w-full">
      <div className="h-full w-full">
        <h2 className="mb-[50px] xl:mb-[100px] text-4xl sm:text-6xl md:text-8xl bg-black text-white px-[50px] sm:px-[100px] xl:px-[300px] pt-[10px] pb-[15px] md:pb-[30px] whitespace-nowrap">
          Life Outside Work
        </h2>

        <div className="w-full h-full z-0 relative">
          <Instagram />
          <div className="px-[20px] lg:px-[100px] 2xl:px-[300px] pb-[200px] sm:pb-[300px] md:pb-[350px] lg:pb-[400px]">
            <div className="w-[90%] sm:w-[80%] lg:w-[55%]">
              <p className="mt-[30px] text-lg md:text-2xl">
                When I'm not doing something creative, I like to watch
                scientific videos or travel to Summoner's Rift.
              </p>
              <p className="text-lg md:text-2xl w-[80%] mt-[30px]">
                I usually hang out with my friends, but I also like to go on
                long solo trips for a month or two and learn a lot. Can you see
                how much I value experience and learning?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeOutsideWork;
