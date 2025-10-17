import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { UserMenuContent } from "./user-menu-content";
import { UserInfo } from "@/components/user-info";
import { useIsMobile } from "@/hooks/use-mobile";
import { type SharedData, type User } from "@/types";
import { ChevronsUpDown } from "lucide-react";

export function NavUser() {
  const { state } = useSidebar();
  const isMobile = useIsMobile();

  const user: User = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://example.com/avatar.jpg",
    email_verified_at: null,
    created_at: "2023-01-01T00:00:00Z",
    updated_at: "2023-01-01T00:00:00Z",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton
          size="lg"
          className="group text-sidebar-accent-foreground data-[state=open]:bg-sidebar-accent"
          data-test="sidebar-menu-button"
        >
          <UserInfo user={user} />
          <ChevronsUpDown className="ml-auto size-4" />
        </SidebarMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
        align="end"
        side={isMobile ? "bottom" : state === "collapsed" ? "left" : "bottom"}
      >
        <UserMenuContent user={user} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
