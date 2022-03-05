<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a class="navbar-brand" href="#">{{config('app.name')}}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link @if(Request::route()->getName() == 'home') active @endif" aria-current="page"
                       href="{{route('home')}}">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link @if(Request::route()->getName() == 'car') active @endif" aria-current="page"
                       href="{{route('car')}}">Voiture</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link @if(Request::route()->getName() == 'carequipment') active @endif" aria-current="page"
                       href="{{route('carEquipment')}}">Équipement Voiture</a>
                </li>
            </ul>
        </div>
    </div>
    </div>
</nav>
