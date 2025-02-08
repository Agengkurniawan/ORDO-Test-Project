<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ordo-Project</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('css/navbar.css') }}">
    <link rel="stylesheet" href="{{ asset('css/about.css') }}">
    <link rel="stylesheet" href="{{ asset('css/event.css') }}">
    <link rel="stylesheet" href="{{ asset('css/sponsorship.css') }}">
    <link rel="stylesheet" href="{{ asset('css/footbar.css') }}">
</head>

<body>
    <header>
        @include('layouts.navbar')
    </header>
    <main>@yield('content')</main>
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>