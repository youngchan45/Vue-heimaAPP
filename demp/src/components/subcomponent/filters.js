// const vfilter={
//     timeset： str => {
//         var dt = new Date(str);
//         var y = dt.getFullYear();
//         var m = ("0" + (dt.getMonth() + 1)).slice(-2);
//         var d = ("0" + dt.getDate()).slice(-2);
//         var h = ("0" + dt.getHours()).slice(-2);
//         var mm = ("0" + dt.getMinutes()).slice(-2);
//         // var s= ('0'+dt.getSeconds()).slice(-2)
//         var s = dt
//           .getSeconds()
//           .toString()
//           .padStart(2, "0");
      
//         return `${y}-${m}-${d} ${h}:${mm}:${s}`;
//       };
// }

// export default vfilter