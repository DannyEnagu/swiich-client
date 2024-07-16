'use client';
import { useCallback, useEffect } from "react";
import { usePathname } from "next/navigation";
import ProfileToggle from "@/components/dashboard/UserIcon";
import ToolsBar from "@/components/dashboard/ToolsBar/ToolsBar";
import { setDepartments, selectDept } from "@/lib/features/departmentSlice";
import { setOrganization, setOrgMembers, selectOrganization } from "@/lib/features/organizationSlice";
import { useAppDispatch } from "@/lib/hooks/storeHooks";
import { useGetOrganizationQuery, useGetOrgMembersQuery } from "@/services/organization";
import { getOrgID } from "@/utils/helpers";
import { useAppSelector } from "@/lib/hooks";
import { selectUser } from "@/lib/features/authSlice";
import useSocketConnection from "@/lib/hooks/useSocketConnection";


export default function Dashboard({
    children,
}: {
  children: React.ReactNode
}
) {
    const pathname = usePathname();
    const orgID = getOrgID(pathname);
    const dispatch = useAppDispatch();
    const userId = useAppSelector(selectUser)?.id;
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

    useSocketConnection(userId);

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