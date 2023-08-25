'use client';

import { trpc } from '../../../config/trpc';

const TagsTable = () => {
    const [data, { refetch }] = trpc.property.getTags.useSuspenseQuery();
    const { mutateAsync } = trpc.property.deleteTag.useMutation();

    return (
        <div>
            <h1 className="mb-10 text-xl font-semibold">Tags list</h1>
            <table className=" table  w-full min-w-[800px] overflow-x-auto">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.tags.map((tag) => (
                        <tr key={tag.id}>
                            <td>
                                <img id={tag.image} src={tag.image} alt={tag.image} className="h-5 w-5" />
                            </td>
                            <td>{tag.name}</td>
                            <td>
                                <button
                                    onClick={async () => {
                                        await mutateAsync({ id: tag.id });
                                        refetch();
                                    }}
                                    className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TagsTable;
