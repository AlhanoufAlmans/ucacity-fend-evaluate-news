import { checkForName } from './nameChecker';
    // check what text was put into the form field
   // let formText = document.getElementById('name').value;
// function handleSubmit(event) {
//     event.preventDefault()
//         // Get input
//         const url = document.getElementById('name').value;
//         const text = document.getElementById("statement").value;
//         checkForName(url)
//         if (!text) return;
//         console.log(text);

//             fetch('http://localhost:8081/address', {
//                 method: "POST",
//                 mode: "cors",
//                 credentials: "same-origin",
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ text: url })
//             })

//             .then(res => res.json())
//             .then((res)=>{
//                 document.getElementById('polarity').innerHTML = res.polarity
//                 document.getElementById('subjectivity').innerHTML = res.subjectivity
//                 document.getElementById('polarityC').innerHTML = res.polarityC
//                 document.getElementById('subjectivityC').innerHTML = res.subjectivityC
//             })
//             .then((res)=>{document.getElementById('results').innerHTML = res.message})
 
//         return false}
function handleSubmit(event) {
    event.preventDefault()
        // Get input
        const url = document.getElementById('name').value;
        const text = document.getElementById("statement").value;
        checkForName(url)
        // Verify the URL 
        if(Client.checkerForName(url)){
            console.log("valid input")

            fetch('http://localhost:8081/address', {
                method: "POST",
                mode: "cors",
                credentials: "same-origin",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: url })
            })

            .then(res => res.json())
            .then((res)=>{
                document.getElementById('polarity').innerHTML = res.polarity
                document.getElementById('subjectivity').innerHTML = res.subjectivity
                document.getElementById('polarityC').innerHTML = res.polarityC
                document.getElementById('subjectivityC').innerHTML = res.subjectivityC
            })
        .then(document.getElementById('results').innerHTML = res.message)}
            else{
                alert("url invalid");
                document.getElementById('results').classList.toggle('dissapear')}
 
        return false}



export { handleSubmit }