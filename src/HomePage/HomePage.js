import { Header } from "../components/Header/Header";
import { Search } from "../components/Search/Search";
import { List } from "../components/Lists/Lists";
import { Favourites } from "../components/Favourites/Favourites";


export function HomePage(){
    return (
        <div>
           <header>
               <Header/>
            </header> 
            <main >
                <Search/>
                <List/>
            </main>
            <aside className="favourite">
                <Favourites/>
            </aside>
        </div>
    )
}