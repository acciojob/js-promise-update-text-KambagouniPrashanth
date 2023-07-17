function generatePromise(){
	return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello, world!")
        },1000)
    })
	
}
generatePromise().then((data)=>{
const divElement=document.getElementById("output")
divElement.innerText=data;
})
