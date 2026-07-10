interface SidebarLayoutProps {
  children: React.ReactNode;
}

export default function SidebarLayout({ children }: SidebarLayoutProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="flex justify-center gap-8">
        {/* Main content */}
        <div className="flex-1 max-w-4xl min-w-0">{children}</div>
      </div>
    </div>
  );
}
