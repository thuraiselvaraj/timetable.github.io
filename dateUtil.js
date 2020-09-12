var timings={
    first:['9.30-10.20',"AM"],
    second:['10.20-11.10',"AM"],
    third:['11.30-12.20',"AM"],
    fourth:['12.20-1.10',"PM"],
    fifth:['2.00-2.50',"PM"],
    sixth:['2.50-3.40',"PM"],
}
var perc=[];
var dateObj = new Date()
var time=dateObj.toLocaleTimeString()
var date=dateObj.toLocaleDateString()
timings.third[1]=+dateObj.getHours+1!=12 ? "AM" :"PM"
for(var i in timings){
    var ltime=timings[i][0].split("-")[0].split(".")
    var splitted=time.split(":")
    splitted[0]=ltime[0];
    splitted[1]=ltime[1];
    var newDate=new Date(date+","+splitted.join(":")+" "+timings[i][1])
    console.log(dateObj.toLocaleString(),newDate.toLocaleString())
    var min=Math.floor((dateObj-newDate)/60000)
    console.log(min)
    if(min>50){
    perc.push(100)
    }
    else if(min <50 && min >0){
        perc.push((min/50*100))
    }
    else{
        perc.push(0)
    }


}
console.log(perc);



