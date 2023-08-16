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
      <h2
        className="mb-[100px] bg-black text-white px-[300px] py-[10px]"
        style={{ fontSize: 100 }}
      >
        Services
      </h2>
      <div className="px-[350px]">
        <div className="flex justify-between ">
          <article className="w-[45%] h-[400px]  mt-[350px]">
            <div className="flex border-b-2 border-black items-center justify-between">
              <h3 style={{ fontSize: 100 }} className=" font-bold">
                02
              </h3>
              <h3
                className="font-yanone font-medium relative top-[15px]"
                style={{ fontSize: 80 }}
              >
                Backend
              </h3>
            </div>

            <p className="mt-[30px]" style={{ fontSize: 25 }}>
              I use the Nest.js framework, Next.js SSR, and sometimes customize
              strapi and Gatsby or Sequelize. I manage databases with prisma as
              an ORM, and I use knex to create complex raw queries to process
              data. I don't care if it's NoSQL or RDBMS, I apply it according to
              the situation.
            </p>
          </article>
          <article className="w-[45%] h-[400px]  ">
            <div className="flex border-b-2 border-black items-center justify-between">
              <h3 style={{ fontSize: 100 }} className=" font-bold">
                01
              </h3>
              <h3
                className="font-yanone font-medium relative top-[15px]"
                style={{ fontSize: 80 }}
              >
                Frontend
              </h3>
            </div>

            <p className="mt-[30px]" style={{ fontSize: 25 }}>
              Mainly working with React,Next.js. Proficient with antd, tailwind
              to quickly realize ideas. Designs the right structure for a given
              situation and strives for better performance. Strictly follows
              coding conventions and tests with storybook/jest for quick
              maintenance.
            </p>
          </article>
        </div>
        <div className="flex justify-between mt-[-100px] ">
          <article className="w-[45%] h-[400px]  mt-[350px]">
            <div className="flex border-b-2 border-black items-center justify-between">
              <h3 style={{ fontSize: 100 }} className=" font-bold">
                04
              </h3>
              <h3
                className="font-yanone font-medium relative top-[15px]"
                style={{ fontSize: 80 }}
              >
                Management
              </h3>
            </div>

            <p className="mt-[30px]" style={{ fontSize: 25 }}>
              I store my precious code in a Git hub, or manage code with my
              teammates in a Git lab. Projects are strictly managed in Notion to
              ensure they are completed on time. Otherwise, I use Figma to
              collaborate with designers or Slack to communicate.
            </p>
          </article>
          <article className="w-[45%] h-[400px]  ">
            <div className="flex border-b-2 border-black items-center justify-between">
              <h3 style={{ fontSize: 100 }} className=" font-bold">
                03
              </h3>
              <h3
                className="font-yanone font-medium relative top-[15px]"
                style={{ fontSize: 80 }}
              >
                Deploy
              </h3>
            </div>

            <p className="mt-[30px]" style={{ fontSize: 25 }}>
              I have experience deploying in a variety of environments,
              including private servers, AWS, and closed networks. I primarily
              use Docker to deploy, and docker-compose to manage the various
              containers that are connected. I also use PM2 to make deployments
              simple and fast. My portfolio is deployed via vercel.
            </p>
          </article>
        </div>
        <div className="flex justify-center mt-[150px]">
          <button
            style={{ fontSize: 30 }}
            className="flex items-center bg-black text-white px-[25px] py-[5px] rounded-full"
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
