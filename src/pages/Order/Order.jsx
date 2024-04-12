import React, { useContext, useEffect } from 'react';
import myContext from '../../context/data/myContext';
import Layout from '../../components/Layout/Layout';
import Loader from '../../components/loader/Loader';

function Order() {
  const currentUser = localStorage.getItem('user');
  const userid = currentUser ? JSON.parse(currentUser).user.uid : null;
  const context = useContext(myContext);
  const { mode, loading, order } = context;

  useEffect(() => {
    // console.log('currentUser:', currentUser);
    // console.log('userid:', userid);
    // console.log('context:', context);
  }, [currentUser, userid, context]);

  if (!currentUser) {
    console.log('User not logged in');
    return <div>User not logged in</div>;
  }

  return (
    <Layout>
      {loading && <Loader />}
      {order.length > 0 ? (
        <>
          <div className=" h-full pt-10">
            {order
              .filter((obj) => obj.userid == userid)
              .map((order) => {
                return (
                  <div
                    className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0"
                    key={order.id} // Assuming each order has a unique ID
                  >
                    {order.cartItems.map((item) => {
                      return (
                        <div className="rounded-lg md:w-2/3" key={item.id}>
                          <div
                            className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                            style={{
                              backgroundColor: mode === 'dark' ? '#282c34' : '',
                              color: mode === 'dark' ? 'white' : '',
                            }}
                          >
                            <img
                              src={item.imageUrl}
                              alt="product-image"
                              className="w-full rounded-lg sm:w-40"
                            />
                            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                              <div className="mt-5 sm:mt-0">
                                <h2
                                  className="text-lg font-bold text-gray-900"
                                  style={{ color: mode === 'dark' ? 'white' : '' }}
                                >
                                  {item.title}
                                </h2>
                                <p
                                  className="mt-1 text-xs text-gray-700"
                                  style={{ color: mode === 'dark' ? 'white' : '' }}
                                >
                                  {item.description}
                                </p>
                                <p
                                  className="mt-1 text-xs text-gray-700"
                                  style={{ color: mode === 'dark' ? 'white' : '' }}
                                >
                                  {item.price}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
          </div>
        </>
      ) : (
        <h2 className="text-center tex-2xl text-white">Not Order</h2>
      )}
    </Layout>
  );
}

export default Order;
