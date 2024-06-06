interface Department {
    id: string | number;
    name: string;
    organisationID: string;
    createdAt: string;
    updatedAt: string;
};

interface Organization {
    id: string | number;
    name: string;
    departments: Department[];
    createdAt: string;
    updatedAt: string;
};

interface Project {
    id: string | number;
    name: string;
    organisationID: string;
    departmentID: string;
    createdAt: string;
    updatedAt: string;
};

interface Canvas {
    id: string | number;
    name: string;
    url: string;
};

interface CanvasRight {
    content: 'thread' | 'profile';
    isOpen: boolean; 
};

interface UISettings {
    rightCanvas: CanvasRight;
    activeCanvas: Canvas;
};