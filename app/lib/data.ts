"use server"

import { AxiosError } from "axios";
import { unstable_noStore as noStore } from "next/cache";
import { MessageResponse, OverviewResponse, SingleMessageResponse, UpdateMessageResponse } from "./definitions";
import http from "./http";
import { user } from "./user";

export async function fetchOverview():Promise<OverviewResponse | undefined> {
    noStore();
    try {
        const res = await http.get<OverviewResponse>(`/${user.id}`);
        if (res.status == 200) {
            return res.data;
        }
        return undefined;
    } catch (error) {
        if (error instanceof AxiosError && error.response && error.response.data) {
            return error.response.data;
        }
        return undefined;
    }
  }

  export async function fetchMessages():Promise<MessageResponse | undefined> {
    noStore();
    try {
        const res = await http.get<MessageResponse>(`/${user.id}/messages`);
        if (res.status == 200) {
            return res.data;
        }
        return undefined;
    } catch (error) {
        if (error instanceof AxiosError && error.response && error.response.data) {
            return error.response.data;
        }
        return undefined;
    }
  }

  export async function fetchSingleMessage(id: number):Promise<SingleMessageResponse | undefined> {
    noStore();
    try {
        const res = await http.get<SingleMessageResponse>(`/messages/${id}`);
        if (res.status == 200) {
            return res.data;
        }
        return undefined;
    } catch (error) {
        if (error instanceof AxiosError && error.response && error.response.data) {
            return error.response.data;
        }
        return undefined;
    }
  }

  export async function updateMessage(id: number):Promise<UpdateMessageResponse | undefined> {
    noStore();
    try {
        const res = await http.put<UpdateMessageResponse>(`/messages/${id}`);
        if (res.status == 200) {
            return res.data;
        }
        return undefined;
    } catch (error) {
        if (error instanceof AxiosError && error.response && error.response.data) {
            return error.response.data;
        }
        return undefined;
    }
  }