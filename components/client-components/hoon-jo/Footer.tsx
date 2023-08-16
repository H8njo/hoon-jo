const Footer = () => {
  return (
    <section className="h-[110vh] flex justify-center items-center flex-col">
      <article className="w-[60%] pt-[300px]">
        <h1
          style={{ fontSize: 50 }}
          className="text-center font-black mb-[20px]"
        >
          Want to know more about me?
        </h1>
        <p className="text-center" style={{ fontSize: 25 }}>
          I created this site to document my growth as a developer.
        </p>
        <p className="text-center" style={{ fontSize: 25 }}>
          I want to hear about my mistakes, ideas, opinions, and other things so
          I can get better.
        </p>
        <p className="text-center" style={{ fontSize: 25 }}>
          I'm a very open-minded person, so don't hesitate to reach out.
        </p>
      </article>
    </section>
  );
};

export default Footer;
