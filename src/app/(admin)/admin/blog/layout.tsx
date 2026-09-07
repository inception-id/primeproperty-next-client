import type { ReactNode } from "react";
import { AdminRouteGuard } from "../_components/admin-route-guard";

type BlogLayoutProps = {
  children: ReactNode;
};

export default function BlogLayout({ children }: BlogLayoutProps) {
  return <AdminRouteGuard>{children}</AdminRouteGuard>;
}
