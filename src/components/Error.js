import React from 'react';
import { Link } from 'react-router-dom';
export default function Error() {
  return (
      <div className="container my-5 py-5" >
          <div class="alert alert-danger" role="alert">
            ERROR 404 !!  Not Available Please Enter The correct Url or<div>&nbsp;</div>
            <Link to="/">  Go to Homepage </Link>
            </div>
      </div>
  );
}
