import { AppRouter } from '@airbnb/api';
import { createTRPCReact } from '@airbnb/trpc/react-query';

export const trpc = createTRPCReact<AppRouter>();
