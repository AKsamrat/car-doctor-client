import person from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';
const About = () => {
  return (
    <div>
      <div className="hero min-h-screen my-10 lg:mt-20 ">
        <div className="flex  flex-col justify-center lg:flex-row">
          <div className="lg:w-2/3 relative">
            <img
              src={person}
              className="w-10/12 rounded-lg shadow-2xl h-[480px] "
            />
            <img
              src={parts}
              className="w-1/2 rounded-lg shadow-2xl absolute right-10 top-[240px] border-[10px] border-white h-80"
            />
          </div>
          <div className="lg:w-1/2">
            <p className="text-red-500 font-bold text-lg">About Us</p>
            <h1 className="text-5xl font-bold my-7">
              We are qualified <br /> & of experience <br /> in this field
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum <br />{' '}
              available, but the majority have suffered alteration in some{' '}
              <br /> form, by injected humour, or randomised words which don't{' '}
              <br />
              look even slightly believable.
            </p>
            <p className="py-6">
              The majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <button className="btn btn-primary bg-[#FF3811] border-none">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
