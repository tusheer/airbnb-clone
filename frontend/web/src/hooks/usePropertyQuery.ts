'use client';

import { PropertyFilterQueryType } from '@airbnb/schema';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

type QueryParamSchema = PropertyFilterQueryType;

export default function useQueryParams() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const params = new URLSearchParams(searchParams);
    // Parse the query parameters from the URL using your schema
    const queryParams: QueryParamSchema = useMemo(() => {
        const parsedQuery = {} as QueryParamSchema;

        params.forEach((value, key) => {
            switch (key) {
                case 'bed':
                case 'bath':
                case 'region':
                case 'types':
                case 'placeType':
                    (parsedQuery as any)[key] = value as string | number | boolean;
                    break;
                case 'tags':
                    (parsedQuery as any)[key] = Number(value) as string | number | boolean;
                    break;
                case 'price.min':
                case 'price.max':
                    (parsedQuery as any).price = {
                        ...(parsedQuery as any).price,
                        [key.split('.')[1]]: Number(value),
                    };
                    break;
                case 'vat':
                    parsedQuery[key] = value === 'true';
                    break;
                default:
                    break;
            }
        });

        return parsedQuery;
    }, [params]);

    // Update the URL when queryParams change

    // Functions to add/update/query parameters
    const setQueryParam = (query: QueryParamSchema) => {
        const newQuery = { ...query } as Record<string, string>;
        router.push(`/?${new URLSearchParams(newQuery)}`);
    };

    const removeQueryParam = (key: string) => {
        if (queryParams.hasOwnProperty(key)) {
            const newQuery = { ...queryParams } as Record<string, string>;
            delete (newQuery as any)[key];
            router.push(`/?${new URLSearchParams(newQuery)}`);
        }
    };

    const removeAllQueryParams = () => {
        router.push(`/`);
    };

    return {
        queryParams,
        setQueryParam,
        removeQueryParam,
        removeAllQueryParams,
    };
}
