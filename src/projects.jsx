import "./start.css"
export default function projects(){

    const App = () => {
        const scrollToSection = (id) => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        };
    }

    return (
        <>
        <meta charSet="utf-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Meryem Khadrouni</title>
        {/* Favicon*/}
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        {/* Custom Google font*/}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
            href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
        />
        {/* Core theme CSS (includes Bootstrap)*/}
        <link href="css/styles.css" rel="stylesheet" />
        <main className="flex-shrink-0">
            {/* Navigation*/}
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
            <div className="container px-5">
                <a className="navbar-brand" href="index.html">
                <span className="fw-bolder text-primary">Meryem Khadrouni</span>
                </a>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                    <li className="nav-item">
                    <a className="nav-link" href="#/Start">
                        Home
                    </a>
                    <a className="nav-link" href="#/Projects">
                        Projects
                        </a>
                    <a className="nav-link" href="#/Connect">
                        Connect
                    </a>
                    </li>
                    <li className="nav-item">
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            </main>
            <div> 
                <h1> ---------PROJECTS COMMING SOON! -----------------------------------</h1>
                <h1> ---------PROJECTS COMMING SOON! -----------------------------------</h1>
                <h1> ---------PROJECTS COMMING SOON! -----------------------------------</h1>
                <h1> ---------PROJECTS COMMING SOON! -----------------------------------</h1>
                <h1> ---------PROJECTS COMMING SOON! -----------------------------------</h1>
                <h1> ---------PROJECTS COMMING SOON! -----------------------------------</h1>
                <h1> ---------PROJECTS COMMING SOON! -----------------------------------</h1>
                <h1> ---------PROJECTS COMMING SOON! -----------------------------------</h1>
                <h1> ---------PROJECTS COMMING SOON! -----------------------------------</h1>
                <h1> ---------PROJECTS COMMING SOON! -----------------------------------</h1>
                <h1> ---------PROJECTS COMMING SOON! -----------------------------------</h1>
                <h1> ---------PROJECTS COMMING SOON! -----------------------------------</h1>
                <h1> ---------PROJECTS COMMING SOON! -----------------------------------</h1>
                <h1> ---------PROJECTS COMMING SOON! -----------------------------------</h1>
                <h1> ---------PROJECTS COMMING SOON! -----------------------------------</h1>



            </div>

            </>
    )
}