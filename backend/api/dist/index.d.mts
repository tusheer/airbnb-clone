import * as _trpc_server from '@trpc/server';
import * as superjson from 'superjson';
import * as _trpc_server_dist_rpc from '@trpc/server/dist/rpc';
import * as zod from 'zod';
import * as qs from 'qs';
import * as express_serve_static_core from 'express-serve-static-core';
import * as express from 'express';
import express__default from 'express';
import { inferAsyncReturnType } from '@airbnb/trpc/server';
import { CreateExpressContextOptions } from '@airbnb/trpc/express';

declare const createContext: ({ req, res }: CreateExpressContextOptions) => {
    req: express.Request<express_serve_static_core.ParamsDictionary, any, any, qs.ParsedQs, Record<string, any>>;
    res: express.Response<any, Record<string, any>>;
};
type Context = inferAsyncReturnType<typeof createContext>;

declare const appRouter: _trpc_server.CreateRouterInner<_trpc_server.RootConfig<{
    ctx: {
        req: express__default.Request<express_serve_static_core.ParamsDictionary, any, any, qs.ParsedQs, Record<string, any>>;
        res: express__default.Response<any, Record<string, any>>;
    };
    meta: object;
    errorShape: {
        data: {
            zodError: zod.typeToFlattenedError<any, string> | null;
            code: "PARSE_ERROR" | "BAD_REQUEST" | "INTERNAL_SERVER_ERROR" | "NOT_IMPLEMENTED" | "UNAUTHORIZED" | "FORBIDDEN" | "NOT_FOUND" | "METHOD_NOT_SUPPORTED" | "TIMEOUT" | "CONFLICT" | "PRECONDITION_FAILED" | "PAYLOAD_TOO_LARGE" | "UNPROCESSABLE_CONTENT" | "TOO_MANY_REQUESTS" | "CLIENT_CLOSED_REQUEST";
            httpStatus: number;
            path?: string | undefined;
            stack?: string | undefined;
        };
        message: string;
        code: _trpc_server_dist_rpc.TRPC_ERROR_CODE_NUMBER;
    };
    transformer: typeof superjson.default;
}>, {
    property: _trpc_server.CreateRouterInner<_trpc_server.RootConfig<{
        ctx: {
            req: express__default.Request<express_serve_static_core.ParamsDictionary, any, any, qs.ParsedQs, Record<string, any>>;
            res: express__default.Response<any, Record<string, any>>;
        };
        meta: object;
        errorShape: {
            data: {
                zodError: zod.typeToFlattenedError<any, string> | null;
                code: "PARSE_ERROR" | "BAD_REQUEST" | "INTERNAL_SERVER_ERROR" | "NOT_IMPLEMENTED" | "UNAUTHORIZED" | "FORBIDDEN" | "NOT_FOUND" | "METHOD_NOT_SUPPORTED" | "TIMEOUT" | "CONFLICT" | "PRECONDITION_FAILED" | "PAYLOAD_TOO_LARGE" | "UNPROCESSABLE_CONTENT" | "TOO_MANY_REQUESTS" | "CLIENT_CLOSED_REQUEST";
                httpStatus: number;
                path?: string | undefined;
                stack?: string | undefined;
            };
            message: string;
            code: _trpc_server_dist_rpc.TRPC_ERROR_CODE_NUMBER;
        };
        transformer: typeof superjson.default;
    }>, {
        getProperties: _trpc_server.BuildProcedure<"query", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    req: express__default.Request<express_serve_static_core.ParamsDictionary, any, any, qs.ParsedQs, Record<string, any>>;
                    res: express__default.Response<any, Record<string, any>>;
                };
                meta: object;
                errorShape: {
                    data: {
                        zodError: zod.typeToFlattenedError<any, string> | null;
                        code: "PARSE_ERROR" | "BAD_REQUEST" | "INTERNAL_SERVER_ERROR" | "NOT_IMPLEMENTED" | "UNAUTHORIZED" | "FORBIDDEN" | "NOT_FOUND" | "METHOD_NOT_SUPPORTED" | "TIMEOUT" | "CONFLICT" | "PRECONDITION_FAILED" | "PAYLOAD_TOO_LARGE" | "UNPROCESSABLE_CONTENT" | "TOO_MANY_REQUESTS" | "CLIENT_CLOSED_REQUEST";
                        httpStatus: number;
                        path?: string | undefined;
                        stack?: string | undefined;
                    };
                    message: string;
                    code: _trpc_server_dist_rpc.TRPC_ERROR_CODE_NUMBER;
                };
                transformer: typeof superjson.default;
            }>;
            _meta: object;
            _ctx_out: {
                req: express__default.Request<express_serve_static_core.ParamsDictionary, any, any, qs.ParsedQs, Record<string, any>>;
                res: express__default.Response<any, Record<string, any>>;
            };
            _input_in: {
                price?: {
                    min: number;
                    max: number;
                } | undefined;
                bed?: number | undefined;
                bath?: number | undefined;
                region?: "europe" | "canada" | "asia" | "united_kingdom" | "united_states" | null | undefined;
                types?: "house" | "apartment" | "guesthouse" | "hotel" | null | undefined;
                placeType?: "room" | "entire_home" | null | undefined;
                tags?: number | undefined;
                vat?: boolean | undefined;
            } | undefined;
            _input_out: {
                price?: {
                    min: number;
                    max: number;
                } | undefined;
                bed?: number | undefined;
                bath?: number | undefined;
                region?: "europe" | "canada" | "asia" | "united_kingdom" | "united_states" | null | undefined;
                types?: "house" | "apartment" | "guesthouse" | "hotel" | null | undefined;
                placeType?: "room" | "entire_home" | null | undefined;
                tags?: number | undefined;
                vat?: boolean | undefined;
            } | undefined;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
        }, {
            property: {
                price: number | null;
                bed: number;
                bath: number;
                id: number;
                name: string;
                description: string;
                location: string;
                ownerName: string;
                ownerPhone: string;
                area: number;
                created_at: Date | null;
                updated_at: Date | null;
                rating: number | null;
                region: "europe" | "canada" | "asia" | "united_kingdom" | "united_states" | null;
                types: "house" | "apartment" | "guesthouse" | "hotel" | null;
                images: {
                    url: string;
                }[] | null;
                placeType: "room" | "entire_home" | null;
                vat: boolean | null;
            }[];
        }>;
        createProperty: _trpc_server.BuildProcedure<"mutation", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    req: express__default.Request<express_serve_static_core.ParamsDictionary, any, any, qs.ParsedQs, Record<string, any>>;
                    res: express__default.Response<any, Record<string, any>>;
                };
                meta: object;
                errorShape: {
                    data: {
                        zodError: zod.typeToFlattenedError<any, string> | null;
                        code: "PARSE_ERROR" | "BAD_REQUEST" | "INTERNAL_SERVER_ERROR" | "NOT_IMPLEMENTED" | "UNAUTHORIZED" | "FORBIDDEN" | "NOT_FOUND" | "METHOD_NOT_SUPPORTED" | "TIMEOUT" | "CONFLICT" | "PRECONDITION_FAILED" | "PAYLOAD_TOO_LARGE" | "UNPROCESSABLE_CONTENT" | "TOO_MANY_REQUESTS" | "CLIENT_CLOSED_REQUEST";
                        httpStatus: number;
                        path?: string | undefined;
                        stack?: string | undefined;
                    };
                    message: string;
                    code: _trpc_server_dist_rpc.TRPC_ERROR_CODE_NUMBER;
                };
                transformer: typeof superjson.default;
            }>;
            _meta: object;
            _ctx_out: {
                req: express__default.Request<express_serve_static_core.ParamsDictionary, any, any, qs.ParsedQs, Record<string, any>>;
                res: express__default.Response<any, Record<string, any>>;
            };
            _input_in: {
                price: number | null;
                bed: number;
                bath: number;
                name: string;
                description: string;
                location: string;
                ownerName: string;
                ownerPhone: string;
                area: number;
                rating: number | null;
                region: "europe" | "canada" | "asia" | "united_kingdom" | "united_states" | null;
                types: "house" | "apartment" | "guesthouse" | "hotel" | null;
                images: {
                    url: string;
                }[] | null;
                placeType: "room" | "entire_home" | null;
                vat: boolean | null;
                tags: {
                    id: number;
                }[];
            };
            _input_out: {
                price: number | null;
                bed: number;
                bath: number;
                name: string;
                description: string;
                location: string;
                ownerName: string;
                ownerPhone: string;
                area: number;
                rating: number | null;
                region: "europe" | "canada" | "asia" | "united_kingdom" | "united_states" | null;
                types: "house" | "apartment" | "guesthouse" | "hotel" | null;
                images: {
                    url: string;
                }[] | null;
                placeType: "room" | "entire_home" | null;
                vat: boolean | null;
                tags: {
                    id: number;
                }[];
            };
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
        }, {
            price: number | null;
            bed: number;
            bath: number;
            id: number;
            name: string;
            description: string;
            location: string;
            ownerName: string;
            ownerPhone: string;
            area: number;
            created_at: Date | null;
            updated_at: Date | null;
            rating: number | null;
            region: "europe" | "canada" | "asia" | "united_kingdom" | "united_states" | null;
            types: "house" | "apartment" | "guesthouse" | "hotel" | null;
            images: {
                url: string;
            }[] | null;
            placeType: "room" | "entire_home" | null;
            vat: boolean | null;
        }[]>;
        deleteProperty: _trpc_server.BuildProcedure<"mutation", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    req: express__default.Request<express_serve_static_core.ParamsDictionary, any, any, qs.ParsedQs, Record<string, any>>;
                    res: express__default.Response<any, Record<string, any>>;
                };
                meta: object;
                errorShape: {
                    data: {
                        zodError: zod.typeToFlattenedError<any, string> | null;
                        code: "PARSE_ERROR" | "BAD_REQUEST" | "INTERNAL_SERVER_ERROR" | "NOT_IMPLEMENTED" | "UNAUTHORIZED" | "FORBIDDEN" | "NOT_FOUND" | "METHOD_NOT_SUPPORTED" | "TIMEOUT" | "CONFLICT" | "PRECONDITION_FAILED" | "PAYLOAD_TOO_LARGE" | "UNPROCESSABLE_CONTENT" | "TOO_MANY_REQUESTS" | "CLIENT_CLOSED_REQUEST";
                        httpStatus: number;
                        path?: string | undefined;
                        stack?: string | undefined;
                    };
                    message: string;
                    code: _trpc_server_dist_rpc.TRPC_ERROR_CODE_NUMBER;
                };
                transformer: typeof superjson.default;
            }>;
            _meta: object;
            _ctx_out: {
                req: express__default.Request<express_serve_static_core.ParamsDictionary, any, any, qs.ParsedQs, Record<string, any>>;
                res: express__default.Response<any, Record<string, any>>;
            };
            _input_in: {
                id: number;
            };
            _input_out: {
                id: number;
            };
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
        }, {
            price: number | null;
            bed: number;
            bath: number;
            id: number;
            name: string;
            description: string;
            location: string;
            ownerName: string;
            ownerPhone: string;
            area: number;
            created_at: Date | null;
            updated_at: Date | null;
            rating: number | null;
            region: "europe" | "canada" | "asia" | "united_kingdom" | "united_states" | null;
            types: "house" | "apartment" | "guesthouse" | "hotel" | null;
            images: {
                url: string;
            }[] | null;
            placeType: "room" | "entire_home" | null;
            vat: boolean | null;
        }[]>;
        getTags: _trpc_server.BuildProcedure<"query", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    req: express__default.Request<express_serve_static_core.ParamsDictionary, any, any, qs.ParsedQs, Record<string, any>>;
                    res: express__default.Response<any, Record<string, any>>;
                };
                meta: object;
                errorShape: {
                    data: {
                        zodError: zod.typeToFlattenedError<any, string> | null;
                        code: "PARSE_ERROR" | "BAD_REQUEST" | "INTERNAL_SERVER_ERROR" | "NOT_IMPLEMENTED" | "UNAUTHORIZED" | "FORBIDDEN" | "NOT_FOUND" | "METHOD_NOT_SUPPORTED" | "TIMEOUT" | "CONFLICT" | "PRECONDITION_FAILED" | "PAYLOAD_TOO_LARGE" | "UNPROCESSABLE_CONTENT" | "TOO_MANY_REQUESTS" | "CLIENT_CLOSED_REQUEST";
                        httpStatus: number;
                        path?: string | undefined;
                        stack?: string | undefined;
                    };
                    message: string;
                    code: _trpc_server_dist_rpc.TRPC_ERROR_CODE_NUMBER;
                };
                transformer: typeof superjson.default;
            }>;
            _ctx_out: {
                req: express__default.Request<express_serve_static_core.ParamsDictionary, any, any, qs.ParsedQs, Record<string, any>>;
                res: express__default.Response<any, Record<string, any>>;
            };
            _input_in: typeof _trpc_server.unsetMarker;
            _input_out: typeof _trpc_server.unsetMarker;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
            _meta: object;
        }, {
            tags: {
                id: number;
                name: string;
                image: string;
            }[];
        }>;
        createTag: _trpc_server.BuildProcedure<"mutation", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    req: express__default.Request<express_serve_static_core.ParamsDictionary, any, any, qs.ParsedQs, Record<string, any>>;
                    res: express__default.Response<any, Record<string, any>>;
                };
                meta: object;
                errorShape: {
                    data: {
                        zodError: zod.typeToFlattenedError<any, string> | null;
                        code: "PARSE_ERROR" | "BAD_REQUEST" | "INTERNAL_SERVER_ERROR" | "NOT_IMPLEMENTED" | "UNAUTHORIZED" | "FORBIDDEN" | "NOT_FOUND" | "METHOD_NOT_SUPPORTED" | "TIMEOUT" | "CONFLICT" | "PRECONDITION_FAILED" | "PAYLOAD_TOO_LARGE" | "UNPROCESSABLE_CONTENT" | "TOO_MANY_REQUESTS" | "CLIENT_CLOSED_REQUEST";
                        httpStatus: number;
                        path?: string | undefined;
                        stack?: string | undefined;
                    };
                    message: string;
                    code: _trpc_server_dist_rpc.TRPC_ERROR_CODE_NUMBER;
                };
                transformer: typeof superjson.default;
            }>;
            _meta: object;
            _ctx_out: {
                req: express__default.Request<express_serve_static_core.ParamsDictionary, any, any, qs.ParsedQs, Record<string, any>>;
                res: express__default.Response<any, Record<string, any>>;
            };
            _input_in: {
                name: string;
                image: string;
            };
            _input_out: {
                name: string;
                image: string;
            };
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
        }, {
            id: number;
            name: string;
            image: string;
        }[]>;
        deleteTag: _trpc_server.BuildProcedure<"mutation", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    req: express__default.Request<express_serve_static_core.ParamsDictionary, any, any, qs.ParsedQs, Record<string, any>>;
                    res: express__default.Response<any, Record<string, any>>;
                };
                meta: object;
                errorShape: {
                    data: {
                        zodError: zod.typeToFlattenedError<any, string> | null;
                        code: "PARSE_ERROR" | "BAD_REQUEST" | "INTERNAL_SERVER_ERROR" | "NOT_IMPLEMENTED" | "UNAUTHORIZED" | "FORBIDDEN" | "NOT_FOUND" | "METHOD_NOT_SUPPORTED" | "TIMEOUT" | "CONFLICT" | "PRECONDITION_FAILED" | "PAYLOAD_TOO_LARGE" | "UNPROCESSABLE_CONTENT" | "TOO_MANY_REQUESTS" | "CLIENT_CLOSED_REQUEST";
                        httpStatus: number;
                        path?: string | undefined;
                        stack?: string | undefined;
                    };
                    message: string;
                    code: _trpc_server_dist_rpc.TRPC_ERROR_CODE_NUMBER;
                };
                transformer: typeof superjson.default;
            }>;
            _meta: object;
            _ctx_out: {
                req: express__default.Request<express_serve_static_core.ParamsDictionary, any, any, qs.ParsedQs, Record<string, any>>;
                res: express__default.Response<any, Record<string, any>>;
            };
            _input_in: {
                id: number;
            };
            _input_out: {
                id: number;
            };
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
        }, {
            id: number;
            name: string;
            image: string;
        }[]>;
    }>;
}>;
type AppRouter = typeof appRouter;

export { AppRouter, Context, appRouter };
