import createCache, { StylisPlugin } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { PropsWithChildren } from "react";
import stylisRTLPlugin from "stylis-plugin-rtl";

type CacheValue = {
   key: string;
   stylisPlugins?: StylisPlugin[];
};

const cache: CacheValue = createCache({
   key: "muirtl",
   stylisPlugins: [stylisRTLPlugin],
});

export default function CacheProviderFunc({ children }: PropsWithChildren) {
   return <CacheProvider value={cache}>{children}</CacheProvider>;
}
