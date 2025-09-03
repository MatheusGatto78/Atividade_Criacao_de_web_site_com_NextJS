export default function Container({ children }: { children: React.ReactNode }) {
    return <div className="container mx-auto max-w-5xl p-4">{children}</div>;
}