import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Encore Tickets: Privacy Policy",
    description: "Encore Tickets",
};

export default function ChildLayout({
                                        children,
                                    }: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
