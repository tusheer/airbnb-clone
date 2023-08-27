import { Suspense } from 'react';

import User from './Propeties';

export default async function Page() {
    return (
        <div>
            <Suspense fallback={<div>...loading</div>}>
                <User />
            </Suspense>
        </div>
    );
}
