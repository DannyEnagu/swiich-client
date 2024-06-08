'use client';

import FilterableNav from "@/components/dashboard/Nav/FilterableNav";
import { useCallback } from "react";



export default function GroupContacts() {
    const groups: NavProps[] = [];
    const handleAdd  = useCallback(() => {
        console.log("Add Group");
    }, []);
    return (
        <FilterableNav
            items={groups}
            CreateButtonProps={{
                title: "Create Group",
                displayText: "Add Group"
            }}
        />
    );
}