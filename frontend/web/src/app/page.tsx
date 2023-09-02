import { Suspense } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { default as Properties } from '../components/Propeties';
import TagsBar from '../components/TagsBar';
import VatFilter from '../components/VatFilter';

export default async function Page() {
    return (
        <div>
            <Navbar />
            <Suspense fallback={'....'}>
                <TagsBar />
            </Suspense>

            <Suspense>
                <VatFilter />
            </Suspense>
            <Suspense fallback={'...loading'}>
                <Properties />
            </Suspense>
            <Footer />
        </div>
    );
}
