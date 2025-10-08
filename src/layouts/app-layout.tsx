import { type ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { AppContent } from "@/components/app-content";
import { AppSidebarHeader } from "@/components/app-sidebar-header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <AppContent>
        <AppSidebarHeader />
        {children}
      </AppContent>
    </SidebarProvider>
  );
}
