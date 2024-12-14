import React from 'react';

function InfoApi() {

  
  return (
   <>
        <div className="context tracking-widest">
          <div className="mb-5">
            <p className="text-center mb-14 text-lg">API Documentation</p>
            <p>/api/auth/create_token</p>
            <a href="auth.png" target="_blank">
            <img src="auth.png" className="object-cover w-100 h-100" alt="" />
            </a>

            <p className="mt-1">/api/auth/create_token</p>
            <p className="mb-1">/api/auth/refresh_token</p>
            <p className="mb-1">/api/auth/logout_token</p>
          </div>
          
          <div className="pt-5 border-t">
            <p className="mb-1">/api/create_user</p>
            <p className="mb-1">/api/all_item</p>
            <p className="mb-1">/api/create_item</p>
            <p className="mb-1">/api/update_item/id</p>
            <p className="mb-1">/api/delete_item/id</p>
          </div>

        </div>
   </>
  )
}

export default InfoApi