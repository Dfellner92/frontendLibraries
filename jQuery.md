### Learn How Script Tags and Document Ready Work

Now we're ready to learn jQuery, the most popular JavaScript tool of all time.

Before we can start using jQuery, we need to add some things to our HTML.

First, add a `script` element at the top of your page. Be sure to close it on the following line.

Your browser will run any JavaScript inside a `script` element, including jQuery.

Inside your `script` element, add this code: `$(document).ready(function() {` to your `script`. Then close it on the following line (still inside your `script` element) with: `});`

We'll learn more about `functions` later. The important thing to know is that code you put inside this `function` will run as soon as your browser has loaded your page.

This is important because without your `document ready function`, your code may run before your HTML is rendered, which would cause bugs

```javascript
<script>$(document).ready(function(){
});</script>
//Only change code above this line

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```

### Target HTML Elements with Selectors Using jQuery

```javascript
<script>
  $(document).ready(function() {
$("button").addClass("animated bounce");

  });
</script>
```

### Target Elements by Class Using jQuery

```javascript
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
  });
</script>
```

### Target Elements by Id Using jQuery

```javascript
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");
  });
</script>
```

### Target the Same Element with Multiple jQuery Selectors

```javascript
<script>
  $(document).ready(function() {
    $("button").addClass("animated");
    $(".btn").addClass("shake");
    $("#target1").addClass("btn-primary");
  });
</script>
```

### Remove Classes from an Element with jQuery

```javascript
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");
    $("button").removeClass("btn-default");
  });
</script>
```

### Change the CSS of an Element Using jQuery

```javascript
<script>
  $(document).ready(function() {
  $("#target1").css("color", "red");
  });
</script>
```

### Disable an Element Using jQuery

```javascript
<script>
  $(document).ready(function() {
    $("#target1").prop("disabled", true);
  });
</script>
```

### Change Text Inside an Element Using jQuery

```javascript
<script>
  $(document).ready(function() {
    $("#target4").html("<em>#target4</em>");

  });
</script>
```
