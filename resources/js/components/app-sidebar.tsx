import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BellElectric, BookOpen, Flag, Folder, Forklift, Group, Images, LayoutGrid, PackageOpen, Ruler, Users, Waypoints } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Categories',
        href: '/categories',
        icon: PackageOpen,
    },
    {
        title: 'Etats',
        href: '/etatgroupement',
        icon: Waypoints,
    },
    {
        title: 'Groupements',
        href: '/groupements',
        icon: Group,
    },
    {
        title: 'Images',
        href: '/images_groupement',
        icon: Images,
    },
    {
        title: 'Logistiques',
        href: '/logistiques',
        icon: Forklift,
    },
    {
        title: 'Participants',
        href: '/participants',
        icon: BellElectric,
    },
    {
        title: 'Pays',
        href: '/pays',
        icon: Flag,
    },
    {
        title: 'Rôles',
        href: '/roles',
        icon: Ruler,
    },
    {
        title: 'Users',
        href: '/users',
        icon: Users,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
