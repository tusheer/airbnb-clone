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
            <Suspense fallback={<div></div>}>
                <TagsBar />
            </Suspense>

            <Suspense>
                <VatFilter />
            </Suspense>
            <Suspense fallback={<div></div>}>
                <Properties />
            </Suspense>
            <Footer />
        </div>
    );
}
