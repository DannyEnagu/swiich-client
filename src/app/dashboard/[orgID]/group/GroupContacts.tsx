'use client';

import FilterableNav from "@/components/dashboard/Nav/FilterableNav";
import { selectDept } from "@/lib/features/departmentSlice";
import { useAppSelector } from "@/lib/hooks/storeHooks";
import { useCallback } from "react";



export default function GroupContacts() {
    const depts = useAppSelector(selectDept);
    const departments: NavProps[] = depts.map((dept) => ({
        groupID: dept.id,
        groupTitle: dept.name,
        groupMembers: [],
        groupImg: "",
        isPublicGroup: true,
        groupMsgCount: 0,
        type: "group",
    }));
    const handleAdd  = useCallback(() => {
        console.log("Add Group");
    }, []);
    return (
        <FilterableNav
            items={departments}
            CreateButtonProps={{
                title: "Create Group",
                displayText: "Add Group"
            }}
        />
    );
}