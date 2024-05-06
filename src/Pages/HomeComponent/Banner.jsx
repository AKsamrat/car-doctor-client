import img1 from '../../assets/images/banner/1.jpg';
import img2 from '../../assets/images/banner/2.jpg';
import img3 from '../../assets/images/banner/3.jpg';
import img4 from '../../assets/images/banner/4.jpg';
import img5 from '../../assets/images/banner/5.jpg';
import img6 from '../../assets/images/banner/6.jpg';

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[600px]  object-fill mt-7">
        <div id="slide1" className="carousel-item relative w-full style">
          <img src={img1} className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex  items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] from-10% via-[#151515] via-10%  to-[rgba(21, 21, 21, 0)]   ">
            <div className=" text-white space-y-10 ml-6 lg:ml-16 ">
              <h2 className="text-6xl font-bold">
                Affordable <br /> Price For Car <br /> Servicing
              </h2>
              <p>
                There are many variations of passages of available, but <br />{' '}
                the majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn btn-primary mr-5 bg-[#FF3811] border-none">
                  Discover More
                </button>
                <button className="btn btn-outline  border-white text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-10 *:text-white ">
            <a
              href="#slide6"
              className="btn btn-circle bg-[#FF3811] border-none"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-[#FF3811] border-none"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full style">
          <img src={img2} className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex  items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] from-10% via-[#151515] via-10%  to-[rgba(21, 21, 21, 0)]   ">
            <div className=" text-white space-y-10 ml-6 lg:ml-16 ">
              <h2 className="text-6xl font-bold">
                Affordable <br /> Price For Car <br /> Servicing
              </h2>
              <p>
                There are many variations of passages of available, but <br />{' '}
                the majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn btn-primary mr-5 bg-[#FF3811] border-none">
                  Discover More
                </button>
                <button className="btn btn-outline  border-white text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-10 *:text-white ">
            <a
              href="#slide1"
              className="btn btn-circle bg-[#FF3811] border-none"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-[#FF3811] border-none"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full style">
          <img src={img3} className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex  items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] from-10% via-[#151515] via-10%  to-[rgba(21, 21, 21, 0)]   ">
            <div className=" text-white space-y-10 ml-6 lg:ml-16 ">
              <h2 className="text-6xl font-bold">
                Affordable <br /> Price For Car <br /> Servicing
              </h2>
              <p>
                There are many variations of passages of available, but <br />{' '}
                the majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn btn-primary mr-5 bg-[#FF3811] border-none">
                  Discover More
                </button>
                <button className="btn btn-outline  border-white text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-10 *:text-white ">
            <a
              href="#slide2"
              className="btn btn-circle bg-[#FF3811] border-none"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle bg-[#FF3811] border-none"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full style">
          <img src={img4} className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex  items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] from-10% via-[#151515] via-10%  to-[rgba(21, 21, 21, 0)]   ">
            <div className=" text-white space-y-10 ml-6 lg:ml-16 ">
              <h2 className="text-6xl font-bold">
                Affordable <br /> Price For Car <br /> Servicing
              </h2>
              <p>
                There are many variations of passages of available, but <br />{' '}
                the majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn btn-primary mr-5 bg-[#FF3811] border-none">
                  Discover More
                </button>
                <button className="btn btn-outline  border-white text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-10 *:text-white ">
            <a
              href="#slide3"
              className="btn btn-circle bg-[#FF3811] border-none"
            >
              ❮
            </a>
            <a
              href="#slide5"
              className="btn btn-circle bg-[#FF3811] border-none"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full style">
          <img src={img5} className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex  items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] from-10% via-[#151515] via-10%  to-[rgba(21, 21, 21, 0)]   ">
            <div className=" text-white space-y-10 ml-6 lg:ml-16 ">
              <h2 className="text-6xl font-bold">
                Affordable <br /> Price For Car <br /> Servicing
              </h2>
              <p>
                There are many variations of passages of available, but <br />{' '}
                the majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn btn-primary mr-5 bg-[#FF3811] border-none">
                  Discover More
                </button>
                <button className="btn btn-outline  border-white text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-10 *:text-white ">
            <a
              href="#slide4"
              className="btn btn-circle bg-[#FF3811] border-none"
            >
              ❮
            </a>
            <a
              href="#slide6"
              className="btn btn-circle bg-[#FF3811] border-none"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full style">
          <img src={img6} className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex  items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] from-10% via-[#151515] via-10%  to-[rgba(21, 21, 21, 0)]   ">
            <div className=" text-white space-y-10 ml-6 lg:ml-16">
              <h2 className="text-6xl font-bold">
                Affordable <br /> Price For Car <br /> Servicing
              </h2>
              <p>
                There are many variations of passages of available, but <br />{' '}
                the majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn btn-primary mr-5 bg-[#FF3811] border-none">
                  Discover More
                </button>
                <button className="btn btn-outline  border-white text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-10 *:text-white ">
            <a
              href="#slide5"
              className="btn btn-circle bg-[#FF3811] border-none"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-[#FF3811] border-none"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
