'use client';

import { trpc } from '../../../config/trpc';

const PropertyTable = () => {
    const [data] = trpc.property.getProperties.useSuspenseQuery();
    return (
        <section className="container  mx-auto mb-10">
            <h1 className="text-xl font-semibold">Property list</h1>
            <table className=" table w-auto min-w-[800px] overflow-x-auto">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Owner Name</th>
                        <th>Beds</th>
                        <th>Baths</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Region</th>

                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.property.map((property) => (
                        <tr key={property.id}>
                            <td>
                                {property.images?.length
                                    ? property.images.map((image) => (
                                          <img id={image.url} src={image.url} alt={image.url} className="h-20 w-20" />
                                      ))
                                    : 'No image'}
                            </td>
                            <td>{property.name}</td>
                            <td>{property.ownerName}</td>
                            <td>{property.bed}</td>
                            <td>{property.bath}</td>
                            <td>{property.price}</td>
                            <td>{property.rating}</td>
                            <td>{property.region}</td>

                            <td>
                                <button className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default PropertyTable;
