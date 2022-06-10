import React from 'react';

const Project = ({project}) => {
    const {name,img, description, link, client, server} = project
    return (
        <div>
            <div class="card w-72 mx-20 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{name}</h2>
    <p>{description}</p>
   <div className='d-flex '>
   <a className='btn btn-xs btn-warning m-2' href={link}>Live Link</a>
    <a className='btn btn-xs btn-warning m-2' href={client}>Client</a>
    <a className='btn btn-xs btn-warning m-2' href={server}>Server</a>
   </div>
  </div>
</div>
        </div>
    );
};

export default Project;