import { Suspense } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { default as Properties } from '../components/Propeties';
import TagsBar from '../components/TagsBar';
import VatFilter from '../components/VatFilter';

export const runtime = 'edge';
export const revalidate = 'force-cache';

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Suspense fallback={<div className="hidden">loading</div>}>
                <TagsBar />
            </Suspense>
            <Suspense>
                <VatFilter />
            </Suspense>
            <Suspense fallback={<div className="hidden">dffd</div>}>
                <Properties />
            </Suspense>
            <Footer />
        </div>
    );
};

export default Homepage;
