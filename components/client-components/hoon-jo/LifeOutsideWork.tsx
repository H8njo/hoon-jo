import Instagram from '@/components/server-components/hoon-jo/Instagram';
import _ from 'lodash';
import React from 'react';

type Props = {
  instagram: Promise<any>;
};

const LifeOutsideWork = async ({ instagram }: Props) => {
  return (
    <section className="mt-[250px]  w-full">
      <div className="h-full w-full">
        <h2
          className="bg-black text-white px-[300px] py-[10px] "
          style={{ fontSize: 100 }}
        >
          Life Outside Work
        </h2>

        <div className="w-full h-full z-0 relative  pt-[100px]">
          <Instagram promise={instagram} />
          <div className="px-[300px] pb-[400px]">
            <div className="w-[55%]">
              <p style={{ fontSize: 25 }}>
                When I'm not doing something creative, I like to watch
                scientific videos or travel to Summoner's Rift.
              </p>
              <p style={{ fontSize: 25 }} className="w-[80%] mt-[30px]">
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
