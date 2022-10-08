export function sendSms(phones: string, message: string, sender?: string, distributionId?: number): Promise<{
    cnt: number;
    error_code: number | null;
}>;
export function getCountry(phone: string): string;
