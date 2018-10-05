export const statusHelper = {
    getStatus
}

function getStatus(n: number) {
    switch (n) {
        case 0:
            return "queue"//<Loc locKey="orders.table.statuses.queue" />;
        case 1:
            return "executed"//<Loc locKey="orders.table.statuses.execute" />;
        case 2:
            return "paid"//<Loc locKey="orders.table.statuses.paid" />;
        case 3:
            return "cancelled"//<Loc locKey="orders.table.statuses.canceled" />;
        default:
            break;
    }
}