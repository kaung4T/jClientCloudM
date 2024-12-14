export interface itemTypePrisma {
    id: string,
    task: string,
    updated_at: Date,
    created_at: Date
}

export interface getItemType {
    id: number,
    task: string
}

export interface itemType {
    id: number
    task: string
    updated_at: Date
};

export interface zodIssueType {
    message: string
};
