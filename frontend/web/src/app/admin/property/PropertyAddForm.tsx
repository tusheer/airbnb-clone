'use client';

import { propertyCreateSchema, PropertyCreateType } from '@airbnb/schema';
import { TextInput } from '@airbnb/ui/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const PropertyAddForm = () => {
    const { register } = useForm<PropertyCreateType>({
        resolver: zodResolver(propertyCreateSchema),
    });

    return (
        <section className="container mx-auto mb-16 w-full border-b border-gray-100">
            <div>
                <h1 className="mb-6 pt-7 text-xl font-semibold">Add Property</h1>
                <form className="flex flex-col space-y-4">
                    <TextInput label="Name" placeholder="Name" {...register('name')} />
                    <TextInput label="Description" placeholder="Description" {...register('description')} />
                    <TextInput label="Location" placeholder="Location" {...register('location')} />
                    <TextInput label="Owner Name" placeholder="Owner Name" {...register('ownerName')} />
                    <TextInput label="Owner Phone" placeholder="Owner Phone" {...register('ownerPhone')} />
                    <TextInput label="Price" placeholder="Price" {...register('price')} />
                    <TextInput label="Bedrooms" placeholder="Bedrooms" {...register('bed')} />
                    <TextInput label="Bathrooms" placeholder="Bathrooms" {...register('bath')} />
                    <TextInput label="Area" placeholder="Area" {...register('area')} />
                    <TextInput label="Rating" placeholder="Rating" {...register('rating')} />
                    <TextInput label="Region" placeholder="Region" {...register('region')} />
                    <TextInput label="Property Types" placeholder="Property Types" {...register('types')} />
                </form>
            </div>
        </section>
    );
};

export default PropertyAddForm;
