let cells =document.getElementsByClassName("cell");
// console.log(cells);
// ( (ele) => {
//     ele.onClick=function(){
//         ele.classList.togle("open");
//     }
// });
for (let i =0 ;i<cells.length; i++){
    let ele=cells[i];
    console.log(ele);
    ele.addEventListener("click",
        function (){
            console.log(ele);
            for (let j =0 ;j<cells.length; j++){
                let ele1=cells[j];
                if (ele1 === ele )continue;
                ele1.classList.remove("open");
                ele1.classList.remove("z-full");
            }
            ele.classList.toggle("open");
            ele.classList.toggle("z-full");
        }
    );
}