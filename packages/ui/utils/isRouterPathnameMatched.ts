import { isStringInclude } from './isStringInclude';

export const isRouterPathnameMatched = (pathname: string, routerPath: string, exact: boolean) => {
    let isMatch = false;

    if (exact) {
        isMatch = pathname === routerPath;
    } else {
        isMatch = isStringInclude(routerPath, pathname);
    }

    return isMatch;
};
