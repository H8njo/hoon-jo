'use client';

import Image from 'next/image';

const About = () => {
  return (
    <section className="px-[300px] mb-[250px]">
      <div className="flex justify-start ">
        <div className="w-[70%] flex  pt-[100px] relative">
          <h1
            style={{ fontSize: '14vw' }}
            className="z-10 relative -right-[10px] font-bodoniModa font-midium"
          >
            About
          </h1>
          <div className="h-[500px] w-[400px] absolute -right-[200px]">
            <Image
              src="/images/hoon-jo/profile.png"
              alt="profile"
              width={400}
              height={500}
            />
          </div>
        </div>
      </div>
      <div className="w-[50%] pt-[30px]">
        <p style={{ fontSize: 25 }}>
          I am currently working in South Korea as a qualified front-end
          developer with a full-stack development background.
        </p>
        <p style={{ fontSize: 25 }} className="mt-[50px]">
          Recognized for my ability to learn and grow quickly, I have a lot of
          experience working on various projects and successfully completing
          them. Most of my projects have been from planning to management,
          development, and deployment, so my knowledge of various fields is my
          strength.
        </p>
        <p style={{ fontSize: 25 }} className="mt-[50px]">
          As a team leader of various projects, I always aim to learn and grow
          with my teammates by introducing new technology stacks in every
          project.
        </p>
        <p style={{ fontSize: 25 }} className="mt-[50px]">
          While developing, I habitually consider reusability and scalability,
          which has resulted in successful solutions for the projects I've
          created, and on a smaller scale, I've often helped other development
          teams by isolating useful components or hooks.
        </p>
        <p style={{ fontSize: 25 }} className="mt-[50px]">
          The code of my projects has been characterized by high readability,
          and I have constantly provided feedback on each other's code to ensure
          the beauty of the project and the growth and maintenance of my team as
          a whole.
        </p>
        <p style={{ fontSize: 25 }} className="mt-[50px]">
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
