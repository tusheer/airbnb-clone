import { revalidatePath } from 'next/cache';
import { Suspense } from 'react';
import PropertyAddForm from '../PropertyAddForm';

const serverAction = async () => {
    'use server';
    revalidatePath('/admin/property');
};

const PropertyAdd = () => {
    return (
        <div>
            <Suspense fallback={'...loading'}>
                <PropertyAddForm serverAction={serverAction} />
            </Suspense>
        </div>
    );
};

export default PropertyAdd;
