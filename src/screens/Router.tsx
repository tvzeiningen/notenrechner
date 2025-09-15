import AthleticsScreen from "./Athletics";
import TestsScreen from "./Tests"
import { AboutScreen } from "./About";
import { createContext, useContext, useState, type ReactNode } from "react";

const appScreens = {
    "Athletics": AthleticsScreen,
    "Tests": TestsScreen,
    "About": AboutScreen,
};

export type AppRoute = keyof typeof appScreens;

export default function Router({ route }: { route: AppRoute }) {
    return appScreens[route]();
}

type RouteContextType = {
  route: AppRoute;
  navigate: (to: AppRoute) => void;
};

const RouteContext = createContext<RouteContextType | undefined>(undefined);

export function RouteProvider({
  initialRoute,
  children,
}: {
  initialRoute: AppRoute;
  children: ReactNode;
}) {
  const [route, setRoute] = useState<AppRoute>(initialRoute);

  return (
    <RouteContext.Provider value={{ route, navigate: setRoute }}>
      {children}
    </RouteContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useRoute() {
  const ctx = useContext(RouteContext);
  if (!ctx) {
    throw new Error("useRoute must be used inside a <RouteProvider>");
  }
  return ctx;
}
