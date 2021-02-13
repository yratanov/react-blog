export default function formatDate(date) {
    let d = Date.parse(date); 
    console.log(d);
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getYear()}`;
}