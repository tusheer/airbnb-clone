import { Suspense } from 'react';
import TagCrateForm from './TagCreate';
import TagsTable from './TagsTable';

const Tags = () => {
    return (
        <div className="container mx-auto mt-10">
            <TagCrateForm />
            <Suspense fallback={<div>...loading</div>}>
                <TagsTable />
            </Suspense>
        </div>
    );
};

export default Tags;
