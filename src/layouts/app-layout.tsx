import { type ReactNode } from "react";
import { BreadcrumbItem } from "@/types";
import AppLayoutTemplate from "@/layouts/app/app-sidebar-layout";

interface AppLayoutProps {
  children: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => {
  return (
    <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
      {children}
    </AppLayoutTemplate>
  );
};
