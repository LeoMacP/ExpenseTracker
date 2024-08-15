async function registerUser(event) {
    const userName = document.getElementById('name').value;
    const userEmail = document.getElementById('email').value;

    const userInput = {
        name: userName,
        email: userEmail
    }

    try{

        const data = await fetch('/api/v1/userName',{
            method: 'POST',
            body: JSON.stringify(userInput)


        })

        const dataInJson = await data.json();

        const alertDiv = documentGetElementById("alert-section")
        alertDiv.innerHtml = '<div class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 text-white" role="alert"><span class="font-medium">User Successfully Created</span> Change a few things up and try submitting again.</div>'

        setTimeout(() => {alertDiv.innerHtml = ''}, 2000);

        window.location.href = "/userPage.html"

    } catch(error){
        console.log(error);
    
    }

}