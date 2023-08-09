'use client';

const About = () => {
  return (
    <section className="h-[100vh] px-[300px]">
      <div className="flex justify-start ">
        <div className="w-[70%] flex  pt-[100px] relative">
          <h1
            style={{ fontSize: '14vw' }}
            className="z-10 relative -right-[10px] font-bodoniModa font-midium"
          >
            About
          </h1>
          <div className=" bg-slate-700 h-[500px] w-[400px] absolute -right-[200px]"></div>
        </div>
      </div>
      <div className="w-[50%] pt-[30px]">
        <p style={{ fontSize: 25 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text
        </p>
        <p style={{ fontSize: 25 }} className="mt-[20px]">
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book
        </p>
      </div>
    </section>
  );
};

export default About;
