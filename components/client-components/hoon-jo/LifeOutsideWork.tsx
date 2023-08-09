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
          style={{ fontSize: 130 }}
        >
          Life Outside Work
        </h2>

        <div className="w-full h-full z-0 relative  pt-[100px]">
          <Instagram promise={instagram} />
          <div className="px-[300px] pb-[400px]">
            <div className="w-[55%]">
              <p style={{ fontSize: 25 }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s Lorem Ipsum is simply dummy
              </p>
              <p style={{ fontSize: 25 }} className="w-[80%] mt-[30px]">
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industrys standard text ever since the 1500s
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeOutsideWork;
