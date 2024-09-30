import React from 'react';
import { Link } from 'react-router-dom';

const LibraryCard = (props) => {
    return (
        <Link to={`/library/${props.route}`} style={{ textDecoration: 'none', color: 'black' }} className="w-full md:w-1/3 lg:w-1/4 pt-5">
            <div className="bg-white p-3 w-full rounded-2xl ease-in-out hover:shadow-lg transform transition duration-1000 hover:scale-105 overflow-hidden ">
                <div className="w-full h-56 lg:64 relative">
                    <img
                        src={props.photos}
                        alt="Books"
                        className="w-full h-full rounded-2xl"
                    />
                </div>
                <div className=" my-2 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <h4 className="text-xl font-medium">{props.name}</h4>
                    </div>
                    <div className="flex items-center justify-between text-grey-500">
                        <p>{props.category.join(", ")}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default LibraryCard;