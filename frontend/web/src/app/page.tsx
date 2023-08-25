import { Suspense } from 'react';

import User from './User';

export default async function Page() {
    return (
        <div>
            <Suspense fallback={<div>...loading</div>}>
                <User />
            </Suspense>
        </div>
    );
}
