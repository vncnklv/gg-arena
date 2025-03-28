export const getStatusFromTimestamps = (startDate, endDate) => {
    const currentDate = Date.now();
    let status = '';

    if(!startDate || !endDate) {
        return status;
    }

    if(startDate < currentDate && endDate > currentDate) {
        status = 'ongoing'
    } else if (endDate < currentDate) {
        status = 'completed'
    } else {
        status = 'pending'
    }

    return status;
}