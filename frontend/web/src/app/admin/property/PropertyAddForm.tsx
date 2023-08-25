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
                </form>
            </div>
        </section>
    );
};

export default PropertyAddForm;
