'use client';
const Services = () => {
  return (
    <section>
      <h2
        className="mb-[100px] bg-black text-white px-[300px] py-[10px]"
        style={{ fontSize: 130 }}
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s Lorem Ipsum is simply dummy text of the
              printing
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s Lorem Ipsum is simply dummy text of the
              printing
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s Lorem Ipsum is simply dummy text of the
              printing
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s Lorem Ipsum is simply dummy text of the
              printing
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;
