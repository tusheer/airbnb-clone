import { revalidatePath } from 'next/cache';
import PropertyAddForm from '../PropertyAddForm';

const serverAction = async () => {
    'use server';
    revalidatePath('/admin/property');
};

const PropertyAdd = () => {
    return (
        <div>
            <PropertyAddForm serverAction={serverAction} />
        </div>
    );
};

export default PropertyAdd;
