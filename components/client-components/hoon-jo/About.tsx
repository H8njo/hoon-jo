'use client';

import Image from 'next/image';

const About = () => {
  return (
    <section className="px-[20px] md:px-[100px] xl:px-[300px] mb-[120px] sm:mb-[250px]">
      <div className="flex justify-start ">
        <div className=" pt-[100px] flex justify-between md:justify-start relative">
          <h1
            style={{ fontSize: '14vw' }}
            className="z-10 relative -right-[10px] font-bodoniModa font-midium"
          >
            About
          </h1>
          <div
            className="h-[150px] w-[150px] md:w-[200px] lg:w-[300px] xl:w-[400px] 
             lg:absolute top-[100px] lg:-right-[480px] xl:-right-[350px]"
            style={{ zIndex: 1 }}
          >
            <Image
              src="/images/hoon-jo/profile.png"
              alt="profile"
              width={400}
              height={500}
            />
          </div>
        </div>
      </div>
      <div
        className="w-[100%] lg:w-[70%] xl:w-[60%] pt-[30px] relative"
        style={{ zIndex: 2 }}
      >
        <p className="text-lg md:text-2xl mb-[50px]">
          I am currently working in South Korea as a qualified front-end
          developer with a full-stack development background.
        </p>
        <p className="text-lg md:text-2xl mb-[50px]">
          Recognized for my ability to learn and grow quickly, I have a lot of
          experience working on various projects and successfully completing
          them. Most of my projects have been from planning to management,
          development, and deployment, so my knowledge of various fields is my
          strength.
        </p>
        <p className="text-lg md:text-2xl mb-[50px]">
          As a team leader of various projects, I always aim to learn and grow
          with my teammates by introducing new technology stacks in every
          project.
        </p>
        <p className="text-lg md:text-2xl mb-[50px]">
          While developing, I habitually consider reusability and scalability,
          which has resulted in successful solutions for the projects I've
          created, and on a smaller scale, I've often helped other development
          teams by isolating useful components or hooks.
        </p>
        <p className="text-lg md:text-2xl mb-[50px]">
          The code of my projects has been characterized by high readability,
          and I have constantly provided feedback on each other's code to ensure
          the beauty of the project and the growth and maintenance of my team as
          a whole.
        </p>
        <p className="text-lg md:text-2xl mb-[50px]">
          Each of my projects has been characterized by the use of different
          technologies. Rather than sticking with the same technology, I follow
          the latest tech stack and always adopt the best of the best. I strive
          for better design, better performance.
        </p>
      </div>
    </section>
  );
};

export default About;
