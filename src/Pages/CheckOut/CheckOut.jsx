import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { title, service_id, price, _id, img } = service;

  const handleBookService = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const order = {
      customerName: name,
      email,
      date,
      img,
      serviceName: title,
      service_id: _id,
      price: price,
    };
    console.log(order);
    fetch('http://localhost:7000/booking', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(order),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
    form.reset();
  };
  return (
    <div>
      <p className="font-bold text-3xl py-4 text-center">Name : {title}</p>
      {/* <img src={img} alt="" /> */}
      <section className="p-6 bg-gray-100 dark:text-gray-900">
        <form
          className="container flex flex-col mx-auto space-y-12"
          onSubmit={handleBookService}
        >
          <fieldset className=" rounded-md shadow-sm dark:bg-gray-50 py">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3 ">
                <input
                  id="firstname"
                  type="text"
                  name="name"
                  placeholder=" Name"
                  defaultValue={user?.displayName}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 py-3 pl-3"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <input
                  name="date"
                  id="lastname"
                  type="date"
                  placeholder="Booking Date"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 py-3  pl-3"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <input
                  name="email"
                  id="email"
                  type="text"
                  placeholder="Email"
                  defaultValue={user?.email}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 py-3  pl-3"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <input
                  name="price"
                  id="email"
                  type="text"
                  defaultValue={'$' + price}
                  placeholder="Service Price"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 py-3  pl-3"
                />
              </div>
            </div>
            <div className="col-span-full mt-4">
              <textarea
                rows={10}
                name="productDescription"
                id="bio"
                placeholder="Product Description"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300  pl-3 pt-4"
              ></textarea>
            </div>
          </fieldset>
          <button>
            {' '}
            <input
              type="submit"
              value="Confirm Booking"
              className="btn w-full bg-[#FF3811] text-white text-lg"
            />
          </button>
        </form>
      </section>
    </div>
  );
};

export default CheckOut;
