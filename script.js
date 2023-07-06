function generatePromise(){
	return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello, world!")
        })
    })
	
}
generatePromise().then((data)=>{
const divElement=document.getElementById("output")
divElement.innerText=data;
})
