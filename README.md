# ajaxbuddy

The bare minimum to get a simple form to post/get to a server and get a response without having to remember all that ajax syntax

## Usage
```html
<form onsubmit="ajaxbuddy.submitForm(event,success,fail)" action="/user" method="post">
    Email: <input type="text" name="Email" value="Email@example.com"><br>
    User Name: <input type="text" name="UserName" value="username"><br>
    First name: <input type="text" name="FirstName" value="Bruce"><br>
    Last name: <input type="text" name="LastName" value="Lee"><br>
    <input type="submit" value="Submit">
</form>
<br>
<form onsubmit="ajaxbuddy.submitForm(event,success,fail)" action="/user">
    Email: <input type="text" name="Email" value="Email@example.com"><br>
    <input type="submit" value="Submit">
</form>



<h2>Output</h2>
<pre id="output"></pre>



<script src="/static/js/ajaxbuddy.js"></script>
<script>
    function success(response){
        document.getElementById("output").innerHTML="SUCCESS:"+response.responseText;
    }
    function fail(response){
        //console.log(response)
        document.getElementById("output").innerHTML="FAIL:"+response.responseText;
    }
</script>
```
