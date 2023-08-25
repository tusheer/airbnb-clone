import Link from 'next/link';

const AdminPage = async () => {
    return (
        <div className="px-7">
            <h1 className="text-3xl font-bold">Admin Page</h1>
            <div>
                <Link href={'/admin/property'}> Property </Link>
            </div>
            <div>
                <Link href={'/admin/tags'}> Tags </Link>
            </div>
        </div>
    );
};

export default AdminPage;
