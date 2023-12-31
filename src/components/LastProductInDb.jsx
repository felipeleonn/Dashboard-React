import React, {useEffect, useState} from 'react';
export default function LastProductInDb({lastProduct}) {
      
      const [product, setProduct] = useState({
            name: '',
            description: '',
            image: ''
      })

      useEffect(() => {
            async function data() {
                  if(lastProduct) {
                        setProduct(lastProduct)
                  }
            }
            data()
      }, [lastProduct])

  return(

        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                  <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Last product in Data Base</h5>
                            {/* <div>
                              <button>Product</button>
                              <button>User</button>
                            </div> */}
                  </div>

                  <div className="card-body">
                            <div className="text-center">
                              <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "40rem" }} src={`img/${product.image}`} alt=" Star Wars - Mandalorian " />
                            </div>
                              <p>{product.name}</p>
                              <p>{product.description}</p>
                              <a className="btn btn-danger" href="/lastProduct">View movie detail</a>
                  </div>
            </div>
        </div>

  );
}
