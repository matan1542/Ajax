function getDetails(onSuccess) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState != 4 || xhr.status != 200) return;
        var data = JSON.parse(xhr.responseText);
        onSuccess(data);
    }
    xhr.open("GET", "http://www.filltext.com?rows=5&fName={firstName}&lName={lastName}&busAddress={business}&livingAddress={streetAddress}&email={email}", true);

   
    xhr.send();
}