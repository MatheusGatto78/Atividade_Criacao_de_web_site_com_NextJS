export default function Footer() {
    return (
        <footer className="mt-12 border-t bg-white">
            <div className="container mx-auto max-w-5xl p-4 text-sm text-gray-500">
                © {new Date().getFullYear()} MeuSite. Todos os direitos reservados.
            </div>
        </footer>
    );
}