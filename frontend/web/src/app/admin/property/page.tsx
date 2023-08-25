import { Suspense } from 'react';
import PropertyAddForm from './PropertyAddForm';
import PropertyTable from './PropertyTable';

const Property = async () => {
    return (
        <div>
            <PropertyAddForm />
            <Suspense fallback={<>....Loading</>}>
                <PropertyTable />
            </Suspense>
        </div>
    );
};

export default Property;
