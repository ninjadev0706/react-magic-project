export type DataState = {
    data?: string,
    loading?: boolean,
    success?: boolean
};

export type DataContextProps = {
    dataState: DataState;
    success: (data: string) => void;
};

export type DataActions = 
    | { type: 'DATA_SEND_REQUEST'}
    | { type: 'DATA_SEND_SUCCESS', payload: string }
    | { type: 'DATA_SEND_FAIL', payload: string };