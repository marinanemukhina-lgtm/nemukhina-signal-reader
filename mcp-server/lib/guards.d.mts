export const MAX_RESULTS: number;
export function checkedQuery(input: unknown): string;
export function checkedGithubId(id: unknown): {owner: string; repo: string};
export function checkedDoi(value: unknown): string;
export function clipped(value: unknown, max?: number): string;
export function safeLimit(n: number | undefined): number;
