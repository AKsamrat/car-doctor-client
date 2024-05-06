import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import Swal from 'sweetalert2';
import axios from 'axios';
import useAxiosSource from '../Hook/useAxiosSource';

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [control, setControl] = useState(false);
  const axiosSecure = useAxiosSource();
  // const url = `http://localhost:7000/booking?email=${user?.email}`;
  const url = `/booking?email=${user?.email}`;
  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to Delete this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:7000/Delete/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your Craft has been deleted.',
                icon: 'success',
              });
              setControl(!control);
            }
          });
      }
    });
  };
  const handleBookingConfirm = id => {
    fetch(`http://localhost:7000/booking/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ status: 'confirm' }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Updated',
            text: 'Your Booking has been Confirmed.',
            icon: 'success',
          });
          const remaining = bookings.filter(booking => booking._id !== id);
          const updated = bookings.find(booking => booking._id === id);
          updated.status = 'confirm';
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
          setControl(!control);
        }
      });
  };

  useEffect(() => {
    axiosSecure.get(url).then(res => setBookings(res?.data));

    // axios.get(url, { withCredentials: true }).then(res => {
    //   setBookings(res.data);
    // });

    // fetch(url)
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //     setBookings(data);
    //   });
  }, [user, control, axiosSecure]);
  return (
    <div>
      <div className="overflow-x-auto my-10  md:px-[50px] lg:px-[80px]">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="*:text-xl font-bold">
              <th>
                <div></div>
              </th>
              <th>
                <div>Item Name</div>
              </th>
              <th>
                <div className="hidden lg:flex">Image</div>
              </th>

              <th>
                <div className="hidden lg:flex">Price</div>
              </th>
              <th>
                <div className="hidden lg:flex">Date</div>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map(craft => (
              <tr className="hover" key={craft._id}>
                <button
                  onClick={() => handleDelete(craft._id)}
                  className="btn  bg-[#FA8072] text-white"
                >
                  <RiDeleteBin5Fill />
                </button>
                <th>{craft.serviceName}</th>

                <th>
                  <div className="avatar hidden lg:flex">
                    <div className="mask mask-squircle w-12 h-12 ">
                      <img src={craft.img} alt="" />
                    </div>
                  </div>
                </th>

                <td>
                  <div className="hidden lg:flex">$ {craft.price}</div>
                </td>
                <td>
                  <div className="">{craft.date}</div>
                </td>
                <td>
                  {craft.status === 'confirm' ? (
                    <span className="font-bold text-green-600">Confirmed</span>
                  ) : (
                    <Link
                      onClick={() => handleBookingConfirm(craft._id)}
                      className="btn  bg-[#FA8072] text-white"
                    >
                      {' '}
                      Please Confirm
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
