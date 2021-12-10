// let year = parseInt(prompt("Enter a year"));
// if (year % 4 == 0) {
//     if (year % 100 == 0) {
//         if (year % 400 == 0) {
//             alert(year + " là năm nhuận");
//         } else {
//             alert(year + " không phải là năm nhuận");
//         }
//     } else {
//         alert(year + " là năm nhuận");
//     }
// } else {
//     alert(year + " không phải là năm nhuận");
// }
let year = parseInt(prompt("Enter a year"));
let isLeapYear = false;

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            isLeapYear = true;
        }
    } else {
        isLeapYear = true;
    }
}

if (isLeapYear) {
    alert(year + " is a leap year");
} else {
    alert(year + " is NOT a leap year");
}