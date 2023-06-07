import React from 'react';

const Titulo = ({ content }) => {
    return (
        <section className='text-center p-5 bg-black text-light'>
            <h1>{ content }</h1>
        </section>
    );
};

export default Titulo;