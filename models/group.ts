export interface IGroup {
    id: string;
    name: string;
}

export interface IGroupState {
    groups: IGroup[];
    group: IGroup | undefined;
    isloading: boolean;
    error: any
}

export const GroupStateInitial: IGroupState = {
    groups: [],
    group: undefined,
    isloading: false,
    error: undefined
}