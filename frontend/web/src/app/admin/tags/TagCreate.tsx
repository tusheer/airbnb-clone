'use client';
import { propertyTagCreateSchema, PropertyTagsCrateType } from '@airbnb/schema';
import { Button, TextInput } from '@airbnb/ui/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { trpc } from '../../../config/trpc';

const TagCrateForm = () => {
    const { register, handleSubmit, reset } = useForm<PropertyTagsCrateType>({
        resolver: zodResolver(propertyTagCreateSchema),
    });

    const { mutateAsync } = trpc.property.createTag.useMutation();

    const trpcUtils = trpc.useContext();

    return (
        <div className="mb-10">
            <h1 className="mb-6 pt-7 text-xl font-semibold">Add Tag</h1>
            <form
                className="flex flex-col space-y-4"
                onSubmit={handleSubmit(async (data: PropertyTagsCrateType) => {
                    await mutateAsync(data);
                    await trpcUtils.property.getTags.invalidate();
                    reset();
                })}
            >
                <div className="flex gap-5">
                    <TextInput label="Name" placeholder="Name" {...register('name')} />
                    <TextInput label="Image url" placeholder="Image Url" {...register('image')} />
                </div>

                <div>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </div>
    );
};

export default TagCrateForm;
