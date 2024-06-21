'use client';
import ProfileToggle from "@/components/dashboard/UserIcon";
import ToolsBar from "@/components/dashboard/ToolsBar/ToolsBar";
import { setDepartments } from "@/lib/features/departmentSlice";
import { setOrganization, setOrgMembers } from "@/lib/features/organizationSlice";
import { useAppDispatch } from "@/lib/hooks/storeHooks";
import { useGetOrganizationQuery, useGetOrgMembersQuery } from "@/services/organization";
import { getOrgID } from "@/utils/helpers";
import { usePathname } from "next/navigation";
import { useCallback, useEffect } from "react";

export default function Dashboard({
    children,
}: {
  children: React.ReactNode
}
) {
    const pathname = usePathname();
    const orgID = getOrgID(pathname);
    const dispatch = useAppDispatch();
    const {
        data: orqData,
        isFetching: isOrgFetching,
        isLoading: isOrgLoading,
        isError: isOrgError
    } = useGetOrganizationQuery(orgID);
    const {
        data: OrgMembers,
        isFetching: isMembersFetching,
        isLoading: isMembersLoading,
        isError: isMembersError
    } = useGetOrgMembersQuery(orgID);

    // Combine loading, fetching and error states
    const isLoading = isOrgLoading || isMembersLoading;
    const isFetching = isOrgFetching || isMembersFetching;
    const isError = isOrgError || isMembersError;

    const setOrgInfo = useCallback(() => {
        try {
            dispatch(setOrganization(orqData?.org));
            dispatch(setDepartments(orqData?.org?.departments));
            dispatch(setOrgMembers(OrgMembers?.users));
        } catch (error) {
            console.error(error);
        }
    }, [orqData, OrgMembers, dispatch]);

    useEffect(() => {
        if (orqData && !isFetching) {
            setOrgInfo();
        }
    }, [orqData, isFetching, setOrgInfo]);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error...</div>;
    return (
        <main className="dd-canvas">
            <aside className="dd-canvas__sidebar">
            <ToolsBar />
            <ProfileToggle />
            </aside>
            <section className="dd-canvas__content">
            {children}
            </section>
      </main>
    )
};