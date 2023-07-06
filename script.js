//your JS code here. If required.
// function callme(){
// 	const divElement=document.getElementById("output")
// divElement.innerHTML="Hello, world!"
// }
// window.setTimeout(callme,1000)

function generatePromise(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
				resolve("Hello, world!")
	
		},1000)
	
}
generatePromise().then((data)=>{
const divElement=document.getElementById("output")
divElement.innerText=data;
})

