import Footer from "../components/Footer";
import Header from "../components/Header";
import AnimatedLetters from "../animations/AnimatedLetters";

export default function About() {
  return (
    <div>
      <Header />
      {/* Images */}
      <div className="grid gap-5 p-5 grid-cols-1 sm:grid-cols-2 md:px-20 xl:px-40 mt-5 items-center -mb-4">
        <div>
          <img
            src="https://portfolio-images-121638211942-us-east-1-an.s3.us-east-1.amazonaws.com/travel/DSC02288.jpg"
            alt="andrew"
            className="block w-full max-w-full object-contain sm:max-h-120 "
          />
        </div>
        <div>
          {/* Form Contact*/}
          <div className="flex flex-col gap-1 ">
            <h1 className="text-4xl">
              <AnimatedLetters
                text="ABOUT ANDREW"
                hoverY={-6}
                className="ease-in-out "
              />
            </h1>
            <div className="flex flex-col gap-5 text-md font-light lg:text-lg max-w-150">
              <p>
                Andrew is a portrait and graduation photographer based in
                <strong> Orlando, Florida</strong>. He is a graduate of the{" "}
                <strong>University of Central Florida</strong>, with a B.S. in
                Digital Media (Web Development).
              </p>
              <p>
                He primarily works with students and organizations around the
                Orlando area, with a focus on supporting AAPI organizations and
                communities. Through his work, Andrew aims to highlight culture,
                connection, and meaningful moments.
              </p>
              <p>
                Outside of photography, Andrew has experience in graphic design,
                stage lighting, and development.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
