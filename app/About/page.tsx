import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-hidden mb-10" id="about">
      {/* Video Section */}
      <section
        className="sticky top-0 z-10 h-screen overflow-hidden bg-black"
        id="home"
      >
        {/* Single video for both mobile and desktop */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30 hidden md:block"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="./harhintvid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30 md:hidden"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="./harhintvid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative flex flex-col items-center justify-center h-screen md:gap-[8vh] gap-[8vh]">
          <p
            className="text-white font-bold md:text-5xl lg:text-7xl text-7xl text-center px-12 md:px-6"
            id="intro_heading"
          >
            <span className="text-[#63AB38]">About</span> Us
          </p>
          <div id="intro_button2"></div>
        </div>
      </section>

      {/* Paragraph Section */}
      <section
        className="relative px-8 md:px-16 py-12 bg-white text-black"
        id="about_paragraph"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#63AB38] mb-6">
            Who We Are
          </h2>
          <p className="text-lg leading-relaxed">
          Welcome to HARSH INTERIOR, your trusted partner in delivering comprehensive and exceptional turn-key contract solutions. With a legacy of excellence and decades of combined experience, we are dedicated to transforming your vision into reality. Our expertise spans a diverse range of sectors, including commercial, residential, and industrial projects, where we consistently deliver outcomes that surpass expectations.

At HARSH INTERIOR, we take pride in our holistic approach, managing projects seamlessly from concept to completion. Our team of highly skilled architects, engineers, designers, and tradespeople collaborates to ensure every project is executed with precision, innovation, and efficiency. Whether it’s creating stunning residential spaces, cutting-edge commercial environments, or robust industrial facilities, we handle every detail with utmost care and professionalism.
          </p>
        </div>
      </section>
    </main>
  );
}
