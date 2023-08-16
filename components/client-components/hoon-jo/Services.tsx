'use client';
import { RedirectContext } from '@/context/redirect.context';
import { useContext } from 'react';
import { BsArrowRight } from 'react-icons/bs';
const Services = () => {
  const { redirect } = useContext(RedirectContext);
  const onClickSeeMore = () => {
    redirect('/skills');
  };
  return (
    <section>
      <h2 className="mb-[50px] sm:mb-[100px] text-4xl sm:text-6xl md:text-8xl bg-black text-white px-[50px] sm:px-[100px] xl:px-[300px] pt-[10px] pb-[15px] md:pb-[30px]">
        Services
      </h2>
      <div className="px-[20px] lg:px-[100px] 2xl:px-[350px]">
        <div className="flex justify-between flex-col-reverse sm:flex-row">
          <article className="w-[100%] sm:w-[45%] mb-[50px] sm:mb-0 sm:h-[400px]  mt-0 sm:mt-[350px]">
            <div className="flex border-b-2 pb-[15px] sm:pb-[10px] border-black items-center justify-between flex-row">
              <h3 className="text-4xl sm:text-6xl md:text-8xl font-bold">02</h3>
              <h3 className="font-yanone font-medium relative top-[15px] text-4xl  sm:text-5xl md:text-7xl lg:text-8xl">
                Backend
              </h3>
            </div>

            <p className="mt-[30px] text-lg md:text-2xl">
              I use the Nest.js framework, Next.js SSR, and sometimes customize
              strapi and Gatsby or Sequelize. I manage databases with prisma as
              an ORM, and I use knex to create complex raw queries to process
              data. I don't care if it's NoSQL or RDBMS, I apply it according to
              the situation.
            </p>
          </article>
          <article className="w-[100%] sm:w-[45%] mb-[50px] sm:mb-0 sm:h-[400px]">
            <div className="flex border-b-2 pb-[15px] sm:pb-[10px] border-black items-center justify-between flex-row">
              <h3 className="text-4xl sm:text-6xl md:text-8xl font-bold">01</h3>
              <h3 className="font-yanone font-medium relative top-[15px] text-4xl  sm:text-5xl md:text-7xl lg:text-8xl">
                Frontend
              </h3>
            </div>

            <p className="mt-[30px] text-lg md:text-2xl">
              Mainly working with React,Next.js. Proficient with antd, tailwind
              to quickly realize ideas. Designs the right structure for a given
              situation and strives for better performance. Strictly follows
              coding conventions and tests with storybook/jest for quick
              maintenance.
            </p>
          </article>
        </div>
        <div className="flex justify-between flex-col-reverse sm:flex-row">
          <article className="w-[100%] sm:w-[45%] mb-[50px] sm:mb-0 sm:h-[400px]  mt-0 sm:mt-[350px]">
            <div className="flex border-b-2 pb-[15px] sm:pb-[10px] border-black items-center justify-between flex-row">
              <h3 className="text-4xl sm:text-6xl md:text-8xl font-bold">04</h3>
              <h3 className="font-yanone font-medium relative top-[15px] text-4xl  sm:text-5xl md:text-7xl lg:text-8xl">
                Management
              </h3>
            </div>

            <p className="mt-[30px] text-lg md:text-2xl">
              I store my precious code in a Git hub, or manage code with my
              teammates in a Git lab. Projects are strictly managed in Notion to
              ensure they are completed on time. Otherwise, I use Figma to
              collaborate with designers or Slack to communicate.
            </p>
          </article>
          <article className="w-[100%] sm:w-[45%] mb-[50px] sm:mb-0 sm:h-[400px]  ">
            <div className="flex border-b-2 pb-[15px] sm:pb-[10px] border-black items-center justify-between flex-row">
              <h3 className="text-4xl sm:text-6xl md:text-8xl font-bold">03</h3>
              <h3 className="font-yanone font-medium relative top-[15px] text-4xl  sm:text-5xl md:text-7xl lg:text-8xl">
                Deploy
              </h3>
            </div>

            <p className="mt-[30px] text-lg md:text-2xl">
              I have experience deploying in a variety of environments,
              including private servers, AWS, and closed networks. I primarily
              use Docker to deploy, and docker-compose to manage the various
              containers that are connected. I also use PM2 to make deployments
              simple and fast. My portfolio is deployed via vercel.
            </p>
          </article>
        </div>
        <div className="flex justify-center mt-[50px] sm:mt-[150px]">
          <button
            className="flex items-center bg-black text-white px-[25px] py-[5px] rounded-full text-lg md:text-2xl"
            onClick={onClickSeeMore}
          >
            See more specific skills
            <BsArrowRight style={{ display: 'inline', marginLeft: 10 }} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
