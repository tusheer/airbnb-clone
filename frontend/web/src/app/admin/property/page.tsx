import { Suspense } from 'react';
import PropertyTable from './PropertyTable';

const Property = async () => {
    return (
        <div>
            <Suspense fallback={<>....Loading</>}>
                <PropertyTable />
            </Suspense>
        </div>
    );
};

export default Property;
