export const statusHelper = {
    getStatus
}

const queue = "queue";
const executed = "executed";
const paid = "paid";
const cancelled = "cancelled";

function getStatus(n: number) {
    switch (n) {
        case 0:
            return queue;
        case 1:
            return executed;
        case 2:
            return paid;
        case 3:
            return cancelled;
        default:
            break;
    }
}