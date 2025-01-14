"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";

function Provider({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    );
}

export default Provider;