export type Departure = {
    estimated_departure_utc: string;
    platform_number: string;
    route_id: number;
    run_ref: string;
    scheduled_departure_utc: string;
}

export type Run = {
    run_ref: string;
    destination_name: string;
    express_stop_count: number;
}
