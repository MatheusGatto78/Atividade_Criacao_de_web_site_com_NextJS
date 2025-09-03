type CardProps = {
    title: string;
    children?: React.ReactNode;
    footer?: React.ReactNode;
};


export default function Card({ title, children, footer }: CardProps) {
    return (
        <div className="rounded-2xl border bg-white shadow-sm">
            <div className="border-b p-4 font-semibold">{title}</div>
            <div className="p-4 space-y-2">{children}</div>
            {footer && <div className="border-t p-3 text-sm text-gray-500">{footer}</div>}
        </div>
    );
}