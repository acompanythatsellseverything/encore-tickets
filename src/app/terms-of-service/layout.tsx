import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Encore Tickets: Terms of Service",
    description: "Encore Tickets",
};

export default function ChildLayout({
                                        children,
                                    }: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
