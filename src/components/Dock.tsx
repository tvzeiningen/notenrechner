import { UserRound, UsersRound, Info } from "lucide-react";
import { useRoute } from "../screens/Router";

export default function Dock() {
    const { route, navigate } = useRoute();

    return (
        <div className="dock relative">
            <button className={route === "Athletics" ? "dock-active" : ""} onClick={() => navigate("Athletics")}>
                <UserRound />
                <span className="dock-label">Leichtathletik</span>
            </button>

            <button className={route === "Tests" ? "dock-active" : ""} onClick={() => navigate("Tests")}>
                <UsersRound />
                <span className="dock-label">Fachtest</span>
            </button>

            <button className={route === "About" ? "dock-active" : ""} onClick={() => navigate("About")}>
                <Info />
                <span className="dock-label">About</span>
            </button>
        </div>
    );
}