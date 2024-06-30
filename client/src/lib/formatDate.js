export default function formatDate(dateString) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const suffixes = ["th", "st", "nd", "rd"];
    
    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    const daySuffix = (day % 10 <= 3 && day % 10 > 0 && parseInt((day % 100) / 10) !== 1) ? suffixes[day % 10] : suffixes[0];
    
    return `${day}${daySuffix} ${month} ${year}`;
}