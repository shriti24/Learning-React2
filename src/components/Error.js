import React from 'react'
import {useRouteError} from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <>
    <h1>Oops page does'nt exist! </h1>
    <h2>{err.status} : {err.statusText}</h2>
    </>
  )
}

export default Error