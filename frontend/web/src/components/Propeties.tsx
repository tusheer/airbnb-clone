'use client';

import { PropertyType } from '@airbnb/schema';
import { trpc } from '../config/trpc';
import useQueryParams from '../hooks/usePropertyQuery';

const Properties = () => {
    const { queryParams } = useQueryParams();
    const { data } = trpc.property.getProperties.useQuery(queryParams, {
        cacheTime: 300000000,
        suspense: true,
        staleTime: 300000000,
    });

    return (
        <section className="mb-20">
            <div className="container mx-auto ">
                <div className="grid gap-x-7 gap-y-10 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-6">
                    {data?.property.map((property) => <PropertyCard {...property} key={property.id} />)}
                </div>
            </div>
        </section>
    );
};

const PropertyCard = ({ location, name, images, rating, price, vat, description }: PropertyType) => {
    return (
        <div className="">
            <figure className="h-ful relative aspect-[20/19] w-full rounded-xl ">
                <img
                    src={(images as { url: string; name: string }[])[0].url}
                    alt=""
                    className="h-full w-full rounded-xl object-cover"
                />
                <button className="host absolute bottom-3 left-2 rounded-lg bg-white px-3  py-3">
                    <img
                        src="https://a0.muscache.com/im/pictures/user/3816a6ef-5cc9-40ed-ae47-406646daa103.jpg?im_w=720"
                        alt=""
                        className="h-10 w-10 rounded-full object-cover"
                    />
                </button>
                <button className="absolute right-4 top-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                    >
                        <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
                    </svg>
                </button>
            </figure>
            <div>
                <div className=" mt-2 flex items-center justify-between">
                    <h3 className="text-dark-gray text-sm font-semibold">{location}</h3>
                    <span className="flex items-center gap-2">
                        <svg
                            height={10}
                            width={10}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                        >
                            <path
                                fillRule="evenodd"
                                d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
                            ></path>
                        </svg>
                        <span className="text-dark-gray text-sm"> {rating}</span>
                    </span>
                </div>
                <div className="mt-1 flex flex-col text-justify text-[15px] text-gray-600">
                    <span>{description}</span>
                    <span>5 nights ,Sep 14 – 19</span>
                </div>
                {vat ? (
                    <p className="text-dark-gray mt-2 block text-[15px] underline ">
                        <strong className="font-semibold">$290</strong> total before taxes
                    </p>
                ) : (
                    <p className="text-dark-gray mt-2 block text-[15px] ">
                        <strong className="font-semibold">$290</strong> Night
                    </p>
                )}
            </div>
        </div>
    );
};

export default Properties;
