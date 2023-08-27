'use client';

import { propertyCreateSchema, PropertyCreateType } from '@airbnb/schema';
import { Button, SelectInput, TextInput } from '@airbnb/ui/components';
import { zodResolver } from '@hookform/resolvers/zod';
import Router from 'next/router';
import { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { trpc } from '../../../config/trpc';

const PropertyAddForm = () => {
    const { data } = trpc.property.getTags.useQuery();

    const {
        register,
        control,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<PropertyCreateType>({
        resolver: zodResolver(propertyCreateSchema),
        defaultValues: {
            region: 'united_states',
            types: 'house',
            placeType: 'entire_home',
            vat: false,
        },
    });

    const trpcUtils = trpc.useContext();

    const [imageUrl, setIamgeUrl] = useState<string>('');

    const [selectedTag, setSelectedTag] = useState<number[]>([]);

    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: 'images', // unique name for your Field Array
    });

    const { mutateAsync } = trpc.property.createProperty.useMutation();

    return (
        <section className="container mx-auto mb-16 w-full border-b border-gray-100">
            <div>
                <h1 className="mb-6 pt-7 text-xl font-semibold">Add Property</h1>
                <form
                    onSubmit={handleSubmit(async (data) => {
                        const response = await mutateAsync({
                            ...data,
                            tags: selectedTag.map((id) => ({ id })),
                        });

                        await trpcUtils.property.getProperties.invalidate();
                        reset();
                        Router.push('/admin/property');
                    })}
                    className="grid grid-cols-3 gap-3"
                >
                    <TextInput label="Name" placeholder="Name" {...register('name')} />
                    <TextInput label="Description" placeholder="Description" {...register('description')} />
                    <TextInput label="Location" placeholder="Location" {...register('location')} />
                    <TextInput label="Owner Name" placeholder="Owner Name" {...register('ownerName')} />
                    <TextInput label="Owner Phone" placeholder="Owner Phone" {...register('ownerPhone')} />
                    <TextInput
                        type="number"
                        label="Price"
                        placeholder="Price"
                        {...register('price', {
                            valueAsNumber: true,
                        })}
                    />
                    <TextInput
                        type="number"
                        label="Bedrooms"
                        placeholder="Bedrooms"
                        {...register('bed', {
                            valueAsNumber: true,
                        })}
                    />
                    <TextInput
                        type="number"
                        label="Bathrooms"
                        placeholder="Bathrooms"
                        {...register('bath', {
                            valueAsNumber: true,
                        })}
                    />
                    <TextInput
                        type="number"
                        label="Area"
                        placeholder="Area"
                        {...register('area', {
                            valueAsNumber: true,
                        })}
                    />
                    <TextInput
                        type="number"
                        label="Rating"
                        placeholder="Rating"
                        {...register('rating', {
                            valueAsNumber: true,
                        })}
                    />
                    <SelectInput
                        options={[
                            { label: 'Wurope', value: 'europe' },
                            {
                                label: 'Asia',
                                value: 'asia',
                            },
                            {
                                label: 'Canada',
                                value: 'canada',
                            },
                            {
                                label: 'USA',
                                value: 'united_states',
                            },
                            {
                                label: 'United kingdom',
                                value: 'united_kingdom',
                            },
                        ]}
                        label="Region"
                        placeholder="Region"
                        {...register('region')}
                    />
                    <SelectInput
                        options={[
                            { label: 'House', value: 'house' },
                            { label: 'Apartment', value: 'apartment' },
                            { label: 'Guesthouse', value: 'guesthouse' },
                            { label: 'Hotel', value: 'hotel' },
                        ]}
                        label="Property Types"
                        placeholder="Property Types"
                        {...register('types')}
                    />
                    <SelectInput
                        options={[
                            { label: 'Room', value: 'room' },
                            { label: 'Entire home', value: 'entire_home' },
                        ]}
                        label="Place Types"
                        placeholder="Place Types"
                        {...register('placeType')}
                    />

                    {/*is vat enables checkbox in the below  */}
                    <div>
                        <input type="checkbox" {...register('vat', {})} />
                        <label htmlFor="checkbox">Vat included</label>
                    </div>

                    <div className="col-start-1 col-end-4">
                        <label className="mb-1.5 block text-sm font-medium text-gray-700 ">Select tags</label>
                        <div className="flex flex-wrap gap-2">
                            {data?.tags.map((tag) => (
                                <div key={tag.id}>
                                    <input
                                        className="mr-2"
                                        type="checkbox"
                                        id={tag.id.toString()}
                                        value={tag.id}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setSelectedTag([...selectedTag, Number(e.target.value)]);
                                            } else {
                                                setSelectedTag(
                                                    selectedTag.filter((id) => id !== Number(e.target.value))
                                                );
                                            }
                                        }}
                                    />
                                    <label htmlFor={tag.id.toString()}>{tag.name}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-start-1 col-end-4">
                        <div className="flex w-full items-end gap-2">
                            <TextInput
                                className="w-full "
                                label="Image url"
                                placeholder="Image url"
                                value={imageUrl}
                                onChange={(e) => setIamgeUrl(e.target.value)}
                            />
                            <Button
                                onClick={() => {
                                    if (!imageUrl) return;
                                    append({ url: imageUrl });
                                    setIamgeUrl('');
                                }}
                                type="button"
                            >
                                Add
                            </Button>
                        </div>
                        {/* Show the image preview and remove */}
                        <div className="mt-2 flex flex-wrap gap-2">
                            {fields.map((field, index) => (
                                <div key={field.id} className="relative">
                                    <img
                                        src={field.url}
                                        alt={field.url}
                                        className="h-28 w-28 rounded"
                                        onError={(e) => {
                                            e.currentTarget.src = 'https://via.placeholder.com/150';
                                        }}
                                    />
                                    <button
                                        onClick={() => remove(index)}
                                        className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-500"
                                    >
                                        x
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Button type="submit" className="mt-6">
                        Submit
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default PropertyAddForm;
