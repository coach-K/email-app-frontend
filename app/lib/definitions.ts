export type User = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    createdAt: string;
    updatedAt: string;
}

export type Message ={
    id: number;
    userId: number;
    subject: string;
    content: string;
    isRead: boolean;
    createdAt: string;
    updatedAt: string;
    user?: User;
}

export type MessageData = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    messages: Message[];
}

export type MessageResponse = {
    status: number;
    message: string;
    data?: MessageData;
}

export type OverviewData = {
    allMessage: number;
    unreadMessage: number;
    user: User;
}

export type OverviewResponse ={
    status: number;
    message: string;
    data?: OverviewData;
}

export type SingleMessageResponse ={
    status: number;
    message: string;
    data?: Message;
}

export type UpdateMessageResponse ={
    status: number;
    message: string;
    data?: any;
}