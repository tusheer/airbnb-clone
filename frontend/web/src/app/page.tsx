import { Suspense } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { default as Properties } from '../components/Propeties';
import TagsBar from '../components/TagsBar';
import VatFilter from '../components/VatFilter';

export const runtime = 'edge';

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Suspense fallback={<div className="hidden"></div>}>
                <TagsBar />
            </Suspense>
            <Suspense>
                <VatFilter />
            </Suspense>
            <Suspense fallback={<div className="hidden"></div>}>
                <Properties />
            </Suspense>
            <Footer />
        </div>
    );
};

export default Homepage;
