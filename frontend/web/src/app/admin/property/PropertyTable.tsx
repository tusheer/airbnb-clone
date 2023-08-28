'use client';

import { Button } from '@airbnb/ui/components';
import Link from 'next/link';
import { trpc } from '../../../config/trpc';

const PropertyTable = () => {
    const [data, { refetch }] = trpc.property.getProperties.useSuspenseQuery();

    const { mutateAsync } = trpc.property.deleteProperty.useMutation();

    return (
        <section className="container mx-auto  mb-10 mt-10">
            <div className="flex justify-between ">
                <h1 className="text-xl font-semibold">Property list</h1>
                <Link href="/admin/property/add">
                    <Button>Add New</Button>
                </Link>
            </div>

            <table className=" table w-full min-w-[800px] overflow-x-auto">
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
                        <tr key={property?.id}>
                            <td>
                                <div className="flex max-w-xs flex-wrap gap-2">
                                    {property.images?.length
                                        ? property.images.map((image) => (
                                              <img
                                                  id={image.url}
                                                  src={image.url}
                                                  alt={image.url}
                                                  className="h-5 w-5 rounded"
                                              />
                                          ))
                                        : 'No image'}
                                </div>
                            </td>
                            <td>{property.name}</td>
                            <td>{property.ownerName}</td>
                            <td>{property.bed}</td>
                            <td>{property.bath}</td>
                            <td>{property.price}</td>
                            <td>{property.rating}</td>
                            <td>{property.region}</td>

                            <td>
                                <button
                                    onClick={async () => {
                                        await mutateAsync({ id: property.id });
                                        refetch();
                                    }}
                                    className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
                                >
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
