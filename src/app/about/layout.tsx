import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Encore Tickets",
    description: "Encore Tickets",
};

export default function ChildLayout({
                                        children,
                                    }: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
