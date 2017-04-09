<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>
</head>
<body>
    <div id="app"></div>
    <script>window.__SERVER__=1</script>
    <script>window.__INITIAL_STATE__='{!! json_encode($initial_state) !!}'</script>
    <script src="/js/app.js"></script>
</body>
</html>
