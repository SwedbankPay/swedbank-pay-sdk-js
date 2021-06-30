import { ProblemItem } from "./problemItem";

export interface Problem {
    action: string;
    detail: string;
    instance: string;
    problems: ProblemItem[];
    status: number;
    title: string;
    type: string;
}